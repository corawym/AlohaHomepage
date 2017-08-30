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

  // header - smooth scrolling
  var offset = $(".header-fixed").height();
  $(window).resize(function() {
    offset = $(".header-fixed").height();
  });
  $("#skip-to-content, .main-nav a[href*=\\#]").on("click", function(event){  
    event.preventDefault();
    $("html,body,article").animate({scrollTop:$(this.hash).offset().top-offset}, 500);
  });
  
  // updates - email validation
  $("#btn-sub").click(function() {
    var emailInput = $("#email-input").val();
    if (ValidateEmail(emailInput)) {
      alert( "Thanks for subscribing!" );
      $("#email-input").val("");
      e.preventDefault();
    }else{
      alert( "Please enter a valid email." );
      e.preventDefault();
    } 
  });

  // shop - update number in cart
  var totalItem = 1
  $(".btn-addtocart").on("click", function(){
    $(".cart-total-item").text(totalItem);
    $(".cart-total-item").css({"display":"inline-block"});
    return totalItem ++;
  });

});

// updates - email validation
function ValidateEmail(email){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return (true);
  }else{
    return (false);
  }
}; 
