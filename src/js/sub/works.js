import $ from 'jquery';
import fullpage from 'fullpage.js/dist/jquery.fullpage';

const path = window.location.pathname.split("/").pop();
let winX;
let mobileCheck;
let yPX;
let findItem;
let siteMobileCheck;
winX = $(window).innerWidth();

if(winX <= 475){
    mobileCheck = true;
    siteMobileCheck = "mo";
}else{
    mobileCheck = false;
    siteMobileCheck = "pc";
}

$(window).resize(function(){
    winX = $(window).innerWidth();
    if( winX <= 475){
        mobileCheck = true;
        siteMobileCheck = "mo";
    }else{
        mobileCheck = false;
        siteMobileCheck = "pc";
    }
})

if(path == "works.html"){

    const SPEED = 1000;
    let show_time;
    let moveCheck;

    $("#fullpage").fullpage({
        scrollingSpeed: SPEED,
        
        onLeave:function(index, nextIndex, direction){
            moveCheck = false;
            if(mobileCheck){
                showContent(index,nextIndex,direction,"mobile");
            }else{
                showContent(index,nextIndex,direction,"pc");
            }
        }
    })

    if(mobileCheck){
        // mobile
        showFirstContent("mobile");
        show_time = 150;
    }else{
        // pc
        showFirstContent("pc");
        show_time = 270;
    }
    
    const contents = $(".works--section");
    const contentLists = $(".works--content--list");
    const contentItems = contentLists.find("> li");
    const contentLinks = contentLists.find("a");
    const firstContentItems = document.querySelectorAll(".keyword--list > li");
    let worksName;

    contentLinks.mouseover(linkMouseOver);
    contentLinks.mouseout(linkMouseOut);
    contentLinks.click(clickWorks);
    
    function showFirstContent(kind){
        var i = 0;
        var interval = setInterval(() => {
            if(kind == "mobile"){
                var textUp = TweenMax.to(contentLists.eq(0).find(contentLinks).eq(i), 0.65, {
                    transform: `scaleY(1) translateY(0)` ,
                    opacity: 1
                })
                if(i == contentLists.eq(0).find(contentLinks).length){   
                    i = 0;
                    clearInterval(interval)
                    moveCheck = true;
                }
            }else{
                var textUp = TweenMax.to(contentLists.eq(0).find(contentItems).eq(i), 0.65, {
                    transform: `scaleY(1) translateY(0)` ,
                    opacity: 1
                })
                if(i == contentLists.eq(0).find(contentItems).length){   
                    i = 0;
                    clearInterval(interval)
                    $(".blur").find(contentLists).eq(1).css({
                        zIndex: -10
                    })
                    $(".blur").find(contentLists).eq(0).css({
                        zIndex: 10
                    })
                    moveCheck = true;
                }
            }
            i++;
            moveCheck = true;
        }, 150);
    }
    function showContent(idx,nextIdx,dir,kind){

        if(kind == "mobile"){
            yPX = 50;
            findItem = contentLinks;
        }else{
            yPX = 200;
            findItem = contentItems;
        }
        if(dir == "down"){
            var i = 0;
            $('.blur').css({
                display: "none"
            })
            const nextInterval = setInterval(() => {

                var textUp = TweenMax.to(contentLists.eq(nextIdx - 2).find(findItem).eq(i), 0.65, {
                    transform: `scaleY(1.5) translateY(-${yPX}px)` ,
                    opacity: 0
                })
                i++;
                if(i == contentLists.eq(nextIdx - 2).find(findItem).length){   
                    i = 0;
                    clearInterval(nextInterval)
                    nextShowContent(nextIdx,kind);
                }
            }, 150);
    
        }else if(dir == "up"){
            var i = contentLists.eq(nextIdx).find(findItem).length;
            $('.blur').css({
                display: "none"
            })
            const prevInterval = setInterval(() => {
                i--;
                var textDown = TweenMax.to(contentLists.eq(nextIdx).find(findItem).eq(i), 0.65, {
                    transform: `scaleY(1.5) translateY(${yPX}px)` ,
                    opacity: 0
                })
                if(i == 0){
                    i = contentLists.eq(nextIdx).find(findItem).length;
                    clearInterval(prevInterval)
                    prevShowContent(nextIdx,kind);
                }
            }, 150);
        }
    }
    function nextShowContent(nextIdx,kind){

        if(kind == "mobile"){
            yPX = 50;
            findItem = contentLinks;
        }else{
            yPX = 200;
            findItem = contentItems;
        }

        let nextShowTime = contentLists.eq(nextIdx - 1).find(findItem).length * show_time;
        
        setTimeout(() => {
            contents.eq(nextIdx - 1).css({
                zIndex: -5
            })
            var i = 0;
            var interval = setInterval(() => {
                var textDown = TweenMax.to(contentLists.eq(nextIdx - 1).find(findItem).eq(i), 0.65, {
                    transform: `scaleY(1) translateY(0)` ,
                    opacity: 1
                })
                i++;
                if(i == contentLists.eq(nextIdx - 1).find(findItem).length){   
                    i = 0;
                    clearInterval(interval)
                    $(".blur").find(contentLists).eq(nextIdx - 2).css({
                        zIndex: -10
                    })
                    $(".blur").find(contentLists).eq(nextIdx - 1).css({
                        zIndex: 10
                    })
                    moveCheck = true;
                }
            }, 150);
        }, nextShowTime);
    
    }
    function prevShowContent(nextIdx,kind){

        if(kind == "mobile"){
            yPX = 50;
            findItem = contentLinks;
        }else{
            yPX = 200;
            findItem = contentItems;
        }

        let prevShowTime = contentLists.eq(nextIdx - 1).find(findItem).length * show_time;
        setTimeout(() => {
            contents.eq(nextIdx).css({ 
                zIndex: -10
            })
            var i = contentLists.eq(nextIdx - 1).find(findItem).length;
            var interval = setInterval(() => {
                i--;
                var textDown = TweenMax.to(contentLists.eq(nextIdx - 1).find(findItem).eq(i), 0.65, {
                    transform: `scaleY(1) translateY(0)` ,
                    opacity: 1
                })
                if(i == 0){
                    i = contentLists.eq(nextIdx - 1).find(findItem).length;
                    clearInterval(interval)
    
                    $(".blur").find(contentLists).eq(nextIdx - 2).css({
                        zIndex: -10
                    })
                    $(".blur").find(contentLists).eq(nextIdx - 1).css({
                        zIndex: 10
                    })
                    moveCheck = true;
                }
            }, 150);
        }, prevShowTime);
    }
    
    function linkMouseOver(){
        let item = $(this);
    
        if(moveCheck){
            contentLinks.not(item).addClass("hover");
            contentLinks.filter(item).addClass("hoverThis");
            $(".blur").css("display","block");
            
            showThumbnail(item);
        }else{
            contentLinks.not(item).removeClass("hover");
            contentLinks.filter(item).removeClass("hoverThis");
            $(".blur").css("display","none");
    
            return false;
        }
    }
    function linkMouseOut(){
        let item = $(this);
        contentLinks.not(item).removeClass("hover");
        contentLinks.filter(item).removeClass("hoverThis");
        $(".blur").css("display","none");
        
        hideThumbnail(item);
    }
    function showThumbnail(item){
        let itemData = item[0].dataset.projectname;
    
        $(`.${itemData}`).addClass("show");
    }
    function hideThumbnail(item){
        let itemData = item[0].dataset.projectname;
    
        $(`.${itemData}`).removeClass("show");
    }
    function addThumbnail(){
        for(var i = 0 ; i < contentLinks.length; i++){
            let itemData = contentLinks[i].dataset.projectname;
            let imgWrap = $(`<div class="${itemData} thumbnail"></div>`)
            let img = $(`<img src="./images/works/thumbnail/${itemData}.png" alt="${itemData}">`)
            imgWrap.append(img);
            $(".works--thumbnail").append(imgWrap);
        }
    }
    addThumbnail();
    
    // create works Item function
    function pushWorkItemContents(){
        const workContents = parseJson();
        const projectName   = workContents.name;
        const projectTitle  = workContents.title;
        const projectSmall  = workContents.small;
    
        const worksItems = $(".works--content--list a");
        
        for (let i = 0; i < projectName.length; i++) {
            const name      = projectName[i];
            const title     = projectTitle[i];
            const small     = projectSmall[i];
            worksItems.eq(i).attr("data-projectName",name);
            
            if(i < 9){
                worksItems.find(" span").eq(i).text(`0${i+1}`);
            }else{
                worksItems.find(" span").eq(i).text(`${i+1}`);
            }
    
            if(worksItems.find("h2").eq(i).find("small").length == 1){
                worksItems.find("h2").eq(i).html(
                    `${
                        title + `<small data-glitch='${small}'>${small}</small>`
                    }`
                );
            }else{
                worksItems.find("h2").eq(i).text(title);
            }
            worksItems.find("h2").eq(i).attr("data-glitch",title);
            worksItems.find("span").eq(i).attr("data-glitch",title);
        }
    }
    pushWorkItemContents();
    
    function parseJson(){
        const worksItemJson = require('../json/works.json');
    
        return worksItemJson;
    }

    function setChildValue(worksName){
        window.location.href = 
            `worksDetail.html?worksName=${worksName}`
    }
    function clickWorks(){
        setTimeout(() => {
            let th = $(this);
            let name = th.data("projectname");
    
            setChildValue(name);
        }, 1500);
    }
}
else if(path == "worksDetail.html"){
    const webComponent = $(`
                    <div class="full">

                    </div>
                    <div class="medium">
                        <div class="inner">
                        
                        </div>
                    </div>
                    <div class="medium">
                        <div class="inner">
                        
                        </div>
                    </div>
                    <div class="text-scroll">
                        <div class="inner">
                            <span></span>
                            <div class="text">
                                <h3></h3>
                                <h3></h3>
                                <h3></h3>
                                <h3></h3>
                                <h3></h3>
                            </div>
                            <span></span>
                        </div>
                    </div>
                    <div class="small">

                    </div>
                    <div class="content">
                        <div class="img--box">
                        
                        </div>
                        <div class="text">
                            <h4></h4>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div class="medium">
                        <div class="inner">
                        
                        </div>
                    </div>
                    <div class="small">
                    
                    </div>
                    <div class="full">

                    </div>
                `)
    const mobileComponent = $(`
                    <div class="full">

                    </div>
                    <div class="medium mobile">
                        <div class="inner">
                        
                        </div>
                    </div>
                    <div class="text-scroll">
                        <div class="inner">
                            <span></span>
                            <div class="text">
                                <h3></h3>
                                <h3></h3>
                                <h3></h3>
                                <h3></h3>
                                <h3></h3>
                            </div>
                            <span></span>
                        </div>
                    </div>
                    <div class="small mobile">

                    </div>
                    <div class="medium mobile">
                        <div class="inner">
                        
                        </div>
                    </div>
                    <div class="full">

                    </div>
    `)

    function getParameterByName(name) { 
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
        
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
            results = regex.exec(location.search); 
        
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
    }
    var patId   = getParameterByName('worksName');
    
    function parseJson(){
        const worksItemJson = require('../json/worksContent.json');
    
        return worksItemJson;
    }

    function pushWorkItemContents(){
        
        const workContents  = parseJson();
        
        for (const prop in workContents) {
            
            if(prop == patId){
                const title         = $(".worksDetail--intro .title"); 
                const personnel     = $(".worksDetail--intro .personnel"); 
                const initial       = $(".worksDetail--intro .initial span").eq(0); 
                const time          = $(".worksDetail--intro .time"); 
                const kind          = $(".worksDetail--intro .kind"); 
                const skill         = $(".worksDetail--intro .skill"); 
                const git           = $(".worksDetail--intro .git-link"); 
                const site          = $(".worksDetail--intro .site-link"); 
                
                const nextTitle     = $(".worksDetail--next-content h4");
                const nextContent   = $(".worksDetail--next-content span");
                const nextInitial   = $(".worksDetail--next-content h3");
                const nextLink      = $(".worksDetail--next-content .next-link");
                
                if(workContents[prop][12] == "web"){
                    $(".worksDetail--img--container").append(webComponent)
                    
                    nextLink.click(clickWorks)
                    
                    const fullImg           = $(".full");
                    const mediumImg         = $(".medium .inner");
                    const smallImg          = $(".small");
                    const imgBox            = $(".img--box");
                    const contentTitle      = $(".worksDetail--img--container .content .text h4");
                    const contentText1      = $(".worksDetail--img--container .content .text p").eq(0);
                    const contentText2      = $(".worksDetail--img--container .content .text p").eq(1);
                    const textScroll        = $(".text-scroll h3");

                    if(workContents[prop][14] == "commingSoon"){
                        imgBox.attr         ("style",`background-color:#363636`);
                        textScroll.text     ("commingSoon");
                        contentTitle.text   ("commingSoon");
                        contentText1.text   ("commingSoon");
                        contentText2.text   ("commingSoon");

                        // full
                        for(let i = 0 ; i < 2; i++){
                            let fullImgitem = $(`<img src="./images/works/detail/commingSoon/commingSoon-big.png" alt="commingSoon">`)
                            fullImg.eq(i).append(fullImgitem);
                        }
                        
                        for(let i = 0; i < 3; i++) {
                            let mediumImgItem = $(`<img src = "./images/works/detail/commingSoon/commingSoon-medium.png" alt="commingSoon">`)
                            mediumImg.eq(i).append(mediumImgItem);
                        }
                        
                        for(let i = 0; i < 2; i++) {
                            let smallBg = $(`<div class="bg" style="background-image:url('./images/works/detail/commingSoon/commingSoon-bg.png')"></div>`)
                            let smallImgItem = $(`<img src = "./images/works/detail/commingSoon/commingSoon-small.png" alt="commingSoon">`)
                            smallImg.eq(i).append(smallBg);
                            smallImg.eq(i).append(smallImgItem);

                        }
                        // content
                        let contentImg = $(`<img src="./images/works/detail/commingSoon/commingSoon-content.png" alt="commingSoon">`)
                        imgBox.append(contentImg);
                    }else{
                        imgBox.attr         ("style",`background-color:${workContents[prop][11]}`);
                        textScroll.text     (workContents[prop][7]);
                        contentTitle.text   (workContents[prop][8])
                        contentText1.text   (workContents[prop][9])
                        contentText2.text   (workContents[prop][10])
    
                        // full
                        for(let i = 0 ; i < 2; i++){
                            let fullImgItem = $(`<img src="./images/works/detail/${prop}/full0${i + 1}.png" alt="${prop}">`)
                            fullImg.eq(i).append(fullImgItem);
                        }
    
                        // medium
                        for(let i = 0 ; i < 3; i++){
                            let mediumImgItem = $(`<img src="./images/works/detail/${prop}/medium0${i + 1}.png" alt="${prop}">`)
                            mediumImg.eq(i).append(mediumImgItem);
                        }
    
                        // small
                        for(let i = 0 ; i < 2; i++){
                            let smallBg = $(`<div class="bg" style="background-image:url('./images/works/detail/${prop}/bg0${i+1}.png')"></div>`)
                            let smallImgItem = $(`<img src="./images/works/detail/${prop}/small0${i + 1}.png" alt="${prop}">`)
                            smallImg.eq(i).append(smallBg);
                            smallImg.eq(i).append(smallImgItem);
                        }
                            
                        // content
                        let contentImg = $(`<img src="./images/works/detail/${prop}/content01.png" alt="${prop}">`)
                        imgBox.append(contentImg);
                    }

                }else if(workContents[prop][12] == "mobile"){

                    $(".worksDetail--img--container").append(mobileComponent)

                    nextLink.click(clickWorks)
                    
                    const fullImg       = $(".full");
                    const mediumImg     = $(".medium .inner");
                    const smallImg      = $(".small");
                    const textScroll    = $(".text-scroll h3");
                    
                    textScroll.text     (workContents[prop][7]);

                    // full
                    for(let i = 0 ; i < 2; i++){
                        let fullImgItem = $(`<img src="./images/works/detail/${prop}/full0${i + 1}.png" alt="${prop}">`)
                        fullImg.eq(i).append(fullImgItem);
                    }

                    // medium
                    for(let i = 0 ; i < 3; i++){
                        let mediumImgItem = $(`<img src="./images/works/detail/${prop}/medium0${i + 1}.png" alt="${prop}">`)
                        mediumImg.eq(0).append(mediumImgItem);
                    }
                    for(let i = 3 ; i < 6; i++){
                        let mediumImgItem = $(`<img src="./images/works/detail/${prop}/medium0${i + 1}.png" alt="${prop}">`)
                        mediumImg.eq(1).append(mediumImgItem);
                    }

                    // small
                    let smallBg = $(`<div class="bg" style="background-image:url('./images/works/detail/${prop}/bg01.png')"></div>`)
                    let smallImgItem = $(`<img src="./images/works/detail/${prop}/small01.png" alt="${prop}">`)
                    smallImg.append(smallBg);
                    smallImg.append(smallImgItem);
                }
                personnel.text      (workContents[prop][0]);
                initial.text        (workContents[prop][1]);
                title.text          (workContents[prop][2]);
                kind.text           (workContents[prop][3]);
                time.text           (workContents[prop][4]);
                skill.text          (workContents[prop][5]);
                git.attr            ("href",workContents[prop][6]);
                
                siteHrefPush(workContents[prop][13], workContents[prop][2], site);
                
                let propIndex       = Object.keys(workContents).indexOf(prop);
                let nextProp        = Object.keys(workContents)[propIndex + 1]

                if(nextProp == undefined){
                    nextProp = "SamwhaPaper";
                }

                nextInitial.text    (workContents[nextProp][1]);
                nextTitle.text      (workContents[nextProp][2]);
                nextContent.text    (workContents[nextProp][3]);
                nextLink.attr       ("data-projectname",nextProp)
            }
        }
    }
    pushWorkItemContents();

    function setChildValue(worksName){
        window.location.href = "worksDetail.html?worksName=" + worksName
    }
    function clickWorks(){
        setTimeout(() => {
            let th = $(this);
            let name = th.data("projectname");

            setChildValue(name);
        }, 1500);
    }
    function siteHrefPush(name,title,site){
        if(name == "responsive"){
            site.attr           ("href", `/works/${title}/index.html`);
        }else if(name == "adaptive"){
            site.attr           ("href",`/works/${title}/${siteMobileCheck}/index.html`)
        }else{
            console.log("nope")
        }
    }
}