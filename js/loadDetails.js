function backgroundOverlay() {
	var rect = document.getElementsByClassName("center")[0].getBoundingClientRect();
	var overlay = $('.center #bg_overlay');
	overlay.css({position: "absolute", left: rect.left+"px", top: rect.top+"px", height: rect.height+"px"});
	overlay.fadeIn("fast", function() {fadeInTextBody();});
}

function fadeInTextBody() {
	var rect = document.getElementsByClassName("center")[0].getBoundingClientRect();
	var textBody = $('.center .text_body');
	console.log(rect.width);
	textBody.css({position: "absolute", left: rect.left+80, width: 0.82*rect.width, top: rect.top+60+"px", color: "white"});
	textBody.fadeIn("slow");
}

function setupPage() {
	setTimeout(function() {
		$('.center img').animate({opacity: "0.5"}, 500, function() {backgroundOverlay();});
	}, 800);
}

$(document).ready(function() {
	setupPage()
});

$(window).on('resize', function() {
	var rect = document.getElementsByClassName("center")[0].getBoundingClientRect();
	var overlay = $('.center #bg_overlay');
	var textBody = $('.center .text_body');
	overlay.css({position: "absolute", left: rect.left+"px", top: rect.top+"px", height: rect.height+"px"});
	textBody.css({position: "absolute", left: rect.left+80, width: 0.82*rect.width, top: rect.top+60+"px"});
});
