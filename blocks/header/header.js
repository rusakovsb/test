$(function() {
    $(window).scroll(function(){
        var header = $(".header")
        var logo = $(".logo"),
            scroll = $(window).scrollTop();      
        if (scroll >= 1) 
            header.addClass("header_small"),
            logo.addClass("logo_small"); 
        else header.removeClass("header_small"),
             logo.removeClass("logo_small");
    });	
});