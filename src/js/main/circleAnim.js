const animStartBtn      = $(".intro--animBtn");
const blueCircleGroup   = $(".intro--circle--container");
const blueCircles       = $(".circle-cont");


animStartBtn.click(function(){
    if(blueCircles.hasClass("active")){
        blueCircles.removeClass("active");
    }else{
        blueCircles.addClass("active");
    }
});