$(document).ready(function(){
	$("#logo").fadeIn(3000, function(){
		showMenu();
	});
	$("#menu").hide();
	$("#player").hide();

	$("#playButton").click(function(){
		showPlayer();
	});

	$("#player").click(function(){
		backToMenu();
	});
});

$(document).ready(function(){
	$("ul.song li").click(function(){
	$("ul.song li").removeClass("selected");
	$(this).addClass("selected");
	});
});

$(document).ready(function(){
	$("ul.seat li").click(function(){
	$("ul.seat li").removeClass("selected");
	$(this).addClass("selected");
	});
});

var showMenu = function() {
	$("#logo").fadeOut();
	$("#menu").fadeIn();
};

var backToMenu = function() {
	$("#player").fadeOut();
	$("#menu").fadeIn();
};

var showPlayer = function() {
	$("#menu").fadeOut();
	$("#player").fadeIn();
}

var setVideo = function() {
	var song = $("ul.song .selected").attr("id");
	var seat = $("ul.seat .selected").attr("id");
	var vidName = "video/" + song + "-" + seat + ".mp4";
	$("source").attr("src", vidName);
	$("video").load();
}