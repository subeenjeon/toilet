$(document).ready(function(){
	$("#logo").fadeIn(3000, function(){
		showInformation_A();
	});

	$("#information_A").click(function(){
		showInformation_B();
	});
	$("#information_B").click(function(){
		showInformation_C();
	});

	$("#information_C").click(function(){
		backToInformation_A();
	});
});

var showInformation_A = function() {
	$("#logo").fadeOut();
	$("#information_A").fadeIn();
};

var backToInformation_A = function() {
	$("#information_C").fadeOut();
	$("#information_A").fadeIn();
};