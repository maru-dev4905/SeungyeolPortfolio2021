const openBtn       = $(".hambuger--open--btn ");
const closeBtn      = $(".hambuger-close-btn ");
const menu          = $(".menu");

openBtn.click(function(){
    menu.addClass("show");
})
closeBtn.click(function(){
    menu.removeClass("show");
})