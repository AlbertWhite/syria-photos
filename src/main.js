$(document).ready(() => {

	//set one carousel width
	var window_width = $(window).width();
	$('.carousel-container').width(window_width*2);
	$('.one-carousel-container').width(window_width);

	//detect mousemove
  $(".img-div").mousemove((e) => {
    var ratio = e.pageX - parseInt($(".img-container").css("margin-left"));
    $('.img-1').css('width',`${ratio}px`);
    $('.img-2').css('width',`${976 - ratio}px`);
  });

  //carousel effect
  $('.before-btn').click(()=>{
  	$('.carousel-container').css('transform','translateX(0px)');
  });

  $('.after-btn').click(()=>{
  	$('.carousel-container').css('transform',`translateX(-${window_width}px)`);
  });

});
