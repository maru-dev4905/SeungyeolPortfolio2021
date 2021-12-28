const imgContainer  = $(".intro--img--inner");
const imgItems      = $(".intro--img--container li");
let i = 0;
var imgChange;
var imgChangeBool = false;

let winX;

winX = $(window).innerWidth();

$(window).resize(function(){
    winX = $(window).innerWidth();
})
imgContainer.mouseover(function(){
    if(winX <= 475){
        return false;
    }else{
        if(imgChangeBool){
            imgChange = setInterval(imgChangeFunc,100)
        }else{
            return false;
        }
    }
})
imgContainer.mouseout(function(){
    if(winX <= 475){
        return false;
    }else{
        if(imgChangeBool){
            clearInterval(imgChange);
        }else{
            return false;
        }
    }
})
function imgChangeFunc(){
    if(i >= imgItems.length){
        i = 0;
    }
    imgItems.css('display','none')
    imgItems.eq(i).css('display','block')
    i++;
}

const main          = $("main");
const header        = $("header");
const intro         = $(".intro");
const introPercent  = $(".intro--percentage span").eq(2);

setTimeout(()=>{
    introStart();
},1500)

function introStart(){
    main.addClass("intro-start");
    header.addClass("show");
    introPercentUp();

    setTimeout(()=>{
        imgChangeBool = true;
    },6000)
}

function introPercentUp(){
    var i = 0;
    setInterval(()=>{
        i++;
        if(i <= 100){
            introPercent.text(i);
        }
    },10)
}