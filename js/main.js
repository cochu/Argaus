var bgfixed = $('#bg-fixed');
var menu = $('#menu');
var menuButtons = $('#menu ul.nav li');
var menuCollapsible = $('.navbar-collapse');
var content = $('#content');
var ghost = $('#bg-ghost-area');
var logo = $('#bg-logo-container img');

var map = L.mapbox.map('map', 'cochu.i2eip66e', {
    scrollWheelZoom: false,
    shareControl: true
})
    .setView([48.849, 2.375], 16)
    .addControl(L.mapbox.geocoderControl('cochu.i2eip66e'));


$(document).load(function() {
});
$(document).ready(function() {
    $(window).scroll(function() {
         if ($(window).scrollTop() > $(window).height() - 50) {
            menu.addClass('top');
            if(menuButtons.parent().find(".active").size() === 0)
                menuButtons.first().addClass('active');
         }
         else {
            menu.removeClass('top');
            menuButtons.removeClass('active');
         }
    });
    menuCollapsible.on('show.bs.collapse', function () {
        if ($(window).scrollTop() < $(window).height() - 50) {
            $('html, body').animate({
                scrollTop: $("#presentation").offset().top - 50
            }, 800);
        }
    });
    menu.find('a').click(function(){
        if(menuCollapsible.hasClass('in'))
            menuCollapsible.collapse('hide');
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 45
        }, 800);
        return false;
    });
    $('#grid').grid();
	map.markerLayer.on('ready', function(e) {
	    map.markerLayer.eachLayer(function(marker) {
	        // you can replace this test for anything else, to choose the right
	        // marker on which to open a popup. by default, popups are exclusive
	        // so opening a new one will close all of the others.
	        if (marker.feature.properties.title === 'La Cordée - Paris Gare de Lyon') {
	            marker.openPopup();
	        }
	    });
	});
});