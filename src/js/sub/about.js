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