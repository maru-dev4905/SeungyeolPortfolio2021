import LocomotiveScroll from 'locomotive-scroll';

const body = $("body");
const wrap = $("#page-wrap");
const cursor = $("#mouse_cursor");

var scroll = new LocomotiveScroll    
({
    el: document.querySelector(`[data-scroll-container]`),
    smooth: true,
    getDirection: true,
    inertia: 0.65,
    smartphone: {
        smooth: true,
        getDirection: !0,
        inertia: 0.65,
    },
    tablet: {
        smooth: true,
        getDirection: !0,
        inertia: 0.65,
    }
});


setTimeout(() => {
    scroll.update();
    scroll.start();
}, 500);

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
})
/* ########## END Scroll Event ############# */

export { scroll }