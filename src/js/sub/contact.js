const path = window.location.pathname.split("/").pop();
if(path == "contact.html"){
    const contactText = $(".contact p");
    let i = 0;

    setInterval(() => {
        i++;
        if(i == contactText.length){
            i = 0;
        }
        contactText.removeClass("active");
        contactText.eq(i).addClass("active");
    }, 500);

    const li = $(".contact li");
    li.addClass("show");
}