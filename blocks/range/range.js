$(function() {

    $('.range__slider').slider({
        range: 'min',
        min: 0,
        max: 100,
        value: 75,
        slide: function(event, ui){
           $('.range__control').val(ui.value+"%");
       }
   });
   
});