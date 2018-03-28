function loadHomePage(introId, soundSrc, interval) {
	var introText = "Do you know anything about Chinese tea?\n"
    + "If your answer is no,\n"
    + "Here are answers for you.";

	// var introText = "some \n text"
	typeWriter(introId, introText, soundSrc, interval);
	setTimeout(function() {
        window.location.href = "home_toc.html";
    }, introText.length * interval + 1500);
}