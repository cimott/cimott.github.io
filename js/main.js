

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
	random_word();
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
	is_cro = lang() == "cro";
	w = w.toUpperCase();
	ret = [];
	for (i = 0; i < w.length; ++i) {
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

const alphabet_eng = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Q,Z";
const alphabet_cro = "A,B,C,Č,Ć,D,DŽ,Đ,E,F,G,H,I,J,K,L,LJ,M,N,NJ,O,P,R,S,Š,T,U,V,Z,Ž";

var word_idx = 0;
var word = "";
var guess_cnt = 0;
var guesses = [];
var letter_class = { };
var selected_placeholder = null;

function clear_state() {
	word_idx = 0;
	word = "";
	guess_cnt = 0;
	guesses = [];
	letter_class = { };
	selected_placeholder = null;
	for (var i = 1; i <= 9; ++i)
		document.getElementById("g" + i).className = '';
	guessword.value = '';
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
	clear_state();
	word_idx = idx;
	word = get_word(idx).toUpperCase();
	// console.log(word);
	guess_cnt = 1;
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
	check_url_old() || check_url_new();

	if (word_idx == 0)
		random_word();
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

	start_game_from_url(map);
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

		start_game_from_url({ lang: game[0], idx: game[1], guess1: game[2], guess_cnt: game[3] });	
		return true;
	}
	catch(e) { }
	return false;
}

function start_game_from_url(game) {
	set_language(game.lang);
	set_hidden_word(game.idx);
	guessword.value = game.guess1;
	guess_word();
	if (game.guess_cnt) document.getElementById("g" + game.guess_cnt).classList.add('target');
}

function on_placeholder_clicked(el) {
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
	update_keyboard();
}

function reset_unprobables() {
	for (ltr of alphabet()) {
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
		for (ltr of sel) { if (cl.includes(ltr)) ++sel_cnt; }
		if (sel_cnt >= cnt) {
			for (ltr of cl) {
				if (letter_class[ltr] != 'impossible' && !sel.includes(ltr))
					letter_class[ltr] = 'unprobable';
			}
		}
	}
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
	wl = to_char_list(w);
	wordl = to_char_list(word);
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
	s = s.toUpperCase();
	var m = match_word(s);
	var gk = "g" + guess_cnt.toString();
	var letters = to_char_list(s);
	var cells = []
		.concat(guess_cnt, letters, m)
		.map(function(ch, i) { return i >= 1 && i <= 6 ? create_letter(ch) : '<td>' + ch + '</td>'} )
		.join('');
	document.getElementById(gk).innerHTML = cells;
	if (m[0] == 5 || (++guess_cnt == 10))
		show_game_end();

	if (m[0] == 0 && m[1] == 0) {
		letters.forEach(function(ltr) {
			letter_class[ltr] = 'impossible';
		})
	}

	reset_unprobables();
	update_keyboard();
	document.getElementById("guessword").value = "";
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
	let game = btoa(encodeURIComponent([ lang(), word_idx, guesses[0], win ? guess_cnt : '' ].join('|')));
	return "https://cimott.github.io?" + game;
}

function show_game_end() {
	game_end.style.display = "block";
	let win = guess_cnt < 10;
	game_end_result.innerHTML = win
		? "You win in " + guess_cnt + " tries."
		: "You lose! Correct word is <b>" + word + "</b>.";

	if (!navigator.share) {
		game_end_challenge_no_sharing.style.display = "block";
		game_end_challenge_sharing.style.display = "none";
		game_end_challenge_link.innerHTML = get_game_link();
	}
	else {
		game_end_challenge_no_sharing.style.display = "none";
		game_end_challenge_sharing.style.display = "block";		
	}
}

function hide_game_end() {
	game_end.style.display = "none";	
}

function eat_click(e) {
	e = e || window.event;
	e.stopPropagation();
}

function restart_game() {
	hide_game_end();
	random_word();
}

function send_challenge() {
	navigator.share({
		title: "Mastermind Wordle",
		url: get_game_link(),
	});
}
