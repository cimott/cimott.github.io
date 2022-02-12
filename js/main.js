// 'use strict';

function lang() {
	var el = document.getElementById('language');
	return el.innerHTML.indexOf('HR') != -1 ? 'cro' : 'eng';
}

function change_language() {
	var lng = lang();
	var from = (lng == 'cro' ? 'HR' : 'EN');
	var to = (lng == 'cro' ? 'EN' : 'HR');
	var el = document.getElementById('language');
	el.innerHTML = el.innerHTML.replace(from, to);
	start_new_game();
}

function set_language(lng) {
	var to = (lng == 'cro' ? 'HR' : 'EN');
	var el = document.getElementById('language');
	el.innerHTML = el.innerHTML.replace(/HR|EN/, to);
}

function word_list() {
	return lang() == "cro" ? word_list_cro : word_list_eng;
}

function alphabet() {
	return (lang() == "cro" ? alphabet_cro : alphabet_eng).split(",");
}

function get_word(idx) {
	return word_list()[idx];
}

function word_cnt() {
	return word_list().length;
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
var word_idx = 0;
var word = "";
var guess_cnt = 0;
var guesses = [];
var is_daily_challenge = false;
var game_ended = false;
var letter_class = { };
var selected_placeholder = null;

function clear_state() {
	challenge = null;
	word_idx = 0;
	word = "";
	guess_cnt = 0;
	guesses = [];
	is_daily_challenge = false;
	game_ended = false;
	letter_class = { };
	selected_placeholder = null;
	guessword.value = '';

	topnav_guess.style.display = "block";
	topnav_game_end.style.display = "none";
}

const magic_idx = 5461;

function encode_idx(idx) {
	let swapped_idx = ((idx & 0x7f) << 7) | (idx >> 7);
	return swapped_idx ^ magic_idx;
}

function decode_idx(idx) {
	idx = idx ^ magic_idx;
	let unswapped_idx = ((idx & 0x7f) << 7) | (idx >> 7);
	return unswapped_idx;
}

function set_hidden_word(idx) {
	word_idx = idx;
	word = get_word(idx).toUpperCase();
	// console.log(word);
	guess_cnt = 1;
	clear_tables();
	save_game();
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
			.map(create_letter)
			.join("")
		document.getElementById(abck).innerHTML = cells;
	}
}

function create_letter(ch) {
	return "<td class='letter_" + ch + "' onclick='on_letter_clicked(this);'>" + ch + "</td>";
}

window.onload = function() {
	if (check_url_old() || check_url_new()) {
		if (game_already_played() && challenge.guesses) {
			restore_my_guesses();
			show_guesses(challenge.guesses)
		}
		return;
	}

	if (word_idx == 0)
		load_game() || daily_challenge() || random_word();
};

function check_url_old() {
	let idx = document.URL.indexOf('?');
	if (idx == -1)
		return false;

	let pairs = decodeURIComponent(document.URL.substring(idx+1, document.URL.length)).split('&');
	let map = { };
	pairs.forEach(function(pair) {
		var kv = pair.split("=");
		map[kv[0]] = kv[1];
	})
	if (!map["idx"] || !map["guess1"] || !map["lang"])
		return false;

	start_challenge(map);
	return true;
}

function check_url_new() {
	let idx = document.URL.indexOf('?');
	if (idx == -1)
		return false;

	try {
		let game = decodeURIComponent(atob(document.URL.substring(idx + 1))).split('|');
		if (game.length < 3)
			return false;

		let guesses = game[4] ? game[4].split(',') : null;
		start_challenge({ lang: game[0], idx: game[1], guess1: game[2], guess_cnt: game[3], guesses: guesses });
		return true;
	}
	catch(e) {
		console.log('wrong url', e);
	}
	return false;
}

function start_challenge(game) {
	clear_state();
	is_daily_challenge = Boolean(game.daily_challenge);
	challenge = game;
	refresh_game_title();
	set_language(game.lang);
	set_hidden_word(game.idx);
	guessword.value = game.guess1;
	guess_word();
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
	if (game_ended)
		return;

	var ltr = el.innerHTML;
	if (letter_class[ltr] == 'impossible')
		return;

	if (selected_placeholder) {
		selected_placeholder.innerHTML = ltr;
		on_placeholder_clicked(null);
		return;
	}

	if (letter_class[ltr] == 'probable')
		letter_class[ltr] = '';
	else
		letter_class[ltr] = 'probable';

	sync_letter_classes();
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
				if (letter_class[ltr] != 'impossible' && !sel.includes(ltr))
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
	set_hidden_word(parseInt(Date.now()) % word_cnt());
	guessword.focus();
}

function chk_word(w) {
	if (word_len(w) != 5)
		return false;

	if (is_in_dict(w))
		return true;

	return false;
}

function is_in_dict(w) {
	w = w.toLowerCase();
	var lb = 0, ub = word_cnt() - 1;
	do {
		var mid = parseInt((lb + ub) / 2);
		var s = get_word(mid);
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
	let wordl = to_char_list(word);
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

function guess_word() {
	var s = guessword.value.trim();
	if (!chk_word(s))
		return;

	guesses.push(s);
	save_game();

	var m = match_word(s);
	var letters = to_char_list(s);
	fill_guesses_table(s, guess_cnt, m, letters);

	if (m[0] == 5 || (++guess_cnt) == 10)
		show_game_end();

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

	if (m[0])
		document.getElementById("g" + guess_cnt).classList.add('correct-answer');
	else if (guess_cnt == 9)
		document.getElementById("g9").classList.add('wrong-answer');

	toggle_results_btn.style.display = challenge && challenge.guesses ? "inline-block" : "none";
	topnav_guess.style.display = "none";
	topnav_game_end.style.display = "block";
	on_placeholder_clicked(null);
}

function guess_word_on_key_down(keyCode) {
	if (keyCode == 13) guess_word();
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
	let win = guess_cnt < 10;
	let game = btoa(encodeURIComponent([ lang(), word_idx, guesses[0], win ? guess_cnt : '', guesses.join(',') ].join('|')));
	return "https://cimott.github.io?" + game;
}

function show_game_end() {
	game_end.style.display = "block";
	let win = guess_cnt < 10;
	game_end_result.innerHTML = win
		? "You win in " + guess_cnt + " tries."
		: "You lose! Correct word is <b>" + word + "</b>.";

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

	if (is_daily_challenge)
		set_cookie(daily_challenge_cookie_key(), 'solved', 2);

	erase_cookie('current_game');
	save_my_guesses();
}

function hide_game_end() {
	game_end.style.display = "none";
}

function eat_click(e) {
	e = e || window.event;
	e.stopPropagation();
}

function start_new_game() {
	hide_game_end();
	daily_challenge() || random_word();
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
	hide_game_end();
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
	set_cookie('current_game', btoa(encodeURIComponent([ lang(), word_idx, guesses.join(','), Boolean(is_daily_challenge).toString() ].join('|'))));
}

function load_game() {
	var game = get_cookie('current_game');
	if (!game)
		return false;

	game = decodeURIComponent(atob(game)).split('|');
	if (game.length < 4)
		return false;

	clear_state();
	set_language(game[0]);
	set_hidden_word(game[1]);
	is_daily_challenge = (game[3] == 'true');
	refresh_game_title();
	game[2].split(',').forEach(function(guess) {
		guessword.value = guess;
		guess_word();
	})
	return true;
}

function daily_challenge() {
	if (get_cookie(daily_challenge_cookie_key()))
		return false;

	var seed = days_since_epoch();
	var word_idx = rand_idx(seed, 49);
	var guess_idx = rand_idx(seed, 99);
	var retry = 0;
	while (word_idx == guess_idx && retry < 100)
		guess_idx = rand_idx(seed + (++retry), 99);

	if (retry == 100)
		return false; // jbg, danas nema challenga :)


	start_challenge({
		lang: lang(),
		idx: word_idx,
		guess1: get_word(guess_idx),
		daily_challenge: true,
	});
	return true;
}

function refresh_game_title() {
	let title = '';
	if (is_daily_challenge)
		title = "DAILY CHALLENGE";
	else if (challenge)
		title = challenge.results_shown ? "CHALLENGER'S GUESSES" : "CHALLENGE";
	game_title.innerHTML = title;
}

function rand_idx(x, iterations){
	for (var i = 0; i < iterations; ++i)
		x = (x ^ (x << 1) ^ (x >> 1)) % 10000;
	return x % word_cnt();
}

function days_since_epoch() {
	var now = new Date();
	return Math.floor(now / 8.64e7);
}

function daily_challenge_cookie_key() {
	return [ 'daily_challenge', days_since_epoch(), lang() ].join('_');
}

function game_cookie_key() {
	return [ 'game', lang(), word_idx, encodeURIComponent(guesses[0]) ].join('_')
}

function game_already_played() {
	return Boolean(get_cookie(game_cookie_key()));
}

function save_my_guesses() {
	set_cookie(game_cookie_key(), encodeURIComponent(guesses.join(',')), 30);
}

function restore_my_guesses() {
	guesses = decodeURIComponent(get_cookie(game_cookie_key())).split(',');	
	guess_cnt = guesses.length;
}

function set_cookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
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

function erase_cookie(name) {
	document.cookie = name +'=; Path=/; Secure; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
