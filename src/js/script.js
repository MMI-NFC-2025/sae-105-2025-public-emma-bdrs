// src/js/script.js — common behaviors: booking link + mobile menu
document.addEventListener('DOMContentLoaded', function () {
	// Set booking links depending on current location
	(function setBookingLinks(){
		var isInMobile = location.pathname.indexOf('/mobile/') !== -1;
		document.querySelectorAll('[data-booking]').forEach(function(a){
			a.setAttribute('href', isInMobile ? 'programme.html' : 'mobile/programme.html');
		});
	})();

	// Simple mobile menu toggle for pages that include .mobile-menu
	document.querySelectorAll('.hamburger').forEach(function(btn){
		btn.addEventListener('click', function(){
			var menu = document.querySelector('.mobile-menu');
			if(!menu) return;
			if(menu.style.display === 'block') menu.style.display = '';
			else menu.style.display = 'block';
		});
	});

	document.querySelectorAll('.menu-close').forEach(function(btn){
		btn.addEventListener('click', function(){
			var menu = btn.closest('.mobile-menu');
			if(menu) menu.style.display = 'none';
		});
	});
});
