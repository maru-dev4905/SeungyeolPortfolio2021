import { scroll } from "./subScroll"

const controller = new ScrollMagic.Controller();

const fadeInText = TweenMax.to('.fadeIn', 0.5, {
    opacity: 0
});

var scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 200,
    offset: 0
})
.setTween(fadeInText)
.addTo(controller)
// .addIndicators({
//   name: "1"
// });

scroll.on('scroll',function(obj){
    const wH            = window.innerHeight;
    const winScroll     = obj.scroll.y;

    if(winScroll >= wH / 2){
        $(".about--text--group ul.skill").addClass("show");
    }
})

const cardCont = $(".about--card--group");

cardCont.click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(this).addClass("active");
    }
});



// Age Calc
const MY_YEAR = 2001;

let now = new Date();
const currentYear = now.getFullYear();
const my_age = currentYear - MY_YEAR + 1;
const ageEl = $(".about .about--text--group .age");
ageEl.text(`(${my_age} years old)`);