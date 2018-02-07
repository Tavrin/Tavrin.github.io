

$.when( $.ready ).then(function() {
  // Run code


  
   
     $('body').scrollspy({ target: '#navbar-example2' });
     
     $("#button-landing").click( function(){
         $('html, body').animate({
             scrollTop: $("#about").offset().top}, 2000);
     });

     $("#about-link").click( function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top}, 2000);
    });

    $("#work-link").click( function(){
        $('html, body').animate({
            scrollTop: $("#work").offset().top}, 2000);
    });
    
    // theatherMode()
    changeNavbar();
      $(".navbar-toggler").on("click", function(){
         $( ".navbar-toggler-icon" ).toggle();
         $( "#x-button" ).toggle();
      })
     
      $('.zoom').zoom({ on: 'click' });

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    if($("#first-image").hasClass("active")){
        $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#1BA2C8"})
        $("#work-title").empty(); 
        $("#work-title").append("My Work");
          $("#work-content").empty();
          $("#work-content").append("On the left are several projects that I have worked on already.<br><br>But Web development doesnt stop at the code and the languages or frameworks used.<br><br>The design and aesthetic is equally as important, and this is what I will try to also showcase in those examples.");
      }

      if($("#second-image").hasClass("active")){
          $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#D3493F"})
        $("#work-title").empty(); 
        $("#work-title").append("Quizzymaths");
        $("#work-content").empty();
        $("#work-content").append("This was a cognitive psychology project where the goal was to make maths exercises for kids in primary school. <br><br>But my personal goal aside of that was to make a colored website that was pleasing to look at and would excite the imagination.<br> The website components were created in Illustrator. <br><br>As for the website, at first it was static and only used Bootstrap as a framework and some Javascript, but then I made a signup and login system using PHP and a MYSQL database");
    }
    if($("#third-image").hasClass("active")){
        $("#work-content").empty();
        $("#work-content").append("Test 3");
    }
    if($("#fourth-image").hasClass("active")){
        $("#work-content").empty();
        $("#work-content").append("Test 4");
    }

    
      })

      sr.reveal('.about-right');
      sr.reveal('.about-left');
      sr.reveal('#heading-first');
      sr.reveal('.work-right');
      sr.reveal('.work-left');

      function changeNavbar(){
        var scroll_start = 0;
        var startchange = $('#home');
        let startchange2 = $('#my-work');
        var offset = startchange.offset();
        let offset2 = startchange2.offset();
        $(document).scroll(function() { 
           scroll_start = $(this).scrollTop();
           if(scroll_start > offset.top && scroll_start < offset2.top) {
               $('.navbar-brand').css("color", "#0F1018");
               $('#navbar-example2').css({'background-color': '#FFFFFF'});
               $('.nav-link').removeClass('nav-links-1').addClass('nav-links-2');
            } 
            else if(scroll_start > offset2.top){
                $('.navbar-brand').css("color", "#FFFFFF");
               $('#navbar-example2').css({'background-color': '#0F1018'});
               $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
               $('#my-work').css("background", "#0F1018");
            }
            
            else {
               $('.navbar-brand').css("color", "#FFFFFF");
               $('#navbar-example2').css({'background-color': '#0F1018'});
               $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
            }
        });
       }

    //    function theatherMode(){
    //     let scroll_start2 = 0;
    //     let startchange2 = $('#my-work');
    //     let offset2 = startchange2.offset();
    //     $(document).scroll(function() { 
    //        scroll_start2 = $(this).scrollTop();
    //        if(scroll_start2 > offset2.top) {
    //            $('.navbar-brand').css("color", "#FFFFFF");
    //            $('#navbar-example2').css({'background-color': '#0F1018'});
    //            $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
    //            $('#my-work').css("background", "#0F1018");
    //         } else {
    //             $('.navbar-brand').css("color", "#0F1018");
    //             $('#navbar-example2').css({'background-color': '#FFFFFF'});
    //             $('.nav-link').removeClass('nav-links-1').addClass('nav-links-2');
    //         }
    //     });
    //    }
});