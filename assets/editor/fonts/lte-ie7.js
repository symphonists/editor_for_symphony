/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-bold' : '&#xe000;',
			'icon-italic' : '&#xe001;',
			'icon-quotes-left' : '&#xe002;',
			'icon-list' : '&#xe003;',
			'icon-numbered-list' : '&#xe004;',
			'icon-link' : '&#xe005;',
			'icon-image' : '&#xe006;',
			'icon-play' : '&#xe007;',
			'icon-music' : '&#xe008;',
			'icon-contract' : '&#xe009;',
			'icon-expand' : '&#xe00a;',
			'icon-question' : '&#xe00b;',
			'icon-info' : '&#xe00c;',
			'icon-undo' : '&#xe00d;',
			'icon-redo' : '&#xe00e;',
			'icon-embed' : '&#xe00f;',
			'icon-eye' : '&#xe010;',
			'icon-envelop' : '&#xe011;',
			'icon-location' : '&#xe012;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};