// 'use strict';

function lang() {
	return get_cookie('language') || 'cro';
}

function change_language(lng) {
	if (lang() == lng) {
		show_menu();
		return;
	}
	set_language(lng);
	start_daily_challenge() || load_game() || random_word();
}

function set_language(lng) {
	set_cookie('language', lng);
	guessword.placeholder = placeholder[lng];
}

var placeholder = {
	eng: "WORD...",
	cro: "RIJEČ...",
}

function word_list(lng) {
	return (lng || lang()) == "cro" ? word_list_cro : word_list_eng;
}

function alphabet() {
	return (lang() == "cro" ? alphabet_cro : alphabet_eng).split(",");
}

function get_word(idx, lng) {
	return word_list(lng)[idx];
}

function word_cnt(lng) {
	return word_list(lng).length;
}

function word_len(w) {
	if (lang() != "cro")
		return w.length;

	return to_char_list(w).length;
}

function to_char_list(w) {
	let is_cro = lang() == "cro";
	w = w.toUpperCase();
	let ret = [];
	for (let i = 0; i < w.length; ++i) {
		if (is_cro && i < w.length - 1 && (
			(w[i] == 'L' && w[i + 1] == 'J') ||
			(w[i] == 'N' && w[i + 1] == 'J') ||
			(w[i] == 'D' && w[i + 1] == 'Ž')))
		{
			ret.push(w.substring(i, i + 2));
			++i;
		}
		else {
			ret.push(w.substring(i, i + 1));
		}
	}
	return ret;
}

const alphabet_eng = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
const alphabet_cro = "A,B,C,Č,Ć,D,DŽ,Đ,E,F,G,H,I,J,K,L,LJ,M,N,NJ,O,P,R,S,Š,T,U,V,Z,Ž";

var challenge = null;
var hidden_word = "";
var guess_cnt = 0;
var guesses = [];
var daily_challenge = 0;
var game_ended = false;
var letter_class = { };
var selected_placeholder = null;

function clear_state() {
	challenge = null;
	hidden_word = "";
	guess_cnt = 0;
	guesses = [];
	daily_challenge = 0;
	game_ended = false;
	letter_class = { };
	selected_placeholder = null;
	guessword.value = '';

	topnav_guess.style.display = "block";
	topnav_game_end.style.display = "none";
	hide_popups();
}

function set_hidden_word(w, user_action) {
	hidden_word = w.toUpperCase();
	// console.log(hidden_word);
	guess_cnt = 1;
	clear_tables();
}

function clear_tables() {
	for (var i = 1; i < 10; ++i) {
		var gk = "g" + i.toString();

		var cells = []
			.concat(i, "       ".split(""))
			.map(function(ch, i) {
				if (i >= 1 && i <= 5)
					return "<td onclick='on_placeholder_clicked(this);'></td>";
				return "<td>" + ch + "</td>";
			})
			.join("");

		document.getElementById(gk).innerHTML = cells;
		if (challenge && challenge.guess_cnt == i && !challenge.results_shown)
			document.getElementById(gk).className = 'target';
		else
			document.getElementById(gk).className = '';
	}

	var alph = alphabet();
	for (var i = 0;; i += 10) {
		if (i >= alph.length)
			break;

		var abck = "abc" + (i / 10).toString();
		var alph10 = [ ];
		for (var j = 0; j < 10; ++j) {
			alph10.push(alph[i + j]);
		}
		var cells = alph10
			.filter(function(x) { return Boolean(x); })
			.map(create_key)
			.join("")
		document.getElementById(abck).innerHTML = cells;
	}
}

function create_letter(ch) {
	return "<td class='letter_" + ch + "' onclick='on_letter_clicked(this);'>" + ch + "</td>";
}

function create_key(ch) {
	return "<td class='letter_" + ch + "' onclick='on_key_clicked(this);'>" + ch + "</td>";
}

window.onload = function() {
	if (check_url()) {
		if (game_already_played() && challenge.guesses) {
			challenge.already_played = true;
			restore_my_guesses();
			show_guesses(challenge.guesses)
		}
		return;
	}

	if (!hidden_word)
		load_game() || start_daily_challenge() || random_word();
};

function check_url() {
	let q_idx = document.URL.indexOf('?');
	if (q_idx == -1)
		return false;

	try {
		let game = decodeURIComponent(atob(document.URL.substring(q_idx + 1))).split('|');
		if (game.length != 4 || game[0] != 'v1') // v1|{language}|{hidden_word}|{guess_1,guess_2,...,guess_n}
			return false;

		let lang = game[1];
		let hidden_word = game[2];
		let guesses = game[3].split(',');

		if (!is_in_dict(hidden_word, lang))
			return false;

		let last_guess = guesses[guesses.length - 1];
		let guess_cnt = is_same_word(last_guess, hidden_word) ? guesses.length : null;
		let daily_challenge = 0;

		let dc = get_daily_challenge();
		if (is_same_word(dc.hidden_word, hidden_word) && is_same_word(dc.guess1, guesses[0]))
			daily_challenge = dc.day;

		start_challenge({ lang,  hidden_word, guess_cnt, guesses, daily_challenge });
		return true;
	}
	catch(e) {
		console.log('wrong url', e);
	}
	return false;
}

function start_challenge(game) {
	clear_state();
	daily_challenge = game.daily_challenge || 0;
	if (!game.guess1) game.guess1 = game.guesses[0];
	challenge = game;

	refresh_game_title();
	set_language(game.lang);
	set_hidden_word(game.hidden_word);
	guessword.value = game.guess1;
	guess_word();
	save_game();
}

function on_placeholder_clicked(el) {
	if (el && game_ended)
		return;

	if (selected_placeholder)
		selected_placeholder.className = '';

	if (selected_placeholder == el) {
		selected_placeholder = null; // clear selection
	}
	else if (el && el.innerHTML.length > 0) {
		el.innerHTML = ''; // clear guess
	}
	else {
		selected_placeholder = el; // set selection
		if (el) selected_placeholder.className = 'selected';
	}
}

function on_letter_clicked(el) {
	var ltr = el.innerHTML;
	if (!can_update_letter_class(ltr))
		return;

	if (letter_class[ltr] == 'probable')
		letter_class[ltr] = '';
	else
		letter_class[ltr] = 'probable';

	sync_letter_classes();
}

function on_key_clicked(el) {
	var ltr = el.innerHTML;
	if (!can_update_letter_class(ltr))
		return;

	if (letter_class[ltr] == 'probable' || letter_class[ltr] == 'unwanted')
		letter_class[ltr] = '';
	else
		letter_class[ltr] = 'unwanted';

	sync_letter_classes();
}

function can_update_letter_class(ltr) {
	if (game_ended)
		return false;

	if (letter_class[ltr] == 'impossible')
		return false;

	if (selected_placeholder) {
		selected_placeholder.innerHTML = ltr;
		on_placeholder_clicked(null);
		return false;
	}

	return true;
}

function reset_unprobables() {
	for (var ltr of alphabet()) {
		if (letter_class[ltr] == 'unprobable') letter_class[ltr] = '';
	}
}

function sync_letter_classes() {
	reset_unprobables();
	let sel = Object.keys(letter_class).filter(function(ltr) {
		return letter_class[ltr] == 'probable';
	});
	for (const guess of guesses) {
		let m = match_word(guess);
		let cnt = m[0] + m[1];
		if (cnt == 0) continue;
		let cl = to_char_list(guess);
		let sel_cnt = 0;
		for (var ltr of sel) { if (cl.includes(ltr)) ++sel_cnt; }
		if (sel_cnt >= cnt) {
			for (ltr of cl) {
				if (letter_class[ltr] != 'impossible' && letter_class[ltr] != 'unwanted' && !sel.includes(ltr))
					letter_class[ltr] = 'unprobable';
			}
		}
	}
	update_keyboard();
}

function update_keyboard() {
	alphabet().forEach(function(ltr) {
		var elems = document.getElementsByClassName ("letter_" + ltr);
		for (var i = 0; i < elems.length; ++i) {
			elems[i].className = "letter_" + ltr + " " + (letter_class[ltr] || '');
		}
	});
}

function random_word() {
	clear_state();
	refresh_game_title();
	set_hidden_word(get_word(parseInt(Date.now()) % word_cnt()));
	guessword.focus();
	save_game();
}

function chk_word(w) {
	if (word_len(w) != 5)
		return false;

	if (is_in_dict(w))
		return true;

	return false;
}

function is_same_word(w1, w2) {
	return w1.toLowerCase() == w2.toLowerCase();
}

function is_in_dict(w, lng) {
	w = w.toLowerCase();
	var lb = 0, ub = word_cnt(lng) - 1;
	do {
		var mid = parseInt((lb + ub) / 2);
		var s = get_word(mid, lng);
		if (s == w)
			return true;
		if (w < s)
			ub = mid - 1;
		else
			lb = mid + 1;
	}
	while (lb <= ub);
	return false;
}

function match_word(w) {
	let wl = to_char_list(w);
	let wordl = to_char_list(hidden_word);
	const sk = [], sw = [];
	var sz = 0, g = 0;
	for (let i = 0; i < wl.length; ++i) {
		if (wl[i] == wordl[i])
			++g;
		else {
			sk[sz] = wordl[i];
			sw[sz] = wl[i];
			++sz;
		}
	}
	if (g == 5)
		return [5, 0];
	sk.sort();
	sw.sort();
	var y = 0;
	var ki = 0, wi = 0;
	while (ki < sz && wi < sz) {
		if (sk[ki] < sw[wi]) ++ki;
		else if (sk[ki] > sw[wi]) ++wi;
		else ++y, ++ki, ++wi;
	}
	return [g, y];
}

function clear_assumptions() {
	for (var ltr in letter_class) {
		if (letter_class[ltr] != 'impossible')
			delete letter_class[ltr];
	}
	on_placeholder_clicked(null);
	reset_unprobables();
	update_keyboard();
}

function guess_word(user_action) {
	var s = guessword.value.trim();
	if (!chk_word(s))
		return;

	guesses.push(s);
	if (user_action) save_my_guesses();

	var m = match_word(s);
	var letters = to_char_list(s);
	fill_guesses_table(s, guess_cnt, m, letters);

	if (m[0] == 5 || (++guess_cnt) == 10) {
		update_stats();
		show_game_end();
	}

	if (m[0] == 0 && m[1] == 0) {
		letters.forEach(function(ltr) {
			letter_class[ltr] = 'impossible';
		})
	}

	sync_letter_classes();
	document.getElementById("guessword").value = "";
}

function fill_guesses_table(s, guess_cnt, m, letters) {
	s = s.toUpperCase();
	m = m || match_word(s);
	var gk = "g" + guess_cnt.toString();
	letters = letters || to_char_list(s);
	var cells = []
		.concat(guess_cnt, letters, m)
		.map(function(ch, i) { return i >= 1 && i <= 6 ? create_letter(ch) : '<td>' + ch + '</td>'} )
		.join('');
	document.getElementById(gk).innerHTML = cells;
	
	check_game_ended(m, guess_cnt);
	return m;
}

function check_game_ended(m, guess_cnt) {
	if (!(game_ended = (m[0] == 5 || guess_cnt == 9)))
		return;

	if (m[0] == 5)
		document.getElementById("g" + guess_cnt).classList.add('correct-answer');
	else
		document.getElementById("g9").classList.add('wrong-answer');

	toggle_results_btn.style.display = challenge && challenge.guesses ? "inline-block" : "none";
	topnav_guess.style.display = "none";
	topnav_game_end.style.display = "block";
	on_placeholder_clicked(null);
}

function guess_word_on_key_down(keyCode) {
	if (keyCode == 13) guess_word(true);
}

function guess_word_on_key_up() {
	var guess_color = 'black';
	var s = guessword.value.trim();
	var len = word_len(s);
	if (len > 5 || len == 5 && !is_in_dict(s))
		guess_color = 'red';

	guessword.style.color = guess_color;
}

function get_game_link() {
	let game = btoa(encodeURIComponent([ 'v1', lang(), hidden_word, guesses.join(',') ].join('|')));
	return "https://cimott.github.io?" + game;
}

function show_game_end() {
	hide_popups();
	game_end.style.display = "block";
	
	let win = guess_cnt < 10;
	game_end_result.innerHTML = win
		? "You win in " + guess_cnt + " tries."
		: "You lose! Correct word is <b>" + hidden_word + "</b>.";

	if (navigator.share) {
		send_challenge_btn.style.display = "block";
		copy_challenge_btn.style.display = "none";
		manually_copy_challenge.style.display = "none";
	}
	else if (navigator.clipboard) {
		send_challenge_btn.style.display = "none";
		copy_challenge_btn.style.display = "block";
		manually_copy_challenge.style.display = "none";

		copy_challenge_btn.innerHTML = "Copy Challenge";
		copy_challenge_btn.classList.remove('copied');
	}
	else {
		send_challenge_btn.style.display = "none";
		copy_challenge_btn.style.display = "none";
		manually_copy_challenge.style.display = "block";

		challenge_link.innerHTML = get_game_link();
	}
	compare_results_btn.style.display = challenge && challenge.guesses ? "block" : "none";
}

function hide_popups() {
	var popups = document.getElementsByClassName ("popup");
	for (var i = 0; i < popups.length; ++i)
		popups[i].style.display = "none";
}

function eat_click(e) {
	e = e || window.event;
	e.stopPropagation();
}

function start_new_game() {
	hide_popups();

	var day = days_since_epoch();
	if (!get_cookie(daily_challenge_cookie_key(day, 'guesses')))
		start_daily_challenge();
	else if (daily_challenge_ck(day, 'finished') == '1' || daily_challenge)
		random_word();
	else
		show_choose_game();
}

function show_choose_game() {
	hide_popups();
	choose_game.style.display = "block";	
}

function show_menu() {
	hide_popups();
	menu.style.display = "block";	
}

function show_language() {
	hide_popups();
	language.style.display = "block";
	let lng = lang();
	lang_cro.classList[lng == 'cro' ? 'add' : 'remove']('selected');
	lang_eng.classList[lng == 'eng' ? 'add' : 'remove']('selected');
}

function show_stats_menu() {
	hide_popups();
	stats_menu.style.display = "block";
}

function show_all_stats() {
	hide_popups();
	stats.style.display = "block";
}

function show_stats(which) {
	var ck_prefix = which + "_" + lang() + "_";
	hide_popups();
	stats.style.display = "block";

	var round = function(x) {
		return ((x * 10) | 0) / 10;
	};

	var total = get_int_cookie(ck_prefix + 'cnt');
	var wins = 0;
	var wins_total_guesses = 0;
	var wins_in = { };
	for (let i = 1; i < 10; ++i) {
		wins_in[i] = get_int_cookie(ck_prefix + 'solved_in_' + i);
		wins += wins_in[i];
		wins_total_guesses += i * wins_in[i];
	}
	var win_rate = round(total > 0 ? 100 * wins / total : 0);
	var wins_avg_guesses = round(wins > 0 ? wins_total_guesses / wins : 0);

	stats_title.innerHTML = which == 'daily' ? 'Daily Challenges' : 'All Games';
	stats_played.innerHTML = total;
	stats_win_rate.innerHTML = win_rate;
	stats_avg_guesses.innerHTML = wins_avg_guesses;
	stats_streak.innerHTML = get_int_cookie(ck_prefix + 'streak');
	stats_max_streak.innerHTML = get_int_cookie(ck_prefix + 'max_streak');
}

function send_challenge() {
	navigator.share({
		title: "Mastermind Wordle",
		url: get_game_link(),
	});
}

function copy_challenge() {
	navigator.clipboard.writeText(get_game_link());
	copy_challenge_btn.innerHTML = "Link Copied!";
	copy_challenge_btn.classList.add('copied');
}

function compare_results() {
	hide_popups();
	show_guesses(challenge.guesses);
}

function toggle_results() {
	show_guesses(challenge.results_shown ? guesses : challenge.guesses);
}

function show_guesses(gs) {
	challenge.results_shown = gs == challenge.guesses;
	refresh_game_title();
	clear_assumptions();
	clear_tables();
	gs.forEach(function(g, idx) {
		fill_guesses_table(g, idx + 1);
	});
}

function save_game() {
	set_cookie('current_game_' + lang(), btoa(encodeURIComponent([ lang(), hidden_word, guesses.join(','), daily_challenge ].join('|'))));
}

function save_my_guesses() {
	save_game();
	set_cookie(game_cookie_key(), encodeURIComponent(guesses.join(',')));
	if (daily_challenge) daily_challenge_ck(daily_challenge, 'guesses', guesses.join(','));
}

function load_game() {
	var game = get_cookie('current_game_' + lang());
	if (!game)
		return false;

	game = decodeURIComponent(atob(game)).split('|');
	if (game.length < 4)
		return false;

	if (!is_in_dict(game[1], game[0]))
		return false;

	clear_state();
	set_language(game[0]);
	set_hidden_word(game[1]);
	daily_challenge = parseInt(game[3]);
	refresh_game_title();
	game[2].split(',').forEach(function(guess) {
		guessword.value = guess;
		guess_word();
	})
	return true;
}

function get_daily_challenge(day) {
	day = day || days_since_epoch();
	let seed = day;
	let to_guess_yesterday = rand_idx(seed - 1);
	let to_guess_today = rand_idx(seed);
	
	let retry = 0;
	while (to_guess_today == to_guess_yesterday)
		to_guess_today = rand_idx(seed + (++retry))

	let guess1_today = to_guess_yesterday;
	retry = 0;
	while (guess1_today == to_guess_today)
		guess1_today = rand_idx(seed + (++retry));

	return { day: day, hidden_word: get_word(to_guess_today), guess1: get_word(guess1_today) };
}

function start_daily_challenge() {
	var day = days_since_epoch();
	if (daily_challenge_ck(day, 'finished') == '1')
		return false;

	var dc = get_daily_challenge(day);
	start_challenge({
		lang: lang(),
		hidden_word: dc.hidden_word,
		guess1: dc.guess1,
		daily_challenge: day,
	});

	var gs = daily_challenge_ck(day, 'guesses');
	if (gs)
		gs.split(',').slice(1).forEach(function(g) {
			guessword.value = g;
			guess_word();
		});	

	daily_challenge_ck(day, 'guesses', guesses.join(','));
	return true;
}

function daily_challenge_ck(day, what, val) {
	if (val)
		set_cookie(daily_challenge_cookie_key(day, what), btoa(encodeURIComponent(val)), 2);
	else
		return decodeURIComponent(atob(get_cookie(daily_challenge_cookie_key(day, what))));
}

function refresh_game_title() {
	let title = '';
	if (daily_challenge)
		title = "DAILY CHALLENGE";
	else if (challenge) {
		if (challenge.already_played)
			title = challenge.results_shown ? "FRIEND'S GUESSES" : "MY GUESSES";
		else
			title = challenge.results_shown ? "CHALLENGER'S GUESSES" : "CHALLENGE";
	}
	game_title.innerHTML = title;
}

function rand_idx(x){
	for (var i = 0; i < 49; ++i)
		x = (x ^ (x << 1) ^ (x >> 1)) % 10000;
	return x % word_cnt();
}

function days_since_epoch() {
	var now = new Date();
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // to make new daily challenge available at midnight local time
	return Math.floor(now / 8.64e7);
}

function daily_challenge_cookie_key(day, what) {
	return [ 'daily_challenge', day, lang(), what ].join('_');
}

function game_cookie_key() {
	return [ 'game', lang(), hidden_word, encodeURIComponent(guesses[0]) ].join('_')
}

function game_already_played() {
	let my_guesses = get_my_guesses();
	if (!my_guesses)
		return false;

	let last_guess = my_guesses[my_guesses.length - 1];
	let game_ended = is_same_word(last_guess, hidden_word) || my_guesses.length == 9;
	return game_ended;
}

function update_stats() {
	erase_cookie('current_game_' + lang());
	if (daily_challenge) daily_challenge_ck(daily_challenge, 'finished', '1');

	var all_prefix = 'all_' + lang() + '_';
	var daily_prefix = 'daily_' + lang() + '_';

	inc_cookie(all_prefix + 'cnt');
	if (daily_challenge) inc_cookie(daily_prefix + 'cnt');

	let win = guess_cnt < 10;
	if (!win) {
		set_cookie(all_prefix + 'streak', 0);
		if (daily_challenge) set_cookie(daily_prefix + 'streak', 0);
	}
	else {
		inc_cookie(all_prefix + 'solved_in_' + guess_cnt);
		inc_cookie(all_prefix + 'streak');
		if (get_int_cookie(all_prefix + 'streak') > get_int_cookie(all_prefix + 'max_streak'))
			inc_cookie(all_prefix + 'max_streak');

		if (daily_challenge) {
			inc_cookie(daily_prefix + 'solved_in_' + guess_cnt);
			inc_cookie(daily_prefix + 'streak');
			if (get_int_cookie(daily_prefix + 'streak') > get_int_cookie(daily_prefix + 'max_streak'))
				inc_cookie(daily_prefix + 'max_streak');
		}
	}
}

function get_my_guesses() {
	return decodeURIComponent(get_cookie(game_cookie_key())).split(',');
}

function restore_my_guesses() {
	guesses = get_my_guesses();	
	guess_cnt = guesses.length;
}

function set_cookie(name, value, days) {
	var expires = "";
	if (!days) days = 365 * 10;
	var date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	expires = "; expires=" + date.toUTCString();
	document.cookie = name + "=" + (value || "")  + expires + "; path=/; Secure";
}

function get_cookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; ++i) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function inc_cookie(name) {
	set_cookie(name, get_int_cookie(name) + 1);
}

function get_int_cookie(name) {
	return parseInt(get_cookie(name)) || 0;
}

function erase_cookie(name) {
	document.cookie = name +'=; Path=/; Secure; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
