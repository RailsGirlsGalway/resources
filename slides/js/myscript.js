$(document).ready(function() {
  $("a[href*=#]").bind("click",function(event){
    event.preventDefault();
    console.log('you');
    var target = $(this).attr("href");
    $("html, body").stop().animate({
      scrollTop: $(target).offset().top,
      scrollLeft: $(target).offset().left,
    }, 1500,function(){
      location.href = target;
    });
  });
  
  $('body').bind("keydown",function(event){
    if(event.keyCode == '40' || event.keyCode == '39') {
      var x = location.href;
      var currentSlideNumber = x.split('#slide')[1];
      var nextSlideNumber = 2;
      if(currentSlideNumber){
          var nextSlideNumber = parseInt(currentSlideNumber) + 1;
      }
      var target = '#slide'+ nextSlideNumber;
      $("html, body").stop().animate({
        scrollTop: $(target).offset().top,
        scrollLeft: $(target).offset().left,
      }, 800,function(){
      location.href = target;
      });
    } else if(event.keyCode == '38' || event.keyCode == '37') {
      var x = location.href;
      var currentSlideNumber = x.split('#slide')[1];
      var nextSlideNumber = parseInt(currentSlideNumber) - 1;
      var target = '#slide'+ nextSlideNumber;
      $("html, body").stop().animate({
        scrollTop: $(target).offset().top,
        scrollLeft: $(target).offset().left,
      }, 800,function(){
      location.href = target;
      });
    }
  });
});
