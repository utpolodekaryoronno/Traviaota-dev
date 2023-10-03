$(document).ready(function(){
   // Nice Select JS 
   $(document).ready(function() {
      $('select').niceSelect();
    });
    
    // Mobile Menu Icon
   $(document).ready(function(){
      $('#nav-icon4').click(function(){
         $(this).toggleClass('open');
         $('.header-display').slideToggle();
      });
   });

   // Owl carousel
   $('.home_slider_title').owlCarousel({
      loop:true,
      nav:false,
      margin: 42,
      autoplay:true,
      dote:true,
      responsive:{
         0:{
            items:2,
            center:false,
         },
         575:{
            items:3
         },
         767:{
            items:4
         },
         990:{
            items:5
         },
         1100:{
            items:6
         }
      }
   });
});

