function css(selector, property, value) {
	for (var i = 0; i < document.styleSheets.length; i++) {
		try {
			document.styleSheets[i].insertRule(selector + ' {' + property + ':' + value + '}', document.styleSheets[i].cssRules.length);
		} catch (err) {
			try {
				document.styleSheets[i].addRule(selector, property + ':' + value);
			} catch (err) {}
		} //IE
	}
}

window.onload = function () {
	var buttons = '<input type="button" name="show-proto-4" id="show-proto-4" class="cbi-button cbi-button-apply" style="margin-right: 5px" value="<%:Hide IPv4%>">';
	buttons += '<input type="button" name="show-proto-6" id="show-proto-6" class="cbi-button cbi-button-apply" value="<%:Hide IPv6%>">';

	document.getElementById('togglebuttons').innerHTML = buttons;

	var visible = true;
	document.getElementById('show-proto-4').onclick = function () {
		visible = !visible;
		document.getElementById('show-proto-4').value = visible ? '<%:Hide IPv4%>' : '<%:Show IPv4%>';
		document.getElementById('show-proto-4').className = visible ? 'cbi-button cbi-button-apply' : 'cbi-button cbi-button-reset';
		css('.proto-4', 'display', visible ? 'table-row' : 'none');
	};

	var visible6 = true;
	document.getElementById('show-proto-6').onclick = function () {
		visible6 = !visible6;
		document.getElementById('show-proto-6').value = visible6 ? '<%:Hide IPv6%>' : '<%:Show IPv6%>';
		document.getElementById('show-proto-6').className = visible6 ? 'cbi-button cbi-button-apply' : 'cbi-button cbi-button-reset';
		css('.proto-6', 'display', visible6 ? 'table-row' : 'none');
	};
};
