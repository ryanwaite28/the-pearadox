// New Script //

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {



});

//--------//

$(function(){
				$("#slides").slidesjs({
					width: 1200,
					height: 650,
					start: 1,
					navigation: {
						active: true,
						effect: "fade"
					},
					play: {
						active: true,
						effect: "fade",
						interval: 3000,
						auto: true,
						swap: true,
						pauseOnHover: false,
						restartDelay: 2500
					}
				});
});

//

$(document).ready(function(){

	var dropArrow = $('#drop-arrow');
	var topBar = $('#topbar');
	var leftTop = $('#left-top');
	var rightTop = $('#right-top');

	var hidden = true;

	dropArrow.click(function(){

		if( hidden == true ) {
			leftTop.show('fast');
			rightTop.show('fast');
			dropArrow.toggleClass('rotate');
			hidden = false;
		}
		else {
			leftTop.hide('fast');
			rightTop.hide('fast');
			dropArrow.toggleClass('rotate');
			hidden = true;
		}

	});

	$(window).resize(function() {

		var cWidth = $(window).width();

		if( cWidth > 1000 ) {
			leftTop.show('fast');
			rightTop.show('fast');
    }
		if( cWidth <= 1000 ) {
			leftTop.hide('fast');
			rightTop.hide('fast');
		}

	});

});
