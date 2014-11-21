$(document).on('click', '.btn_gods_spells', function() {
	var title = document.title;
	var url = window.location.href;

	chrome.extension.sendMessage({
		action : 'add',
		data: {
			title: title,
			url: url
		}
	});
});