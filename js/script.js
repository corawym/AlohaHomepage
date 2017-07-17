// jQuery 
$(document).ready(function(){
  
  // shop carousel style
  $('.carousel').flickity({
    prevNextButtons: false,
    initialIndex: 0,
    wraparound: false,
    autoPlay: true,
    cellAlign: "left",
    contain: true
  });

  // header style - smooth scrolling
  var offset = $(".header-fixed").height();

  $(window).resize(function() {
    offset = $(".header-fixed").height();
  });

  $(".main-nav a[href*=\\#]").on("click", function(event){  
    event.preventDefault();
    $("html,body").animate({scrollTop:$(this.hash).offset().top-offset}, 500);
  });
  
  


});

