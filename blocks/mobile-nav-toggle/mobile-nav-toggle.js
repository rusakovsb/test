$(function() {

    $(".mobile-nav-toggle").click(function() { 
        var hideNav = function () {
            $(".main-menu").removeClass("main-menu_visible");
            $(".overlay").fadeOut(100) 
        };
        if(!$(this).hasClass("mobile-nav-toggle_active")) {  
            $(this).addClass("mobile-nav-toggle_active");
            $(".main-menu").addClass("main-menu_visible");
            $(".overlay").fadeIn(200);
            gsap.to(".header", {
                ease: "power3.out",  
                duration: 0.75,      
                bottom: "0",
                background: "rgba(16, 16, 29, 1)"
            });    
        }
        else {      
            $(this).removeClass("mobile-nav-toggle_active");                      
            gsap.to(".header", {
                ease: "power3.in",  
                duration: 0.5,
                bottom: "auto",
                background: "rgba(16, 16, 29, 0.9)",
                onComplete: hideNav
            })               
        }
    });	

});