// اضافة المتغيرات للمشروع
const header                = document.querySelector("header");
const imgPath               = document.getElementById("imgPath");                     // 
const moviePath             = document.getElementById("moviePath");                   //    
const movieName             = document.getElementById("movieName");
const movieDescription      = document.getElementById("movieDescription");
const moviekind             = document.getElementById("moviekind");
const classTitle            = document.querySelectorAll(".title");
const txtNameFile           = document.querySelectorAll(".filmName");
const datalist              = document.querySelector("#film-name");
const movieSearch           = document.querySelector("#movie-search");
const allgrid               = document.querySelectorAll(".grid");
const wTitle1               = document.querySelectorAll(".wTitle");
const whatAbout1            = document.querySelectorAll(".whatAbout");
const watchedBox1           = document.querySelectorAll(".watchedBox");
const notWatched            = document.querySelector("#not-watched");
const watchedContinar       = document.querySelector(".watched-continar")
const rdoWatched            = document.querySelectorAll(".rdo-watched");
const addGrid               = document.querySelector(".gridAdd");
const btnAdd                = document.querySelector(".btn-add");
const btnClose              = document.querySelector(".btn-close");
const menuBar               = document.querySelector(".main-menu-bar");
const menuBar2              = document.querySelector(".menu-bar-open1");
const menuBar3              = document.querySelector(".menu-bar-open2");
const darkModeOff           = document.querySelector("#dark-mode-off");
const darkModeOn            = document.querySelector("#dark-mode-on");
const darkModeStick         = document.querySelector("#dark-mode-stick");
const imgOpenMenu           = document.querySelector(".img-open-menu");
const imgCloseMenu          = document.querySelector(".img-close-menu");
const imgSearch             = document.querySelector(".img-search");
const imgCloseMenuSearch    = document.querySelector(".img-close-menu-search");
const isWatched             = document.querySelector("#is-checked");
const txtArea               = document.querySelector("#txt-area");
let   isDarkMode            = false;
let textOfRow               = "";





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
//============================================================
// دالة اظهار فروم الاضافة
btnAdd.addEventListener("click",function(){
    this.classList.add(["disappear-element"]);
    header.classList.add("disappear-element");
    watchedContinar.classList.add("disappear-element");
    menuBar.classList.add(["disappear-element"]);
    for(let grid of allgrid){
        grid.classList.add("disappear-element");
    }
    addGrid.classList.remove("disappear-element");
    addGrid.classList.add("grid-add-appear");
});

btnClose.addEventListener("click",function(){returnPage();});
window.addEventListener("keydown",function(event){if(event.key == "Escape" && addGrid.style.display == "grid")returnPage();});
//============================================================
// دالة اخفاء فورم الاضافة
function returnPage(){
    watchedContinar.classList.remove(["disappear-element"]);
    header.classList.remove("disappear-element");
    menuBar.classList.remove(["disappear-element"]);
    btnAdd.classList.remove(["disappear-element"]);
    for(let grid of allgrid){
        grid.classList.remove(["disappear-element"]);
    }
    addGrid.classList.add("disappear-element");
    addGrid.classList.remove("grid-add-appear");
}
//============================================================
// دالة تفريغ العناصر فى فورم الاضافة
function clearText(){
    imgPath.value ="";
    moviePath.value ="";
    movieName.value="";
    movieDescription.value="";
    isWatched.checked = false;
}
//============================================================
// دالة اضافة فيلم جديد
function addMovie(){
    for(let i=0;i<classTitle.length;i++){
        if (classTitle[i].textContent.trim() == moviekind.value){
            if((moviePath.value != "" &&  movieName.value != "" && movieDescription.value != "")){
                const filmName = document.createElement("div");
                const whatAbout = document.createElement("div");
                const watchedBox = document.createElement("div");
                
                filmName.setAttribute("class","filmName");
                filmName.setAttribute("contenteditable","false");
                // اضافة خاصية الكلاس للديف الثانى
                whatAbout.setAttribute("lang","ar");
                whatAbout.classList.add("whatAbout",isDarkMode?"whatAbout-in-dark-mode-on":"whatAbout-in-dark-mode-off");
                // اضافة اسم الفيلم للديف الثانى من مربع النص
                whatAbout.textContent =  movieDescription.value;
                // اضافة خاصية الكلاس للديف الثالث
                watchedBox.setAttribute("class","watchedBox");
                //
                const cbx = document.createElement("input");
                cbx.setAttribute("type","checkbox");
                if(isWatched.checked) cbx.setAttribute("checked","true");
                watchedBox.append(cbx);

                // اضافة الثلاث دفات فى الدف الاب
                classTitle[i].parentElement.append(filmName);
                classTitle[i].parentElement.append(whatAbout);
                classTitle[i].parentElement.append(watchedBox);
                // انشاء فى الدف الاول عنصر الصورة و عنصر اللينك
                const fImage = document.createElement("img");
                const ahref = document.createElement("a");
                
                // اضافة خصائص الى العناصر
                fImage.setAttribute("class","fImage");
                if(imgPath.value.trim().startsWith("https://"))
                    fImage.setAttribute("src",imgPath.value);
                else
                    fImage.setAttribute("src","https://place-hold.it/100x100");
                ahref.setAttribute("href",moviePath.value);
                ahref.classList.add("link-film",isDarkMode?"a-in-dark-mode-on":"a-in-dark-mode-off");
                ahref.textContent = movieName.value;
                // اضافى العناصر الصورة و اللينك الى الديف الاول
                filmName.append(fImage);
                filmName.append(ahref);
                //
                //`<div class="filmName" contenteditable="false"><img class="fImage" src="${imgPath.value}" alt="">       <a href="${moviePath.value}">               ${movieName.value}</a></div>              <div class="whatAbout">${movieDescription.value}</div>                       <div class="watchedBox"><input type="checkbox" name="watched" ${isWatched.checked?"checked":""}  value="watched"></div>`;
                textOfRow =`<div class="filmName" ><img class="fImage" src="${imgPath.value}" alt="${movieName.value}">       <a class="link-film a-in-dark-mode-off" href="${moviePath.value}">                ${movieName.value}</a></div>              <div lang="ar" class="whatAbout whatAbout-in-dark-mode-off">${movieDescription.value}</div>                       <div class="watchedBox"><input type="checkbox" name="watched" ${isWatched.checked?"checked":""}  value="watched"></div>`; 
                txtArea.textContent += textOfRow +"\n=======================================================================================\n";
                // تفريغ البيانات من مربعات النص
                clearText();
                returnPage();
            }
        }
    }
}
//============================================================
// دالة اظهار واخفاء التكست اريا الخاص بظهور الكود للاضافى الجديدة
function showHtml(){
    txtArea.classList.toggle("disappear-element");
}
//============================================================
// دالة اضافة اسماء جميع الافلام الى مربع البحث وعملها عند تحميل الصفحة
function addFilmNameToSearch(){
    const df = document.createDocumentFragment();
    for(let namefile of txtNameFile){
        let option = document.createElement("option");
        option.textContent = namefile.textContent;
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
            if(txtNameFile[i].textContent.trim() == movieSearch.value ){
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
    }
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.remove(["disappear-element"]);
        classTitle[i].classList.remove(["disappear-element"]);
        classTitle[i].nextElementSibling.classList.remove(["disappear-element"]);
        wTitle1[i].parentElement.style.borderBottom = "black solid 1px";
    }
}
//============================================================
// دالة اظهار الافلام التى لم تشاهد
function showMoviesNotWatched(){
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.add(["disappear-element"]);
        classTitle[i].classList.add(["disappear-element"]);
        classTitle[i].nextElementSibling.classList.add(["disappear-element"]);
        wTitle1[i].parentElement.style.borderBottom = "none";
    }
    for(let i = 0;i<txtNameFile.length;i++){
        if(!watchedBox1[i].children[0].checked){
            txtNameFile[i].classList.remove(["disappear-element"]);
            whatAbout1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[0].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[1].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[2].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.style.borderBottom = "black solid 1px";
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
        wTitle1[i].parentElement.style.borderBottom = "none";
    }
    for(let i = 0;i<txtNameFile.length;i++){
        if(!watchedBox1[i].children[0].checked == false){
            txtNameFile[i].classList.remove(["disappear-element"]);
            whatAbout1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[0].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[1].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.children[2].classList.remove(["disappear-element"]);
            watchedBox1[i].parentElement.style.borderBottom = "black solid 1px";
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
                for(let ele =0 ;ele<datalist.childElementCount;ele++)datalist.children[ele].textContent="";
                showAllMovies();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    if((txtNameFile[ele].classList.value.indexOf("disappear-element")< 0)){
                        datalist.children[ele].textContent = txtNameFile[ele].textContent
                    }
                }
            }
            else if(rdoWatched[i].id == "is-watched"){
               for(let ele =0 ;ele<datalist.childElementCount;ele++)datalist.children[ele].textContent="";
                showMoviesWatched();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    
                    if((txtNameFile[ele].classList.value.indexOf("disappear-element")< 0)){
                        datalist.children[ele].textContent = txtNameFile[ele].textContent
                    }
                }
            }
            else if(rdoWatched[i].id == "is-not-watched"){
                for(let ele =0 ;ele<datalist.childElementCount;ele++)datalist.children[ele].textContent="";
                showMoviesNotWatched();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    
                    if((txtNameFile[ele].classList.value.indexOf("disappear-element")< 0)){
                        datalist.children[ele].textContent = txtNameFile[ele].textContent
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
// جعل التعديل على الكتابة ممكن فى وصف الفيلم
for(let grid of whatAbout1){
    grid.setAttribute("contenteditable","true");
}
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


//
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
//
imgOpenMenu.addEventListener("click",function(){
    appearMenu = setInterval(appearMenuFun,.5); 
});
//
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
//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// menu 3 (search)
function appearMenuSearchFun(){
    disappearMenuFun();
    imgSearch.classList.add(["disappear-element"]);
    if(elementWidth2 < maxWidth){
        menuBar3.style.width = elementWidth2 +"%";
        elementWidth2 += stepElementWidth;
    }else{
        clearInterval(appearMenuSearch);
        imgCloseMenuSearch.classList.remove(["disappear-element"]);
        document.querySelector("#h1-title-menu2").classList.remove("hide-element");
    }
}
//
imgSearch.addEventListener("click",function(){
    appearMenuSearch = setInterval(appearMenuSearchFun,.5); 
});
//
function disappearMenuSearchFun(){
    imgCloseMenuSearch.classList.add(["disappear-element"]);
    document.querySelector("#h1-title-menu2").classList.add("hide-element");
    if(elementWidth2 >= minWidth){
        menuBar3.style.width = elementWidth2 +"%";
        elementWidth2 -= stepElementWidth;
    }else{
        clearInterval(disappearMenuSearch);
        imgSearch.classList.remove(["disappear-element"]);
    }
}
//
imgCloseMenuSearch.addEventListener("click",function(){  
    disappearMenuSearch = setInterval(disappearMenuSearchFun,.5);
});

// end animation with open menu bar menuBar
//===================================================================================================
//جعل جميع الاتشيك بوكس تفاعلية مع الضغط عليها
for(let i = 0;i<watchedBox1.length;i++){
    watchedBox1[i].children[0].addEventListener("change",()=>{
        if(watchedBox1[i].children[0].checked) watchedBox1[i].children[0].checked = true;
        else watchedBox1[i].children[0].checked = false;
    });
}
// end
//===================================================================================================
// دالة تشغيل الدارك مود
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
    for(let lbl of document.querySelectorAll("label")){
        lbl.style.color= "#ddd";
    }
    for(let grid of allgrid){
        grid.classList.remove("grid-in-dark-mode-off");
        grid.classList.add("grid-in-dark-mode-on");
    }
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
    for(let lbl of document.querySelectorAll("label")){
        lbl.style.color= "navy";
    }
    for(let grid of allgrid){
        grid.classList.remove("grid-in-dark-mode-on");
        grid.classList.add("grid-in-dark-mode-off");
    }
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
