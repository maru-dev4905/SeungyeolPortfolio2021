import LocomotiveScroll from 'locomotive-scroll';

const body = $("body");
const wrap = $("#page-wrap");
const cursor = $("#mouse_cursor");

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

let winWidth = $(window).innerWidth();
let winHeight = $(window).innerHeight();

$(window).resize(function(){
    winWidth = $(window).innerWidth();
    winHeight = $(window).innerHeight();
});

var scroll = new LocomotiveScroll    
({
    el: document.querySelector(`[data-scroll-container]`),
    smooth: true,
    getDirection: true,
    inertia: 0.65,
    smartphone: {
        smooth: false,
        // getDirection: !0,
        // inertia: 0.65,
    },
    tablet: {
        smooth: false,
        // getDirection: !0,
        // inertia: 0.65,
    }
});

window.addEventListener("load",()=>{
    if(winWidth >= 474){
        // pc
        scroll.stop();
    
        setTimeout(()=>{
            scroll.start();
        },6500)
    }else{
        // mo
        
        $("*").on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation(); 
            
            return false;
        })

        setTimeout(()=>{

            $('*').off('scroll touchmove mousewheel');
        
        },6500)
    }
})

/* ########## 100vh Solution ############# */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    scroll.update();
    scroll.start();
});

/* ########## END 100vh Solution ############# */

/* ########## Scroll Event ############# */

scroll.on('scroll',function(obj){
    const wH            = window.innerHeight;
    const winScroll     = obj.scroll.y;
    
    if($(window).innerWidth() >= 500){
        // header
        if(winScroll <= 50){
            $("header").removeClass("small");
        }else{
            $("header").addClass("small");
        }
        // header end

    }else{
        
    }
    // about
    if(winScroll >= wH / 2){
        $(".about ul").addClass("show");
    }
    // about end

    // works
    if(winScroll >= wH * 1.5){
        $(".works--title h3").eq(0).addClass("active");
    }
    if(winScroll >= wH * 1.75){
        $(".works--obj--group").addClass("blue");
        $(".works--title h3").eq(0).addClass("active");
        $(".works--item").eq(0).addClass("show");
        const logo = document.querySelectorAll("#works--title--text .works--title--path");

    }
    if(winScroll >= wH * 2.5){
        $(".works--obj--group").removeClass("black");
        $(".works--obj--group").addClass("blue");
        $(".works--title h3").removeClass("active");
        $(".works--title h3").eq(0).addClass("active");
    }
    if(winScroll >= wH * 2.75){
        $(".works--obj--group").removeClass("blue");
        $(".works--obj--group").addClass("black");
        $(".works--title h3").removeClass("active");
        $(".works--title h3").eq(1).addClass("active");
        $(".works--item").eq(1).addClass("show");
    }
    if(winScroll >= wH * 3.5){
        $(".works--obj--group").removeClass("brown");
        $(".works--obj--group").addClass("black");
        $(".works--title h3").removeClass("active");
        $(".works--title h3").eq(1).addClass("active");
    }
    if(winScroll >= wH * 3.75){
        $(".works--obj--group").removeClass("black");
        $(".works--obj--group").addClass("brown");
        $(".works--title h3").removeClass("active");
        $(".works--title h3").eq(2).addClass("active");
        $(".works--item").eq(2).addClass("show");
    }
    if(winScroll >= wH * 4.5){
        $(".works--obj--group").removeClass("green");
        $(".works--obj--group").addClass("brown");
        $(".works--title h3").removeClass("active");
        $(".works--title h3").eq(2).addClass("active");
    }
    if(winScroll >= wH * 4.75){
        $(".works--obj--group").removeClass("brown");
        $(".works--obj--group").addClass("green");
        $(".works--title h3").removeClass("active");
        $(".works--title h3").eq(3).addClass("active");
        $(".works--item").eq(3).addClass("show");
    }
    if(winScroll >= wH * 5){
        $(".works--all-link").addClass("show");
    }
    if(winScroll >= wH * 5.5){
        $(".thanks-text").addClass("show");
    }
    // works end
})
/* ########## END Scroll Event ############# */

export { scroll }