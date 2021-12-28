$("a").click(function (event) {
    event.preventDefault();

    let url = $(this).attr("href");

    if($(this).hasClass("sns") || $(this).hasClass("site-link")){
        var openWindow = window.open("about:blank");
        openWindow.location.href = url;
    }else if($(this).hasClass("mail")){
        window.location.href = url;
    }else if($(this).hasClass("works")){
        $(".page-move").addClass("show");
        setTimeout(() => {
            let th = $(this);
            let name = th.data("projectname");
    
            setChildValue(name);
        }, 2000);
    }else{
        $(".page-move").addClass("show");
        
        
        setTimeout(() => {
            document.location.href = url;
            
        }, 2000);
    }

    return false;
});

if($(".dim").length == 1){
    $(".dim").animate({
        "left": "-100vw"
    },250)
}else{
    
}

function setChildValue(worksName){
    window.location.href = 
        `worksDetail.html?worksName=${worksName}`
}