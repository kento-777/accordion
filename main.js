$(function(){
  $('.description__logo').on("click", function() {
    $(this).next().slideToggle().toggleClass('isActive');
    $(".border1",this).toggleClass('open1')
    $(".border2",this).toggleClass('open2').toggleClass('close');
  });

  
});