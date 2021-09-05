const blueChangeBtn     = $(".blue--change--btn");
const lightChangeBtn    = $(".light--change--btn");
const body              = $("body");

blueChangeBtn.click(changeBlue);
lightChangeBtn.click(changeLight);

function changeBlue(){
        body.removeClass("light");
        body.addClass("blue");
        lightChangeBtn.removeClass("active");
        blueChangeBtn.addClass("active");
}
function changeLight(){
        body.removeClass("blue");
        body.addClass("light");
        lightChangeBtn.addClass("active");
        blueChangeBtn.removeClass("active");
}