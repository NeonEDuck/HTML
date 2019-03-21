var isOpen = false;

$(function(){
	$('.thumbnail').mouseenter(function(){
		$(this).stop();
		$(this).animate({top:-20},{duration:500, easing:'easeOutElastic'});
	});
	$('.thumbnail').mouseleave(function(){
		$(this).stop();
		$(this).animate({top:0},{duration:100});
	});
	$('.logo').mousedown(function(){
		if (isOpen == false) {
			$(this).parent().stop();
			$(this).parent().animate({top:-80},{duration:100});
			isOpen = true;
		}
		else {
			$(this).parent().stop();
			$(this).parent().animate({top:0},{duration:100});
			isOpen = false;
		}
	});
});