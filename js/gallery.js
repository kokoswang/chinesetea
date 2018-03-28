function setup() {
	idxIcons = document.getElementsByClassName("idx_icon");
	for (i = 0; i < idxIcons.length; i++) {
		// let idx = idxIcons[i].innerHTML;
		let idx = i+1;
		console.log(idx);
		$(".idx_icon:eq("+(idx-1)+")").attr('id', 'idx_'+idx);
		$("#idx_"+idx).mouseover(function() {
			console.log(idx);
			$("#idx_"+idx).animate({fontSize: "75px"}, 100);
		});
		$("#idx_"+idx).mouseout(function() {
			console.log(-1*idx);
			$("#idx_"+idx).animate({fontSize: "35px"}, 100);
		});
		$("#idx_"+idx).click(function() {
			document.getElementById("g_img").src = "img/bg_"+idx+".jpg";
		})
	}
}

$(document).ready(function() {
	setup();
});


// $(".idx_icon").mouseover(function() {
// 	$(".idx_icon:lt(1)").animate({fontSize: "80px"}, 100);
// 	// $(".idx_icon").css({fontSize: "80px"});
// });
// $(".idx_icon").mouseout(function() {
// 	$(".idx_icon:lt(1)").animate({fontSize: "35px"}, 100);
// })