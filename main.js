$(function(){
    $('.photoslide img:gt(0)').hide();
    setInterval(function(){
      $('.photoslide :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.photoslide');}, 9000);
});

$(function () {
    var flyouts = $('.dropmenu');
   $('.headerlinks').mouseenter(function (event) {
     
     var flyout = $(this).data('flyout');
     
     //var target = $(this).attr('href');
     
     $(flyouts).hide();
     
     $(flyout).fadeTo('fast', 1);
   });
  
  $('.dropmenu').mouseleave(function (event) {
    $(this).fadeTo('fast', 0);
  });
//});

//$(function() {
//$(".headerlinks").mouseenter(function() {
//	  $(".dropmenu").fadeTo("slow", 1.0);
//	  
//});
//	  
//$(".dropmenu").mouseleave(function() {
//	  $(".dropmenu").fadeTo("slow", 0);
//	  
//});
});  // JavaScript Document