
// دول الامشروع
//============================================================
// اضافة انواع الافلام الى اداة السيلكت عند تحميل الصفحة
function appendToSelect(){
    const df = document.createDocumentFragment();
    for(let ltitle of classTitle){
        let option = document.createElement("option");
        option.textContent = ltitle.textContent;
        df.append(option);
    }
    document.querySelector("#moviekind").append(df);
}
window.addEventListener("load",appendToSelect,false);
//===================================================================================================
// زرار اعلى الصفحة
function showBtnTopPage(){
    if(pageYOffset > 100)
    btnGoTop.classList.remove("disappear-element");
    else{
        btnGoTop.classList.add("disappear-element");
    }
    
}
window.addEventListener("scroll",showBtnTopPage);
btnGoTop.addEventListener("click",function(){scrollTo(0,0)});
//============================================================
function clearGrid(){
    clearText();
    returnTheAddActor();
    returnTheAddKind();
    txtArea.textContent = "";
}
//============================================================
// دالة اضافة اسماء جميع الافلام الى مربع البحث وعملها عند تحميل الصفحة
function addFilmNameToSearch(){
    const df = document.createDocumentFragment();
    for(let namefile of txtNameFile){
        let option = document.createElement("option");
        option.textContent = namefile.children[1].textContent;
        df.append(option);
    }
    datalist.append(df);
}
window.addEventListener("load",addFilmNameToSearch,false);
//============================================================
// دالة عند البحث داخل مربع البحث
function searchFilm(){
    if(movieSearch.value.length > 0){
        for(let i = 0;i < wTitle1.length;i++){
            wTitle1[i].classList.add(["disappear-element"]);
            classTitle[i].classList.add(["disappear-element"]);
            classTitle[i].nextElementSibling.classList.add(["disappear-element"]);
            wTitle1[i].parentElement.style.borderBottom = "none";
        }
        for(let i = 0;i<txtNameFile.length;i++){
            if(txtNameFile[i].children[1].textContent.trim() == movieSearch.value ){
                txtNameFile[i].classList.remove(["disappear-element"]);
                whatAbout1[i].classList.remove(["disappear-element"]);
                watchedBox1[i].classList.remove(["disappear-element"]);
            }else{
                txtNameFile[i].classList.add(["disappear-element"]);
                whatAbout1[i].classList.add(["disappear-element"]);
                watchedBox1[i].classList.add(["disappear-element"]);
            }
        }
    }else{
        checkForWatchedMovies();
    }
}
//وضافة الى مربح البحث حدث عندما يحدث تغير و اخر عند الكتابة فية باستخدام دالة السابقة
movieSearch.addEventListener("change",searchFilm,false);
movieSearch.addEventListener("keydown",searchFilm,false);
//============================================================
// دالة اظهار جميع الافلام 
function showAllMovies(){
    for(let i = 0;i<txtNameFile.length;i++){
        txtNameFile[i].classList.remove(["disappear-element"]);
        whatAbout1[i].classList.remove(["disappear-element"]);
        watchedBox1[i].classList.remove(["disappear-element"]);
        watchedBox1[i].parentElement.classList.remove(["disappear-element"]);
    }
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.remove(["disappear-element"]);
        classTitle[i].classList.remove(["disappear-element"]);
        classTitle[i].nextElementSibling.classList.remove(["disappear-element"]);
        //wTitle1[i].parentElement.style.borderBottom = "black solid 1px";
    }
}
//============================================================
// دالة اظهار الافلام التى لم تشاهد
function showMoviesNotWatched(){
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.add(["disappear-element"]);
        classTitle[i].classList.add(["disappear-element"]);
        classTitle[i].nextElementSibling.classList.add(["disappear-element"]);
        wTitle1[i].parentElement.classList.add(["disappear-element"]);
    }
    for(let i = 0;i<txtNameFile.length;i++){
        if(!watchedBox1[i].children[0].checked){
            txtNameFile[i].classList.remove(["disappear-element"]);
            whatAbout1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[0].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[1].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[2].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.classList.remove(["disappear-element"]);
        }else{
            txtNameFile[i].classList.add(["disappear-element"]);
            whatAbout1[i].classList.add(["disappear-element"]);
            watchedBox1[i].classList.add(["disappear-element"]);
        }
    }
}
//============================================================
// دالة اظهار الافلام التى تمت مشاهدتها
function showMoviesWatched(){
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.add(["disappear-element"]);
        classTitle[i].classList.add(["disappear-element"]);
        classTitle[i].nextElementSibling.classList.add(["disappear-element"]);
        wTitle1[i].parentElement.classList.add(["disappear-element"]);
    }
    for(let i = 0;i<txtNameFile.length;i++){
        if(watchedBox1[i].children[0].checked){
            txtNameFile[i].classList.remove(["disappear-element"]);
            whatAbout1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[0].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[1].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[2].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.classList.remove(["disappear-element"]);
        }else{
            txtNameFile[i].classList.add(["disappear-element"]);
            whatAbout1[i].classList.add(["disappear-element"]);
            watchedBox1[i].classList.add(["disappear-element"]);
        }
    }
}
//============================================================
// دالة التاكد من اظهار الافلام فقط التى تم اختيارها فى الرديو بوتن باستخدم الدوال الثلاث السابقة
function checkForWatchedMovies(){
    for(let i = 0 ;i<rdoWatched.length;i++){
        if (rdoWatched[i].checked){
            if(rdoWatched[i].id == "all-movie"){
                for(let ele =0 ;ele<datalist.childElementCount;ele++)
                    datalist.children[ele].textContent="";
                showAllMovies();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    if(!(txtNameFile[ele].classList.contains("disappear-element"))){
                        datalist.children[ele].textContent = txtNameFile[ele].children[1].textContent;
                    }
                }
            }
            else if(rdoWatched[i].id == "is-watched"){
               for(let ele =0 ;ele<datalist.childElementCount;ele++)
                    datalist.children[ele].textContent="";
                showMoviesWatched();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    
                    if(!(txtNameFile[ele].classList.contains("disappear-element"))){
                        datalist.children[ele].textContent = txtNameFile[ele].children[1].textContent;
                    }
                }
            }
            else if(rdoWatched[i].id == "is-not-watched"){
                for(let ele =0 ;ele<datalist.childElementCount;ele++)datalist.children[ele].textContent="";
                showMoviesNotWatched();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    
                    if(!(txtNameFile[ele].classList.contains("disappear-element"))){
                        datalist.children[ele].textContent = txtNameFile[ele].children[1].textContent;
                    }
                }
            }
        }
    }
}
// اعطاء لكل راديو بوتن حدث عندما يحدث تغير
for(let i of rdoWatched){
    i.addEventListener("change",checkForWatchedMovies,false);
}
//===================================================================================================
/*
    // جعل التعديل على الكتابة ممكن فى وصف الفيلم
    for(let grid of whatAbout1){
        grid.setAttribute("contenteditable","true");
    }
*/
//===================================================================================================
// start animation with open menu bar menuBar
let elementWidth = 0;
let elementWidth2 = 0;
const stepElementWidth =3; 
const maxWidth = 50;
const minWidth = 0;
let appearMenu;
let disappearMenu;
let appearMenuSearch;
let disappearMenuSearch;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// اظهار القيمة الاولى {
function appearMenuFun(){
    disappearMenuSearchFun();
    imgOpenMenu.classList.add(["disappear-element"]);
    if(elementWidth < maxWidth){
        menuBar2.style.width = elementWidth +"%";
        elementWidth += stepElementWidth;
    }else{
        clearInterval(appearMenu);
        imgCloseMenu.classList.remove(["disappear-element"]);
        document.querySelector("#h1-title-menu1").classList.remove("hide-element");
    }
}
imgOpenMenu.addEventListener("click",function(){
    appearMenu = setInterval(appearMenuFun,.5); 
});
// } الانتهاء
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// اخفاء القيمة الاولى {
function disappearMenuFun(){
    imgCloseMenu.classList.add(["disappear-element"]);
    document.querySelector("#h1-title-menu1").classList.add("hide-element");
    if(elementWidth >= minWidth){
        menuBar2.style.width = elementWidth +"%";
        elementWidth -= stepElementWidth;
    }else{
        clearInterval(disappearMenu);
        imgOpenMenu.classList.remove(["disappear-element"]);
    }
}
//
imgCloseMenu.addEventListener("click",function(){  
    disappearMenu = setInterval(disappearMenuFun,.5);
});
// } انتهاء
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// menu 3 (search) اظهار {
function appearMenuSearchFun(){
    disappearMenuFun();
    imgSearch.classList.add(["disappear-element"]);
    rdoWatchedContinal.classList.add("rdo-watched-continal");
    if(elementWidth2 < maxWidth){
        menuBar3.style.width = elementWidth2 +"%";
        elementWidth2 += stepElementWidth;
    }else{
        clearInterval(appearMenuSearch);
        imgCloseMenuSearch.classList.remove(["disappear-element"]);
        document.querySelector("#h1-title-menu2").classList.remove("hide-element");
        for(let rdo of document.querySelectorAll(".rdo-watched")){
            rdo.classList.remove("disappear-element");
            rdo.previousElementSibling.classList.remove("disappear-element");
        }
        
    }
}
imgSearch.addEventListener("click",function(){
    appearMenuSearch = setInterval(appearMenuSearchFun,.5); 
});
// } الانتهاء
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// اخفاء القيمة الثالثة{ 
function disappearMenuSearchFun(){
    imgCloseMenuSearch.classList.add(["disappear-element"]);
    document.querySelector("#h1-title-menu2").classList.add("hide-element");
    for(let rdo of document.querySelectorAll(".rdo-watched")){
        rdo.classList.add("disappear-element");
        rdo.previousElementSibling.classList.add("disappear-element");
    }
    if(elementWidth2 >= minWidth){
        menuBar3.style.width = elementWidth2 +"%";
        elementWidth2 -= stepElementWidth;
    }else{
        clearInterval(disappearMenuSearch);
        imgSearch.classList.remove(["disappear-element"]);
    }
    rdoWatchedContinal.classList.remove("rdo-watched-continal");
}   
//
imgCloseMenuSearch.addEventListener("click",function(){  
    disappearMenuSearch = setInterval(disappearMenuSearchFun,.5);
});
// } الانتهاء
// end animation with open menu bar menuBar
//===================================================================================================
//جعل جميع الاتشيك بوكس تفاعلية مع الضغط عليها {
for(let i = 0;i<watchedBox1.length;i++){
    watchedBox1[i].children[0].addEventListener("change",()=>{
        if(watchedBox1[i].children[0].checked) watchedBox1[i].children[0].checked = true;
        else watchedBox1[i].children[0].checked = false;
    });
}
// } end
//===================================================================================================
// دالة تشغيل الدارك مود {
function darkModeON(){
    isDarkMode = true;
    document.body.style.backgroundColor = "#333";
    for(let wa of document.querySelectorAll(".whatAbout")){
        wa.classList.remove(["whatAbout-in-dark-mode-off"]);
        wa.classList.add(["whatAbout-in-dark-mode-on"]);
    }
    for(let a of  document.querySelectorAll(".filmName")){
        a.children[1].classList.remove(["a-in-dark-mode-off"]);
        a.children[1].classList.add(["a-in-dark-mode-on"]);
    }
    for(let wtitle of wTitle1){
        wtitle.classList.remove(["wTitle-in-dark-mode-off"]);
        wtitle.classList.add(["wTitle-in-dark-mode-on"]);
    }
    for(let title of classTitle){
        title.classList.remove(["title-in-dark-mode-off"]);
        title.classList.add(["title-in-dark-mode-on"]);
    }
    for(let lbl of allLbl){
        lbl.classList.remove(["lbl-dark-mode-off"]);
        lbl.classList.add(["lbl-dark-mode-on"]);
    }
    for(let grid of allgrid){
        grid.classList.remove("grid-in-dark-mode-off");
        grid.classList.add("grid-in-dark-mode-on");
    }
    for(let info of informationFilm){
        info.classList.remove("info-film-dark-mode-off");
        info.classList.add("info-film-dark-mode-on");
    }
    informationFilmForm.classList.remove("information-film-form-dark-mode-off");
    informationFilmForm.classList.add("information-film-form-dark-mode-on");
}
// دالة ايقاف الدارك مود
function darkModeOFF(){
    isDarkMode = false;
    document.body.style.backgroundColor = "transparent";
    for(let wa of document.querySelectorAll(".whatAbout")){
        wa.classList.remove(["whatAbout-in-dark-mode-on"]);
        wa.classList.add(["whatAbout-in-dark-mode-off"]);
    }
    for(let a of document.querySelectorAll(".filmName")){
        a.children[1].classList.remove(["a-in-dark-mode-on"]);
        a.children[1].classList.add(["a-in-dark-mode-off"]);
    }
    for(let wtitle of wTitle1){
        wtitle.classList.add(["wTitle-in-dark-mode-off"]);
        wtitle.classList.remove(["wTitle-in-dark-mode-on"]);
    }
    for(let title of classTitle){
        title.classList.add(["title-in-dark-mode-off"]);
        title.classList.remove(["title-in-dark-mode-on"]);
    }
    for(let lbl of allLbl){
        lbl.classList.remove(["lbl-dark-mode-on"]);
        lbl.classList.add(["lbl-dark-mode-off"]);
    }
    for(let grid of allgrid){
        grid.classList.remove("grid-in-dark-mode-on");
        grid.classList.add("grid-in-dark-mode-off");
    }
    for(let info of informationFilm){
        info.classList.remove("info-film-dark-mode-on");
        info.classList.add("info-film-dark-mode-off");
    }
    informationFilmForm.classList.remove("information-film-form-dark-mode-on");
    informationFilmForm.classList.add("information-film-form-dark-mode-off");
}

// زرار الدارك مود
darkModeOff.addEventListener("click",function(){
    this.classList.add("disappear-element");
    darkModeOn.classList.remove("disappear-element");
    darkModeStick.classList.remove("dark-mode-stick-off");
    darkModeStick.classList.add("dark-mode-stick-on");
    darkModeStick.textContent = "ON";
    darkModeON();
});
darkModeOn.addEventListener("click",function(){
    this.classList.add("disappear-element");
    darkModeOff.classList.remove("disappear-element");
    darkModeStick.classList.remove("dark-mode-stick-on");
    darkModeStick.classList.add("dark-mode-stick-off");
    darkModeStick.textContent = "OFF";
    darkModeOFF();
});
// } END
//===================================================================================================
// دالة لاظهار او اخفاء القائمة داخل زرار السيتنج
function showSettingmenu(){
    if(darkMode.classList.contains("disappear-element"))
        darkMode.classList.remove("disappear-element");
    else
        darkMode.classList.add("disappear-element");   
}   
btnSettingMenu.addEventListener("click",showSettingmenu);
//===================================================================================================
/*
//
function showHideHeader(){
    setTimeout(function(){ header.style.position = "relative";allgrid[0].style.marginTop = "0px";},5000);
    header.style.position = "fixed";
    header.style.top = "0px";
    allgrid[0].style.marginTop = "60px";
}
window.onscroll = showHideHeader;
*/
//===================================================================================================
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

    if(thisElement == document.querySelectorAll(".info-film").length-1) document.querySelector(".info-btn-next").classList.add("hide-element");
    else if(thisElement <= 0) document.querySelector(".info-btn-back").classList.add("hide-element");

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
    if(event.key == "Escape" || event.target.classList.contains("btn-form-information-close")){
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
informationFilmForm.addEventListener("touchstart",(event)=>{
    oldClientX = event.changedTouches[0].clientX;
});

informationFilmForm.addEventListener("touchend",(event)=>{
    if(isEdit == false){
        if(informationFilmForm.classList.contains("disappear-element")) return;
    if(event.changedTouches[0].clientX < oldClientX-20){
        if(thisElement == document.querySelectorAll(".info-film").length-1) {
            document.querySelector(".info-btn-next").classList.add("hide-element");
            return;
        }
        document.querySelector(".info-btn-back").classList.remove("hide-element");
        thisElement++;
        
        
    }else if(event.changedTouches[0].clientX > oldClientX+20){
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
function btnEdit(){
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
        ratingFilm[thisElement].textContent     = infoFilmRating.textContent;
        yearFilmNumber[thisElement].textContent = infoFilmYear.textContent;
        timeFilm[thisElement].textContent       = infoFilmTime.textContent;
        ditectorMovie[thisElement].textContent  = infoFilmDirector.textContent;

        whatAbout1[thisElement].textContent     = infoFilmDescription.textContent;
}

infoBtnUpdate.addEventListener("click",updateDataFromInfo);
//===================================================================================================

//===================================================================================================

//===================================================================================================

//===================================================================================================

