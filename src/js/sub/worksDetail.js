import $ from 'jquery';

function pushWorkIntroContent(){
    
    const workContents = parseJson("intro");

    const urlParams = new URL(location.href).searchParams;
    const name = urlParams.get("worksName");

    const tagEl         = $(".worksDetail--intro .works--tag");
    const titleEl       = $(".worksDetail--intro .works--title h3");
    const contentEl     = $(".worksDetail--intro .works--content p").eq(0);
    
    for (const prop in workContents) {
        
        if(prop == name){

            const projectTag        = workContents[prop].tag;
            const projectTitle      = workContents[prop].title;
            const projectContent    = workContents[prop].content;
            
            projectTag.forEach(function(tag){
            
                let tagSpan = $(`
                    <span>${tag}</span>
                `)
                tagEl.append(tagSpan)
            
            });
            
            titleEl.text(projectTitle);
            contentEl.html(projectContent);

        }
    }

    pushWorkContent(name);
}
pushWorkIntroContent();

function pushWorkContent(name){
    const detailContent = parseJson("detail");

    const imgContainer      = $(".worksDetail--content .img--wrap");
    const tagContainer      = $(".worksDetail--content .works--tag");
    const titleContainer    = $(".worksDetail--content .works--title h3");
    const textContainer     = $(".worksDetail--content .works--text p");
    const techContainer     = $(".worksDetail--content .works--tech p");
    const githubContainer   = $(".worksDetail--content .works--link .github");
    const previewContainer  = $(".worksDetail--content .works--link .preview");

    for(let i = 1 ; i <= 5; i++){
        var img = $(`
            <img src="./images/works/detail/${name}/img0${i}.png" alt="${name}_img"/>
        `)
        imgContainer.append(img);
    }

    for(const prop in detailContent){

        if(prop == name){

            const tagData           = detailContent[prop].tag;
            const titleData         = detailContent[prop].title;
            const kindData          = detailContent[prop].kind;
            const degreeData        = detailContent[prop].degree;
            const timeData          = detailContent[prop].time;
            const techData          = detailContent[prop].tech;
            const linkData          = detailContent[prop].link;

            tagData.forEach(function(tag){
            
                let tagSpan = $(`
                    <span>${tag}</span>
                `)
                tagContainer.append(tagSpan)
            
            });

            titleContainer.text(titleData);
            textContainer.eq(0).text(kindData);
            textContainer.eq(1).text(degreeData);
            textContainer.eq(2).text(timeData);
            techContainer.text(techData);
            githubContainer.attr("href",linkData[0]);
            previewContainer.attr("href",linkData[1]);

            if(kindData == "Kiosk"){
                imgContainer.parent().addClass("kiosk");
            }else{
                return false;
            }

        }

    }

}

function parseJson(jsonKind){
    let worksJson;

    if(jsonKind == "intro"){

        worksJson = require('../json/worksContent.json');

    }else if(jsonKind == "detail"){

        worksJson = require('../json/worksDetailContent.json');

    }

    return worksJson;
}