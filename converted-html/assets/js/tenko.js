$(document).ready(function(){
	$('.project-preview').hover(function() {
	var toTogg = $('.project-preview-caption p',this);
	toTogg.slideToggle("300");

	},
	function(){
		var toTogg = $('.project-preview-caption p',this);
		toTogg.slideToggle("100");
	});
});