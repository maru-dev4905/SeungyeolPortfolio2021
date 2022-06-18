let win_width     = $(window).innerWidth();
let win_height    = $(window).innerHeight();

$(window).resize(function(){
    win_width   = $(window).innerWidth();
    win_height  = $(window).innerHeight();
});


$("a").click(function (event) {
    event.preventDefault();

    let url = $(this).attr("href");

    if($(this).hasClass("sns") || $(this).hasClass("site-link")){
 
        var openWindow = window.open("about:blank");
        openWindow.location.href = url;
 
    }else if($(this).hasClass("mail")){
        
        window.location.href = url;
    
    }
    else if($(this).hasClass("works-link")){
        
        if(win_width >= 474){
            // pc

            $(".page-move").addClass("show");
            
            setTimeout(() => {
                let th = $(this);
                let name = th.data("projectname");
        
                setChildValue(name);
            }, 2000);

        }else{
            // mo
            
            if($(this).closest(".works--item--text").hasClass("works--item--text")){
                
                $(".page-move").addClass("show");
                
                setTimeout(() => {
                    let th = $(this);
                    let name = th.data("projectname");
            
                    setChildValue(name);
                }, 2000);
            }else if($(this).parent("h4")){
                $(".works-link").parent().siblings(".thumbnail_mo").removeClass("show");
                $(this).parent().siblings(".thumbnail_mo").addClass("show");
            }
        }
    
    }else if($(this).hasClass("works-link-mo")){

        
        $(".page-move").addClass("show");
            
        setTimeout(() => {
            let th = $(this);
            let name = th.data("projectname");
    
            setChildValue(name);
        }, 2000);

    }else if($(this).hasClass("github") || $(this).hasClass("preview")){

        let openWindow = window.open("about:blank");
        
        openWindow.location.href = url;
        
    }else if($(this).hasClass("download-btn")){
        let openWindow = window.open("about:blank");
        
        openWindow.location.href="/files/LeeSeungyeol(이승열)_이력서.pdf";
    }
    else{
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