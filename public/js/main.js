

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

    $("#skills-link").click( function(){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top -100}, 2000);
    });
    $("#educ-link").click( function(){
        $('html, body').animate({
            scrollTop: $("#education").offset().top -100}, 2000);
    });
    $("#contact-link").click( function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top}, 2000);
    });
    
    // theatherMode()
    changeNavbar();


      $(".navbar-toggler").on("click", function(){
         $( ".navbar-toggler-icon" ).toggle();
         $( "#x-button" ).toggle();
      })
     
    //   $('.zoom').zoom({ on: 'click' });

    $(".carousel").keydown(function(e){
        console.log(e.which)
        let currentSlide = $(".carousel-indicators .active").data('slide-to');
        if(e.which == 37){
            if (currentSlide == 0){
                slide5();
            }
            else if(currentSlide == 1){
                
                slide0();
            }
            else if(currentSlide == 2){
                
                slide1()
            }
            else if(currentSlide == 3){
                
                slide2()
            }
            else if(currentSlide == 4){
                
                slide3();
            }
            else if(currentSlide == 5){
                slide4()
            }
        }

        if(e.which == 39){
            if (currentSlide == 0){
                slide1()
                
            }
            else if(currentSlide == 1){
                slide2()
               ;
            }
            else if(currentSlide == 2){
                slide3()
                
            }
            else if(currentSlide == 3){
                slide4();
               
            }
            else if(currentSlide == 4){
                slide5()
            }
            else if(currentSlide == 5){
                slide0()
            }
        }

    })

    $(".carousel-control-prev").on("click", function(event){
        console.log(event.target.className);
        let currentSlide = $(".carousel-indicators .active").data('slide-to');
        if (currentSlide == 0){
            slide6();
        }
        else if(currentSlide == 1){
            slide0();
        }
        else if(currentSlide == 2){
            slide1();
        }
        else if(currentSlide == 3){
            slide2()
        }
        else if(currentSlide == 4){
            slide3()
        }
        else if(currentSlide == 5){
            slide4()
        }
        else if(currentSlide == 6){
            slide5()
        }
    })


    $(".carousel-control-next").on("click", function(event){
        console.log(event.target.className)
        let currentSlide = $(".carousel-indicators .active").data('slide-to');
        if (currentSlide == 0){
            console.log(currentSlide + " >")
            slide1();
        }
        else if(currentSlide == 1){
            slide2();
        }
        else if(currentSlide == 2){
            slide3();
        }
        else if(currentSlide == 3){
            slide4()
        }
        else if(currentSlide == 4){
            slide5()
        }
        else if(currentSlide == 5){
            slide6()
        }
        else if(currentSlide == 6){
            slide0()
        }
    })


function prevSlide(i){
    slide(i,false)
}






      sr.reveal('.about-right');
      sr.reveal('.about-left');
      sr.reveal('#heading-first');
      sr.reveal('.work-right');
      sr.reveal('.work-left');

      

    //   
});


function changeNavbar(){
    var scroll_start = 0;
    var startchange = $('#home');
    let startchange2 = $('#my-work');
    let startchange3 = $('#my-cv');
    var offset = startchange.offset();
    let offset2 = startchange2.offset();
    let offset3 = startchange3.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top && scroll_start < offset2.top) {
           $('.navbar-brand').css("color", "#0F1018");
           $('#navbar-example2').css({'background-color': '#FFFFFF'});
           $('.nav-link').removeClass('nav-links-1').addClass('nav-links-2');
           $('#my-work').css("background", "#FFFFFF");
        } 
        else if(scroll_start > offset2.top && scroll_start < (offset3.top - 500)){
            $('.navbar-brand').css("color", "#FFFFFF");
           $('#navbar-example2').css({'background-color': '#0F1018'});
           $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
           $('#my-work').css("background", "#0F1018");
           console.log(scroll_start)
           console.log(offset3.top - 300)
        }

        else if(scroll_start > (offset3.top - 500)){
            $('.navbar-brand').css("color", "#0F1018");
            $('#navbar-example2').css({'background-color': '#FFFFFF'});
            $('.nav-link').removeClass('nav-links-1').addClass('nav-links-2');
            $('#my-work').css("background", "#FFFFFF");
        }
        
        else {
           $('.navbar-brand').css("color", "#FFFFFF");
           $('#navbar-example2').css({'background-color': '#0F1018'});
           $('.nav-link').removeClass('nav-links-2').addClass('nav-links-1');
        }
    });
   }




function slide0(){
    $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#2A9E43"})
    $("#work-title").empty(); 
    $("#work-title").append("My Work");
    $("#work-content").empty();
    $("#work-content").append("On the left are several projects that I have worked on already.<br><br>But Web development doesnt stop at the code and the languages or frameworks used.<br><br>The design and aesthetic is equally as important, and this is what I will try to also showcase in those examples.");
  }


  function slide1(){
    $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#da3027"}) 
    $("#work-title").empty(); 
    $("#work-title").append("Quizzymaths");
    $("#work-content").empty();
    $("#work-content").append("This was a cognitive psychology project where the goal was to make maths exercises for kids in primary school. <br><br>But my personal goal aside of that was to make a colored website that was pleasing to look at and would excite the imagination.<br> The website components were created in Illustrator. <br><br>As for the website, at first it was static and only used Bootstrap as a framework and some Javascript, but then I made a signup and login system using PHP and a MYSQL database");
  }

  function slide2(){
    $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#1BA2C8"})
    $("#work-title").empty(); 
    $("#work-title").append("Moodle, UX Design");
    $("#work-content").empty();
    $("#work-content").append("During my 3rd year in Psychology I did an internship with the online courses department of a french university. <br><br> They use a LMS (Learning Management System) called Moodle and they had to update it<br><br> I worked on ameliorating the user experience and ergonomy, but also the visual aspect and overall feeling.");
  }

  function slide3(){
    $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#080808"})
    $("#work-title").empty(); 
    $("#work-title").append("Restaurant Website");
    $("#work-content").empty();
    $("#work-content").append("I worked alongside someone that had to do a website for a French Italian restaurant that is themed about the series The Sopranos.<br><br> While our vision of how the website should look and feel differed, I helped on alot of aspects that the other person didnt know well (Logo creation, overall ergonomy, Typography etc.)<br><br>But I also did my own version of the website as showcase material.");
  }

  function slide4(){
    $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#222233"})
    $("#work-title").empty(); 
    $("#work-title").append("DotaTracker");
    $("#work-content").empty();
    $("#work-content").append("A web app that tracks the current top live games, and can also look for players data to show a player profile.");
  }

  function slide5(){
    $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#675E7C"})
    $("#work-title").empty(); 
    $("#work-title").append("Joe Allen Paris");
    $("#work-content").empty();
    $("#work-content").append("A restaurant in Paris");
  }
  function slide6(){
    $(".work-right").css({"transition-duration:" : " 0.3s", "background" : "#404050"})
    $("#work-title").empty(); 
    $("#work-title").append("Christine and Cie");
    $("#work-content").empty();
    $("#work-content").append("A company that focuses on coaching");
  }