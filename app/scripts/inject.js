var $body = $('body');

var features = {
	initialize : function() {
		this.cleanUpNotNecessaryStuff();
		this.zooming();
	},

	cleanUpNotNecessaryStuff : function() {
		$body.find('#fn_viewQuestions').remove();
		$body.find('#callKismetlHelp').remove();
		$body.find('#kismet-unsend .grey').remove();
	},

	zooming : function() {
		var html =
			'<div class="ed_pro_tools">' +
			'<div class="btn_enlarge_photo ed_pro_button enlarge" title="Open full image in new tab"></div>' +
			'<div>';

		$body.find('#kistmetBigCard-photoWrapp').append(html);

		$body.on('click', '.btn_enlarge_photo', function() {
			var url = $("#photoMG, #bigImage").css("backgroundImage").replace("/0/3", "/0/0");

			window.open(url.replace("/0/3", "/0/0").substr(4, url.length - 5));
		});
	}
};

features.initialize();





/*$(document).on('click', '.btn_gods_spells', function() {
	var title = document.title;
	var url = window.location.href;

	chrome.extension.sendMessage({
		action : 'add',
		data: {
			title: title,
			url: url
		}
	});
});*/

//