function enterOnClick(elt) {
	console.log(elt.id);
	$("#"+elt.id).fadeOut("fast", "swing", function() {
		beginIntro(elt);
	});
}

function beginIntro(elt) {
	elt.onclick = function() {}
	var data = "Chinese tea is a beverage made from the " +
		"leaves of tea plants (Camellia sinensis) and " +
		"boiled water. Tea leaves are processed using " +
		"traditional Chinese methods. Chinese tea " +
		"is consumed throughout the day, including " +
		"during meals, as a substitute for plain water, " + 
		"for health, or for simple pleasure.";
	var format = "<div style=\"font-size: 18px; margin-top: 10%; max-height: 220px; overflow: hidden;\">" + data;
	elt.innerHTML = format;
	$("#"+elt.id).fadeIn();
}

function iconClickFadeOutCB(sel, uid, url) {
	var nameMap = new Map();
	nameMap.set("jjm", "Jin Jun Mei Black Tea");
	nameMap.set("lj", "Long Jing Green Tea");
	nameMap.set("tgy", "Tie Guan Yin Ooloong");
	nameMap.set("ajbc", "Anji Bai Cha");
	nameMap.set("blc", "Bi Luo Chun");
	nameMap.set("pe", "Pu Erh Tea");

	var foo = document.getElementById("entrance_text");
	foo.innerHTML = "<br><br>"+nameMap.get(uid);
	$("#"+foo.id).fadeIn("fast", function() {
		setTimeout(function() {
			window.parent.location.href=url;
		}, 1500);
	});



	// var rect = document.getElementById(sel.attr("id")).getBoundingClientRect();
	// sel.css({position: "fixed", left: rect.left+"px", top: rect.top+"px", width: rect.width});
	// sel.animate({width: "120px", left: "260px", top: "260px"}, 1000, function() {
	// 	sel.fadeOut("slow", function() {
	// 		window.parent.location.href=url;
	// 	});
	// });
}

function setupPage() {
	var entranceText = document.getElementById("entrance_text");
	entranceText.onclick = function() {
		enterOnClick(entranceText);
	}

	var icons = ["jjm", "lj", "tgy", "ajbc", "blc", "pe"];
	for (i = 0; i < icons.length; i++) {
		var iconElt = document.getElementById(icons[i]+"_icon");
		let id = iconElt.id;
		let idx = i;
		$("#"+id).click(function() {
			console.log(idx);
			for (let j = 0; j < icons.length; j++) {
				if (j != idx) {
					$("#"+icons[j]+"_icon").fadeOut("fast");
				}
			}
			$(".dot").fadeOut("fast");
			$("#"+entranceText.id).fadeOut("fast", function() {
				iconClickFadeOutCB($("#"+id), icons[idx], icons[idx]+".html");
			});
		})
	}
}

$(document).ready(function() {
	setupPage()
});


