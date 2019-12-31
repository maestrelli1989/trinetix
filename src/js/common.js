/*
	Javascript code for the Trinetix test task
	Version: 1.0
	Created: 29.12.2019
	Author: Serhii Tiutin
	Modified by: Serhii Tiutin
	Owner: Serge Tiutin
	Website: https://example.com
*/

"use strict"

$(() => {

	/*
		List of the global constants
	*/
	
	const primaryTags = $("html, body");

	const allTrigger = $("#all-trigger");
	const allBlock = $("#all-block");
	const mobileAppsTrigger = $("#mobile-apps-trigger");
	const mobileAppsBlock = $("#mobile-apps-block");
	const webServicesTrigger = $("#web-services-trigger");
	const webServicesBlock = $("#web-services-block");
	const augmentedRealityTrigger = $("#augmented-reality-trigger");
	const augmentedRealityBlock = $("#augmented-reality-block");
	const designTrigger = $("#design-trigger");
	const designBlock = $("#design-block");
	const developmentTrigger = $("#development-trigger");
	const developmentBlock = $("#development-block");

	const hamburger = $(".burger");
	const mobileMenu = $(".mobile-menu");
	const hideMobileMenu = $(".hide-menu");
	const mobileMenuActive = $(".mobile-menu--active");
	const gap = $(window).outerHeight();

	const scrollToTop = $("#scrollTopBtn");

	const menuTrigger = $(".menu .menu__trigger");
	const menuTriggerActive = $(".menu__trigger--active");

	/*
		Switch class 'menu__trigger--active' in submenu
	*/

	$(menuTrigger).click(function() {
		$(menuTrigger).removeClass(menuTriggerActive);
		$(this).addClass(menuTriggerActive);
	});

	/*
		'Scroll-to block' animated effect
	*/

	$(allTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(allBlock).offset().top
		}, 700);
	});
	
	$(mobileAppsTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(mobileAppsBlock).offset().top
		}, 700);
	});

	$(webServicesTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(webServicesBlock).offset().top
		}, 700);
	});

	$(augmentedRealityTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(augmentedRealityBlock).offset().top
		}, 700);
	});

	$(designTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(designBlock).offset().top
		}, 700);
	});

	$(developmentTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(developmentBlock).offset().top
		}, 700);
	});

	/*
		'Scroll to top' animated effect
	*/

	function scrollFunction() {
		
		if ($(window).scrollTop() > gap) {
			$(scrollToTop).fadeIn(500);
		} else {
			$(scrollToTop).fadeOut(500);
		}
		
	}

	$(window).scroll(() => {
		scrollFunction();
	});
	
	$(scrollToTop).click(() => {
		$(primaryTags).animate(
			{ scrollTop: 0 },
			'slow'
		);
	});

	/*
		Display mobile menu
	*/

	$(hamburger).click(() => {
		$(mobileMenu).addClass(mobileMenuActive);
		$("body").css('overflow', 'hidden');
	});

	/*
		Hide mobile menu
	*/

	$(hideMobileMenu).click(() => {
		$(mobileMenu).removeClass(mobileMenuActive);
		$("body").css("overflow", "initial");
	});

});