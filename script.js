$(document).ready(function(){
	$("#logo").fadeIn(3000, function(){
		showInformation_A();
	});

/*	$("#information_A").click(function(){
		showInformation_B();
	});
	$("#information_B").click(function(){
		showInformation_C();
	});
	$("#information_C").click(function(){
		showQ_01();
	});
	$("#Q_01").click(function(){
		showQ_select01();
	});
	$("#Q_select01").click(function(){
		backToInformation_A();
	});*/
});

var showInformation_A = function() {
	$("#logo").fadeOut();
	$("#information_A").fadeIn();
};

var showInformation_B = function() {
	$("#information_A").fadeOut();
	$("#information_B").fadeIn();
};

var showInformation_C = function() {
	$("#information_B").fadeOut();
	$("#information_C").fadeIn();
};

var showQ_01 = function() {
	$("#information_C").fadeOut();
	$("#Q_01").fadeIn();
};

var showQ_select01 = function() {
	$("#Q_01").fadeOut();
	$("#Q_select01").fadeIn();
};

var backToInformation_A = function() {
	$("#Q_select01").fadeOut();
	$("#information_A").fadeIn();
};