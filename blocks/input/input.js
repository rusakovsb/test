$(function() {

    $(".input__control").on("blur input focus", function() {
        var inputLabel = $(this).prev(".input__label");
        if (this.value) {
            inputLabel.addClass("input__label_small");
        } else {
            inputLabel.removeClass("input__label_small");
        }
    });
    
    $(".input__control").on("focus", function() {
        var inputLabel = $(this).prev(".input__label");
        if (this) {
            inputLabel.addClass("input__label_small");
        } else {
            inputLabel.removeClass("input__label_small");
        }
    });
    
});
