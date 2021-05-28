$(function(){
  $('.description__logo').on("click", function() {
    $(this).toggleClass('isActive').next().slideToggle();
    $(".border1",this).toggleClass('open1');
    $(".border2",this).toggleClass('open2').toggleClass('close');
  });

  $('#programmer').on("click", function() {
    $(this).children("p").toggleClass('active').toggleClass('non-active');
  });
  
  
  


});