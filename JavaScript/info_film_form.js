// فورم معلومات الفيلم
let pageoffset = 0;
let thisElement = 0;
let isEdit = false;
function showInformationFilm(){
    pageoffset = pageYOffset;
    // تحديد رقم العنصر الذى تم اختيارة
    this.classList.add("here");
    for(let i =0 ;i<document.querySelectorAll(".info-film").length;i++){
        if (document.querySelectorAll(".info-film")[i].classList.contains("here")){
            thisElement = i;
        }
    }
    this.classList.remove("here");
    // انتهاء
    document.querySelector(".info-btn-back").classList.remove("hide-element");
    document.querySelector(".info-btn-next").classList.remove("hide-element");

    if(thisElement == document.querySelectorAll(".info-film").length-1)
        document.querySelector(".info-btn-next").classList.add("hide-element");
    else if(thisElement <= 0) 
        document.querySelector(".info-btn-back").classList.add("hide-element");


    
    btnAdd.classList.add(["disappear-element"]);
    header.classList.add("disappear-element");
    watchedContinar.classList.add("disappear-element");
    menuBar.classList.add(["disappear-element"]);
    for(let grid of allgrid){
        grid.classList.add("disappear-element");
    }
    btnGoTop.classList.add("hide-element");
    informationFilmForm.classList.add("information-film-form-appear");
    informationFilmForm.classList.remove("disappear-element");
    //

    putInformationInForm(this);
}
// جمبع ازرار الانفورميشن فى الصفحة
for(let btn of informationFilm )
btn.addEventListener("click",showInformationFilm);
//
function returnPageFromInfoFilm(event){
    if((event.key == "Escape" && !(informationFilmForm.classList.contains("disappear-element"))) || event.target.classList.contains("btn-form-information-close")){
        informationFilmForm.classList.remove("information-film-form-appear");
        informationFilmForm.classList.add("disappear-element");
        watchedContinar.classList.remove(["disappear-element"]);
        header.classList.remove("disappear-element");
        menuBar.classList.remove(["disappear-element"]);
        btnAdd.classList.remove(["disappear-element"]);
        for(let grid of allgrid){
            grid.classList.remove(["disappear-element"]);
        }
        btnGoTop.classList.remove("hide-element");
        clearInformationFromForm();
        window.scrollTo(0,pageoffset);
        btnCancelEdit();
    }
}
btnFormInformationClose.addEventListener("click",returnPageFromInfoFilm);
window.addEventListener("keydown",returnPageFromInfoFilm);
//---------------------------------------
function putInformationInForm(element){
    const divFilm           = element.parentElement;
    const imgFilm           = divFilm.children[0];
    const nameFilm          = divFilm.children[1];
    const yearFilm          = divFilm.children[2];
    const ratingFilms        = divFilm.children[3];
    const timeFilms          = divFilm.children[4];
    const directorFilm      = divFilm.children[5];
    const divActors         = divFilm.nextElementSibling;
    const divKinds          = divActors.nextElementSibling;
    const divDescription    = divKinds.nextElementSibling;


    infoFilmImage.src               = imgFilm.src;
    infoFilmImagePath.textContent   = imgFilm.src;
    infoFilmName.textContent        = nameFilm.textContent;
    infoFilmRating.textContent      = ratingFilms.textContent;
    infoFilmYear.textContent        = yearFilm.textContent;
    infoFilmTime.textContent        = timeFilms.textContent;
    infoFilmDirector.textContent    = directorFilm.textContent;
    if(divActors.children.length >-1){
        for(let fa of divActors.children){
            infoFilmActors.innerHTML  += "<span class='info-span-actor'>"+fa.textContent + "</span>";
        }
    }
    if(divKinds.children.length >-1){
        for(let fk of divKinds.children){
            infoFilmKinds.innerHTML  += "<span class='info-span-kind'>"+fk.textContent + "</span>";
        }
    }
    infoFilmDescription.textContent = divDescription.textContent;
}
//---------------------------------------
function clearInformationFromForm(){
    infoFilmImage.src               = "";
    infoFilmName.textContent        = "";
    infoFilmRating.textContent      = "";
    infoFilmYear.textContent        = "";
    infoFilmTime.textContent        = "";
    infoFilmDirector.textContent    = "";
    infoFilmActors.textContent      = "";
    infoFilmKinds.textContent       = "";
    infoFilmDescription.textContent = "";
}
//---------------------------------------
function nextOrPreviousFormInfo(event){
            
        
    
        infoFilmActors.innerHTML ="";
        infoFilmKinds.innerHTML  ="";
        infoFilmImage.src               = FilmImage[thisElement].src;
        infoFilmImagePath.textContent   = FilmImage[thisElement].src;
        infoFilmName.textContent        = FilmLink[thisElement].textContent;
        infoFilmRating.textContent      = ratingFilm[thisElement].textContent;
        infoFilmYear.textContent        = yearFilmNumber[thisElement].textContent;
        infoFilmTime.textContent        = timeFilm[thisElement].textContent;
        infoFilmDirector.textContent    = ditectorMovie[thisElement].textContent;
        if(actorsNames[thisElement].children.length >-1){
            for(let fa of actorsNames[thisElement].children){
                infoFilmActors.innerHTML  += "<span class='info-span-actor'>"+fa.textContent + "</span>";
            }
        }
        if(filmsKinds[thisElement].children.length >-1){
            for(let fk of filmsKinds[thisElement].children){
                infoFilmKinds.innerHTML  += "<span class='info-span-kind'>"+fk.textContent + "</span>";
            }
        }
        infoFilmDescription.textContent = whatAbout1[thisElement].textContent;

        if(thisElement == document.querySelectorAll(".info-film").length-1) document.querySelector(".info-btn-next").classList.add("hide-element");
        else if(thisElement <= 0) document.querySelector(".info-btn-back").classList.add("hide-element");
    
}
function pressKey(event){
    if(isEdit == false){
        if(informationFilmForm.classList.contains("disappear-element")) return;
    if(event.key){
        if(event.key == "ArrowRight"){
        
            if(thisElement == document.querySelectorAll(".info-film").length-1) {
                document.querySelector(".info-btn-next").classList.add("hide-element");
                return;
            }
            document.querySelector(".info-btn-back").classList.remove("hide-element");
            thisElement++;
            
        }
        else if(event.key == "ArrowLeft"){
        
            if(thisElement <= 0 ) {
                document.querySelector(".info-btn-back").classList.add("hide-element");
                return;
            }
            document.querySelector(".info-btn-next").classList.remove("hide-element");
            thisElement--;
        }else{
            return;
        }
        nextOrPreviousFormInfo();
    }
}
}
function clickButton(element){
    if(isEdit == false){
        if(informationFilmForm.classList.contains("disappear-element")) return;
    if(element.classList.contains("info-btn-next")){
        if(thisElement == document.querySelectorAll(".info-film").length-1) {
            document.querySelector(".info-btn-next").classList.add("hide-element");
            return;
        }
        document.querySelector(".info-btn-back").classList.remove("hide-element");
        thisElement++;

    }
    else if(element.classList.contains("info-btn-back") ){
        if(thisElement <= 0 ){
            document.querySelector(".info-btn-back").classList.add("hide-element");
            return;
        }
        document.querySelector(".info-btn-next").classList.remove("hide-element");
        thisElement--;
    }
    nextOrPreviousFormInfo();
}
}
document.querySelector(".info-btn-next").addEventListener("click",(event)=>{
    clickButton(event.target);
    
});
document.querySelector(".info-btn-back").addEventListener("click",(event)=>{
    clickButton(event.target);
    
});
window.addEventListener("keydown",(event)=>{
    pressKey(event)
});
let oldClientX = 0;
let oldClientY = 0;
informationFilmForm.addEventListener("touchstart",(event)=>{
    oldClientX = event.changedTouches[0].clientX;
    oldClientY = event.changedTouches[0].clientY;
});

let firstTimeVisitInfoPage = true;
informationFilmForm.addEventListener("touchend",(event)=>{
    if(isEdit == false){
        if(informationFilmForm.classList.contains("disappear-element")) return;
        if(firstTimeVisitInfoPage){ alert("move right or left to change movie"); firstTimeVisitInfoPage = false;};
        if(event.changedTouches[0].clientX < oldClientX-10 && (event.changedTouches[0].clientY < oldClientY+20 && event.changedTouches[0].clientY > oldClientY-20)){
            if(thisElement == document.querySelectorAll(".info-film").length-1) {
                document.querySelector(".info-btn-next").classList.add("hide-element");
                return;
            }
            document.querySelector(".info-btn-back").classList.remove("hide-element");
            thisElement++;
            
            
        }else if(event.changedTouches[0].clientX > oldClientX+10 && (event.changedTouches[0].clientY < oldClientY+20 && event.changedTouches[0].clientY > oldClientY-20)){
            if(thisElement <= 0 ) {
                document.querySelector(".info-btn-back").classList.add("hide-element");
                return;
            }
            document.querySelector(".info-btn-next").classList.remove("hide-element");
            thisElement--;
            
        }
    
    nextOrPreviousFormInfo();
}
});
// انتهاء فورم معلومات الفيلم
//===================================================================================================
function btnEdit(event){
    isEdit = true;
    if(isEdit){
        if(event.key == "ArrowLeft" || event.key == "ArrowRight")return;
    }
    infoBtnCancel.classList.remove("disappear-element");
    infoBtnUpdate.classList.remove("disappear-element");
    infoBtnAddNewActor.classList.remove("disappear-element");
    infoBtnAddNewKind.classList.remove("disappear-element");
    infoFilmImagePath.parentElement.classList.remove("disappear-element");
    document.querySelector("#br-info").classList.remove("br-info");

    infoFilmImagePath.classList.add("info-edit-on");
    infoFilmImagePath.classList.remove("info-edit-off");

    infoFilmName.setAttribute("contenteditable","true");
    infoFilmName.classList.remove("info-edit-off");
    infoFilmName.classList.add("info-edit-on");

    infoFilmRating.setAttribute("contenteditable","true");
    infoFilmRating.classList.remove("info-edit-off");
    infoFilmRating.classList.add("info-edit-on");  

    infoFilmYear.setAttribute("contenteditable","true");
    infoFilmYear.classList.remove("info-edit-off");
    infoFilmYear.classList.add("info-edit-on");    

    infoFilmTime.setAttribute("contenteditable","true");
    infoFilmTime.classList.remove("info-edit-off");
    infoFilmTime.classList.add("info-edit-on");     

    infoFilmDirector.setAttribute("contenteditable","true");
    infoFilmDirector.classList.remove("info-edit-off");
    infoFilmDirector.classList.add("info-edit-on");

    for(let fa of infoFilmActors.childNodes){
        fa.setAttribute("contenteditable","true");
        fa.classList.remove("info-edit-off");
        fa.classList.add("info-edit-on");
    }
    for(let fk of infoFilmKinds.children){
        fk.setAttribute("contenteditable","true");
        fk.classList.remove("info-edit-off");
        fk.classList.add("info-edit-on");
    }
    infoFilmDescription.setAttribute("contenteditable","true");
    infoFilmDescription.classList.remove("info-edit-off");
    infoFilmDescription.classList.add("info-edit-on");
}
btnFormInformationEdit.addEventListener("click",btnEdit);

function btnCancelEdit(){
    isEdit = false;
    infoBtnCancel.classList.add("disappear-element");
    infoBtnUpdate.classList.add("disappear-element");
    infoBtnAddNewActor.classList.add("disappear-element");
    infoBtnAddNewKind.classList.add("disappear-element");
    infoTextArea.classList.add("disappear-element");
    infoFilmImagePath.parentElement.classList.add("disappear-element");
    document.querySelector("#br-info").classList.add("br-info");

    

    infoFilmName.removeAttribute("contenteditable");
    infoFilmName.classList.add("info-edit-off");
    infoFilmName.classList.remove("info-edit-on");

    infoFilmRating.removeAttribute("contenteditable");
    infoFilmRating.classList.add("info-edit-off");
    infoFilmRating.classList.remove("info-edit-on");

    infoFilmYear.removeAttribute("contenteditable");
    infoFilmYear.classList.add("info-edit-off");
    infoFilmYear.classList.remove("info-edit-on");

    infoFilmTime.removeAttribute("contenteditable");
    infoFilmTime.classList.add("info-edit-off");
    infoFilmTime.classList.remove("info-edit-on");

    infoFilmDirector.removeAttribute("contenteditable");
    infoFilmDirector.classList.add("info-edit-off");
    infoFilmDirector.classList.remove("info-edit-on");

    for(let fa of infoFilmActors.childNodes){
        fa.removeAttribute("contenteditable");
        fa.classList.add("info-edit-off");
        fa.classList.remove("info-edit-on");
    }
    for(let fk of infoFilmKinds.children){
        fk.removeAttribute("contenteditable");
        fk.classList.add("info-edit-off");
        fk.classList.remove("info-edit-on");
    }
    infoFilmDescription.removeAttribute("contenteditable");
    infoFilmDescription.classList.add("info-edit-off");
    infoFilmDescription.classList.remove("info-edit-on");
}

infoBtnCancel.addEventListener("click",btnCancelEdit);

function addNewActorInIfo(){
    const span = document.createElement("span");
    span.setAttribute("contenteditable","true"); 
    infoFilmActors.append(span);
}

infoBtnAddNewActor.addEventListener("click",addNewActorInIfo);

function addNewKindInIfo(){
    const span = document.createElement("span");
    span.setAttribute("contenteditable","true"); 
    infoFilmKinds.append(span);
}

infoBtnAddNewKind.addEventListener("click",addNewKindInIfo);

function updateDataFromInfo(){    
        FilmLink[thisElement].textContent       = infoFilmName.textContent;
        FilmImage[thisElement].src              = infoFilmImagePath.textContent;
        infoFilmImage.src                       = infoFilmImagePath.textContent;
        ratingFilm[thisElement].textContent     = infoFilmRating.textContent;
        yearFilmNumber[thisElement].textContent = infoFilmYear.textContent;
        timeFilm[thisElement].textContent       = infoFilmTime.textContent;
        ditectorMovie[thisElement].textContent  = infoFilmDirector.textContent;
        
        //
        let countActor = document.querySelectorAll(".add-actors")[thisElement].children.length-1;
        let stractorn ="";
        for(let actor= countActor;actor>=0;actor-- ){
            document.querySelectorAll(".add-actors")[thisElement].children[actor].remove();
        }
        for(let actor of document.querySelector("#info-film-actors").children){
            if(actor.textContent != ""){
                let actors = document.createElement("span");
                actors.textContent = actor.textContent;
                stractorn += `<span>${actor.textContent}</span>`;
                document.querySelectorAll(".add-actors")[thisElement].append(actors);
            }
        }
        //
        let countKind = document.querySelectorAll(".add-films-kind")[thisElement].children.length-1;
        let strfilmk ="";
        for(let kind= countKind;kind>=0;kind-- ){
            document.querySelectorAll(".add-films-kind")[thisElement].children[kind].remove();
        }
        for(let kind of document.querySelector("#info-film-kinds").children){
            if(kind.textContent != ""){
                let kinds = document.createElement("span");
                kinds.textContent = kind.textContent;
                strfilmk += `<span>${kind.textContent}</span>`;
                document.querySelectorAll(".add-films-kind")[thisElement].append(kinds);
            }
        }

        whatAbout1[thisElement].textContent     = infoFilmDescription.textContent;

        const textOfRow =`<div class="filmName"><!-- 1:1 --><img class="fImage" src="${infoFilmImagePath.textContent}" alt="${infoFilmName.textContent}"><!-- 1:2 --><a class="link-film a-in-dark-mode-off" href="${FilmLink[thisElement].href}"><!-- 1:3 -->${infoFilmName.textContent}</a><!-- 1:4 --><span class="year-num disappear-element">${infoFilmYear.textContent}</span><!-- 1:5 --><span class="rating-movie disappear-element">${infoFilmRating.textContent}</span><!-- 1:6 --><span class="film-time disappear-element">${infoFilmTime.textContent}</span><!-- 1:7 --><span class="director-movie disappear-element">${infoFilmDirector.textContent}</span><!-- 1:8 --><span class="info-film info-film-dark-mode-off">i</span></div><!-- 2:1 --><div class="add-actors disappear-element">${stractorn}</div><!-- 3:1 --><div class="add-films-kind disappear-element">${strfilmk}</div><!-- 4:1 --><div lang="ar" class="whatAbout whatAbout-in-dark-mode-off">${infoFilmDescription.textContent}</div><!-- 5:1 --><div class="watchedBox"><!-- 5:1 --><input type="checkbox" name="watched" ${watchedBox1[thisElement].children[0].checked?"checked":""}  value="watched"></div>`; 
        infoTextArea.textContent += textOfRow +"\n=======================================================================================\n";


        infoTextArea.classList.remove("disappear-element");
}

infoBtnUpdate.addEventListener("click",updateDataFromInfo);