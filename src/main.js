const PHOTOS = [
	{
		'name': 'Al-Shibani Church School - 12th century ',
		'first-time': '2009',
		'last-time': '2016'
	},
	{
		'name': 'Citadel of Aleppo - 13th century ',
		'first-time': '2010',
		'last-time': '2016'
	},
	{
		'name': 'Old City of Aleppo - 12th to the 16th century',
		'first-time': '2008',
		'last-time': '2016'
	},
	{
		'name': 'Great Mosque of Aleppo - 8th to 14th century',
		'first-time': '2009',
		'last-time': '2016'
	},
	{
		'name': 'Al-Madina Souq -  largest covered historic market in the world',
		'first-time': '2008',
		'last-time': '2016'
	},
	{
		'name': ' Old City of Aleppo - 12th to the 16th century',
		'first-time': '2008',
		'last-time': '2016'
	}
]

$(document).ready(() => {

	//set one carousel width
	var window_width = setWindowWidth();
	var currentCarousel = 1;
	var bgColor = 'rgb(0,0,0)';
	$('.body').css('background-color', bgColor);

	$('.title-container .description').text(PHOTOS[currentCarousel - 1].name);

	//detect mousemove
  $(".img-div").mousemove((e) => {
    var ratio = e.pageX - parseInt($(".img-container").css("margin-left"));
    
    bgColor = `rgb(${parseInt((976 - ratio)/10)},0,0)`
		$('body').css('background-color', bgColor);


    $('.img-1').css('width',`${ratio}px`);
    $('.img-2').css('width',`${976 - ratio}px`);
  	$('.bar').css('left', `${ratio}px`);
  });

  //carousel effect
  $('.before-btn').click(()=>{
  	currentCarousel = chanageCarousel(currentCarousel, 'left')
  });

  $('.after-btn').click(()=>{
  	currentCarousel = chanageCarousel(currentCarousel, 'right')
  });

  //reset the width of carousel
  $(window).resize(()=>{
  	window_width = setWindowWidth();
  });

  function setWindowWidth(){
  	var window_width = $(window).width();
  	$('.carousel-container').width(window_width*6);
		$('.one-carousel-container').width(window_width);
  	return window_width;
  }

  //control the translateX in carousel
  function chanageCarousel(currentCarousel, direction){

  	if(direction == 'left'){
  		if(currentCarousel == 1){
	  		currentCarousel = 6;
  			var translatexDistance = - window_width * (currentCarousel - 1);
  		}else{
	  		currentCarousel -= 1;
	  		var translatexDistance = - window_width * (currentCarousel - 1);
  		}
  	}else if(direction == 'right'){
  		if(currentCarousel == 6){
	  		currentCarousel = 1;
  			var translatexDistance =	0;
  		}else{
	  		var translatexDistance = - window_width * currentCarousel;
	  		currentCarousel += 1;
  		}
  	}

  	$('.carousel-container').css('transform',`translateX(${translatexDistance}px)`);
  	$('.img-1').css('width','50%');
  	$('.img-2').css('width','50%');
  	$('.bar').css('left', '50%');

  	var bgColor = 'rgb(0,0,0)';
		$('body').css('background-color', bgColor);

		$('.title-container .description').text(PHOTOS[currentCarousel - 1].name);

  	return currentCarousel;
  }

});
