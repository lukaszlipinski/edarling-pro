var $body = $('body');

var features = {
	initialize : function() {
		this.cleanUpNotNecessaryStuff();

		this.initializePartnerForYouEnlarger();
		this.initializeProfileEnlarger();
	},

	cleanUpNotNecessaryStuff : function() {
		$body.find('#fn_viewQuestions').remove();
		$body.find('#callKismetlHelp').remove();
		$body.find('#kismet-unsend .grey').remove();
	},

	initializePartnerForYouEnlarger : function() {
		var $button_container = $body.find('#kistmetBigCard-photoWrapp'),
			$photo = $("#photoMG");

		this.zooming1($button_container, $photo);
	},

	zooming1 : function($button_container, $photo) {
		var html =
			'<div class="ed_pro_tools ed_pro_tools1">' +
				'<div class="btn_enlarge_photo ed_pro_button enlarge" title="Open full image in new tab"></div>' +
			'<div>';

		$button_container.append(html);

		$body.on('click', '.btn_enlarge_photo', function() {
			var url = $photo.css("backgroundImage");

			window.open(url.replace("/0/3", "/0/0").substr(4, url.length - 5));
		});
	},

	initializeProfileEnlarger : function() {
		var $hook = $body.find("#galleryPopup");

		if ($hook.length === 0) {
			return;
		}

		this.zooming2($hook);
	},

	zooming2 : function($button_container) {
		var html =
			'<div class="ed_pro_tools ed_pro_tools2">' +
				'<div class="btn_enlarge_photo2 ed_pro_button enlarge" title="Open full image in new tab"></div>' +
			'<div>';

		$button_container.append(html);

		$body.on('click', '.btn_enlarge_photo2', function() {
			var url = $('.photo.active .img').css("backgroundImage");

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