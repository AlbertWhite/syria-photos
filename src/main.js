$(document).ready(function(){

  $(".img-div").mousemove(function(e){
    var ratio = e.pageX;
    $('.img-1').css('clip',"rect(0, ratio+'px',550px, 0px)");
    console.log($('.img-1').css('clip'));
    $('.img-2').css('clip',"rect(0, 976px, 550px, ratio+'px')");
  });


});
