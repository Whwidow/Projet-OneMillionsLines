// CODE POUR LA FLECHE QUI REMONTE EN HAUT DE PAGE

ScrollToTop=function() {
  var s = $(window).scrollTop();
  if (s > 250) {
    $('.scrollup').fadeIn();
  } 
  else {
    $('.scrollup').fadeOut();
  }
 
  $('.scrollup').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
      return false;
  });
}
 
StopAnimation=function() {
  $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
    $('html, body').stop();
  });
}
 
 // Permet de créer l'animation pour remonter en haut de page 
$(window).scroll(function() {
  ScrollToTop();
  StopAnimation();

});

// CODE POUR LE MENU CI DESSOUS 

  $( document ).ready(function() {

          $( ".cross" ).hide();
          $( ".menu" ).hide();
          $( ".hamburger" ).click(function() {
                $( ".menu" ).slideToggle( "fast", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
        });
    });

  $( ".cross" ).click(function() {
          $( ".menu" ).slideToggle( "fast", function() {
          $( ".cross" ).hide();
          $( ".hamburger" ).show();
          });
      });

});

