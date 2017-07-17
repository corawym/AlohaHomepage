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
    $("html,body,article").animate({scrollTop:$(this.hash).offset().top-offset}, 500);
  });
  
  // updates style
  $("#btn-sub").on("click", function(event) {
    if (ValidateEmail($("#email-input").val())) {
      event.preventDefault();
      alert( "Thanks for subscribing!" );
      $("#email-input").val("");
    } 
  });

});

function ValidateEmail(mail){
  if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(mail)){
    return (true);
  }else{
    return (false);
  }
}
