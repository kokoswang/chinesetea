function backgroundOverlay() {
	var rect = document.getElementsByClassName("center")[0].getBoundingClientRect();
	var overlay = $('.center #bg_overlay');
	overlay.css({position: "absolute", left: rect.left+"px", top: rect.top+"px", height: rect.height+"px"});
	overlay.fadeIn("fast", function() {fadeInTextBody();});
}

function fadeInTextBody() {
	$('.center img').animate({opacity: "0.8"}, 500);
	var rect = document.getElementsByClassName("center")[0].getBoundingClientRect();
	var textBody = $('.center .text_body');
	console.log(rect.width);
	textBody.css({position: "absolute", left: rect.left+80, top: rect.top+60+"px", color: "white"});
	textBody.fadeIn("slow");
}

function setupPage() {
	// setTimeout(function() {
	// 	$('.center img').animate({opacity: "0.8"}, 500, function() {fadeInTextBody();});
	// }, 800);
	let tlImg = document.getElementsByClassName("tl")[0].getElementsByTagName("img")[0];
	console.log(tlImg.id);
	if (tlImg.id == "chaIcon") {
		tlImg.style.maxWidth = "50%";
		tlImg.style.maxHeight = "50%";
	}
	else {
		let trImg = document.getElementsByClassName("tr")[0].getElementsByTagName("img")[0];
		trImg.style.maxWidth = "50%";
		trImg.style.maxHeight = "50%";	
	}

		document.getElementById("pot").onclick = function() {
		if (textOnDisplay) {
				return;
			}
			textOnDisplay = true;
			fadeInTextBody();
		}
		document.getElementById("pot").onmouseover = function() {
			$("#pot").css({"maxWidth": "100%", "maxHeight": "100%"})
		}
		document.getElementById("pot").onmouseout = function() {
			$("#pot").css({"maxWidth": "80%", "maxHeight": "80%"})
		}
}

function changeLanguage(current) {
	if (!textOnDisplay) {
		return;
	}
	if (current === "cn") {
		// $("#cn").fadeOut("fast", function() {$("#en").fadeIn("fast");});
		$("#cn").css("display", "none");
		$("#en").css("display", "block");
	}
	else if (current === "en") {
		$("#en").css("display", "none");
		$("#cn").css("display", "block");
	}
}

var textOnDisplay = false;

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
