
const thumbnailCloseBtn = $(".thumbnail_mo button");

thumbnailCloseBtn.click(function(){
    let th = $(this);

    th.parent().removeClass("show");
});