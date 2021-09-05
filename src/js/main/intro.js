const imgContainer  = $(".intro--img--inner");
const imgItems      = $(".intro--img--container li");
let i = 0;
var imgChange;

imgContainer.mouseover(function(){
    imgChange = setInterval(imgChangeFunc,100)
})
imgContainer.mouseout(function(){
    clearInterval(imgChange);
})

function imgChangeFunc(){
    if(i >= imgItems.length){
        i = 0;
    }
    imgItems.css('display','none')
    imgItems.eq(i).css('display','block')
    i++;
}