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
const side                  = document.querySelector(".side")
const side2                 = document.querySelector(".side2")
const isWatched             = document.querySelector("#is-checked");
const txtArea               = document.querySelector("#txt-area");
let textOfRow               = "";
function addMovie(){
    
    for(let a=0;a<classTitle.length;a++){
        if (classTitle[a].textContent.trim() == moviekind.value){
            if((moviePath.value != "" &&  movieName.value != "" && movieDescription.value != "")){
                const filmName = document.createElement("div");
                const whatAbout = document.createElement("div");
                const watchedBox = document.createElement("div");
                
                filmName.setAttribute("class","filmName");
                filmName.setAttribute("contenteditable","false");
                // اضافة خاصية الكلاس للديف الثانى
                whatAbout.setAttribute("class","whatAbout");    
                // اضافة اسم الفيلم للديف الثانى من مربع النص
                whatAbout.innerText =  movieDescription.value;
                // اضافة خاصية الكلاس للديف الثالث
                watchedBox.setAttribute("class","watchedBox");
                //
                var cbx = document.createElement("input");
                cbx.setAttribute("type","checkbox");
                if(isWatched.checked) cbx.setAttribute("checked","true");
                watchedBox.append(cbx);

                // اضافة الثلاث دفات فى الدف الاب
                classTitle[a].parentElement.append(filmName);
                classTitle[a].parentElement.append(whatAbout);
                classTitle[a].parentElement.append(watchedBox);
                // انشاء فى الدف الاول عنصر الصورة و عنصر اللينك
                var fImage = document.createElement("img");
                var ahref = document.createElement("a");

                // اضافة خصائص الى العناصر
                fImage.setAttribute("class","fImage");
                if(imgPath.value.trim()>0)
                    fImage.setAttribute("src",imgPath.value);
                else
                    fImage.setAttribute("src","https://place-hold.it/30x30");
                ahref.setAttribute("href",moviePath.value);
                ahref.innerText = movieName.value;
                // اضافى العناصر الصورة و اللينك الى الديف الاول
                filmName.append(fImage);
                filmName.append(ahref);
                //
                textOfRow = `<div class="filmName" contenteditable="false"><img class="fImage" src="${imgPath.value}" alt="">       <a href="${moviePath.value}">               ${movieName.value}</a></div>              <div class="whatAbout">${movieDescription.value}</div>                       <div class="watchedBox"><input type="checkbox" name="watched" ${isWatched.checked?"checked":""}  value="watched"></div>`;
                txtArea.textContent += textOfRow +"\n=======================================================================================\n";
                
                
                /*
                let ta = document.querySelector("#txt-area3");
                ta.textContent = document.children[0].innerHTML;
                ta.classList.remove(["txt-area2"]);
                ta.select();
                document.execCommand('copy');
                ta.classList.add(["txt-area2"]);
                */
                //txtArea.textContent = document.children[0].innerHTML;  // نسخ الصفحة الرئسية فى التكست اريا
                
                // تفريغ البيانات من مربعات النص
                clearText();
                returnPage();
            }
        }
    }
}
function showHtml(){
    txtArea.classList.toggle("txt-area2");
    
}


function clearText(){
    imgPath.value ="";
    moviePath.value ="";
    movieName.value="";
    movieDescription.value="";
    isWatched.checked = false;
}
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
window.addEventListener("load",addFilmNameToSearch,false);
function addFilmNameToSearch(){
    const df = document.createDocumentFragment();
    for(let namefile of txtNameFile){
        let option = document.createElement("option");
        option.textContent = namefile.textContent;
        df.append(option);
    }
    datalist.append(df);
}

function showAllMovies(){
    for(let i = 0;i<txtNameFile.length;i++){
        txtNameFile[i].classList.remove(["txt-area2"]);
        whatAbout1[i].classList.remove(["txt-area2"]);
        watchedBox1[i].classList.remove(["txt-area2"]);
    }
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.remove(["txt-area2"]);
        classTitle[i].classList.remove(["txt-area2"]);
        classTitle[i].nextElementSibling.classList.remove(["txt-area2"]);
        wTitle1[i].parentElement.style.borderBottom = "black solid 1px";
    }
}
function showMoviesNotWatched(){
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.add(["txt-area2"]);
        classTitle[i].classList.add(["txt-area2"]);
        classTitle[i].nextElementSibling.classList.add(["txt-area2"]);
        wTitle1[i].parentElement.style.borderBottom = "none";
    }
    for(let i = 0;i<txtNameFile.length;i++){
        if(!watchedBox1[i].children[0].checked){
            txtNameFile[i].classList.remove(["txt-area2"]);
            whatAbout1[i].classList.remove(["txt-area2"]);
            watchedBox1[i].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.children[0].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.children[1].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.children[2].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.style.borderBottom = "black solid 1px";
        }else{
            txtNameFile[i].classList.add(["txt-area2"]);
            whatAbout1[i].classList.add(["txt-area2"]);
            watchedBox1[i].classList.add(["txt-area2"]);
        }
    }
}
function showMoviesWatched(){
    for(let i = 0;i < wTitle1.length;i++){
        wTitle1[i].classList.add(["txt-area2"]);
        classTitle[i].classList.add(["txt-area2"]);
        classTitle[i].nextElementSibling.classList.add(["txt-area2"]);
        wTitle1[i].parentElement.style.borderBottom = "none";
    }
    for(let i = 0;i<txtNameFile.length;i++){
        if(!watchedBox1[i].children[0].checked == false){
            txtNameFile[i].classList.remove(["txt-area2"]);
            whatAbout1[i].classList.remove(["txt-area2"]);
            watchedBox1[i].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.children[0].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.children[1].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.children[2].classList.remove(["txt-area2"]);
            watchedBox1[i].parentElement.style.borderBottom = "black solid 1px";
        }else{
            txtNameFile[i].classList.add(["txt-area2"]);
            whatAbout1[i].classList.add(["txt-area2"]);
            watchedBox1[i].classList.add(["txt-area2"]);
        }
    }
}



function searchFilm(){
        if(movieSearch.value.length > 0){
            for(let i = 0;i < wTitle1.length;i++){
                wTitle1[i].classList.add(["txt-area2"]);
                classTitle[i].classList.add(["txt-area2"]);
                classTitle[i].nextElementSibling.classList.add(["txt-area2"]);
                wTitle1[i].parentElement.style.borderBottom = "none";
            }
            for(let i = 0;i<txtNameFile.length;i++){
                if(txtNameFile[i].textContent.trim() == movieSearch.value ){
                    txtNameFile[i].classList.remove(["txt-area2"]);
                    whatAbout1[i].classList.remove(["txt-area2"]);
                    watchedBox1[i].classList.remove(["txt-area2"]);
                    
                    //console.log(txtNameFile[i].parentElement);
                }else{
                    txtNameFile[i].classList.add(["txt-area2"]);
                    whatAbout1[i].classList.add(["txt-area2"]);
                    watchedBox1[i].classList.add(["txt-area2"]);
                }
            }

        }else{
            /*for(let i = 0;i<txtNameFile.length;i++){
                txtNameFile[i].classList.remove(["txt-area2"]);
                whatAbout1[i].classList.remove(["txt-area2"]);
                watchedBox1[i].classList.remove(["txt-area2"]);
            }
            for(let i = 0;i < wTitle1.length;i++){
                wTitle1[i].classList.remove(["txt-area2"]);
                classTitle[i].classList.remove(["txt-area2"]);
                classTitle[i].nextElementSibling.classList.remove(["txt-area2"]);
                wTitle1[i].parentElement.style.borderBottom = "black solid 1px";
            }*/
            checkForWatchedMovies();
        }
}
movieSearch.addEventListener("change",searchFilm,false);
movieSearch.addEventListener("keydown",searchFilm,false);


function checkForWatchedMovies(){
    for(let i = 0 ;i<rdoWatched.length;i++){
        if (rdoWatched[i].checked){
            if(rdoWatched[i].id == "all-movie"){
                for(let ele =0 ;ele<datalist.childElementCount;ele++)datalist.children[ele].textContent="";
                showAllMovies();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    if((txtNameFile[ele].classList.value.indexOf("txt-area2")< 0)){
                        datalist.children[ele].textContent = txtNameFile[ele].textContent
                    }
                }
            }
            else if(rdoWatched[i].id == "is-watched"){
               for(let ele =0 ;ele<datalist.childElementCount;ele++)datalist.children[ele].textContent="";
                showMoviesWatched();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    
                    if((txtNameFile[ele].classList.value.indexOf("txt-area2")< 0)){
                        datalist.children[ele].textContent = txtNameFile[ele].textContent
                    }
                }
            }
            else if(rdoWatched[i].id == "is-not-watched"){
                for(let ele =0 ;ele<datalist.childElementCount;ele++)datalist.children[ele].textContent="";
                showMoviesNotWatched();
                for(let ele =0 ;ele<datalist.childElementCount;ele++){
                    
                    if((txtNameFile[ele].classList.value.indexOf("txt-area2")< 0)){
                        datalist.children[ele].textContent = txtNameFile[ele].textContent
                    }
                }
            }
        }
    }
}
for(let i of rdoWatched){
    i.addEventListener("change",checkForWatchedMovies,false);
}
function returnPage(){
    watchedContinar.classList.remove(["txt-area2"]);
    side.classList.remove(["txt-area2"]);
    for(let grid of allgrid){
        grid.classList.remove(["txt-area2"]);
    }
    addGrid.style.display = "none";

}
btnAdd.addEventListener("click",function(){
    watchedContinar.classList.add("txt-area2");
    side.classList.add(["txt-area2"]);
    for(let grid of allgrid){
        grid.classList.add("txt-area2");
    }
    addGrid.style.display = "grid";

});

btnClose.addEventListener("click",function(){returnPage();});
window.addEventListener("keydown",function(event){if(event.key == "Escape" && addGrid.style.display == "grid")returnPage();});

side.children[0].addEventListener("click",function(){this.classList.add(["txt-area2"]);document.querySelector(".side2").style.display = "block";});
side2.children[0].addEventListener("click",function(){side.children[0].classList.remove(["txt-area2"]);document.querySelector(".side2").style.display = "none";});

//جعل جميع الاتشيك بوكس تفاعلية مع الضغط عليها
for(let i = 0;i<watchedBox1.length;i++){
    watchedBox1[i].children[0].addEventListener("change",()=>{
        if(watchedBox1[i].children[0].checked) watchedBox1[i].children[0].checked = true;
        else watchedBox1[i].children[0].checked = false;
    });
}
for(let w of whatAbout1 ){
        w.setAttribute("contenteditable","true");
    }
/** 
 * notWatched.addEventListener("change",function(){
    if(notWatched.checked){
        movieSearch.value = "";
        for(let i = 0;i < wTitle1.length;i++){
            wTitle1[i].classList.add(["txt-area2"]);
            classTitle[i].classList.add(["txt-area2"]);
            classTitle[i].nextElementSibling.classList.add(["txt-area2"]);
            wTitle1[i].parentElement.style.borderBottom = "none";
        }
        for(let i = 0;i<txtNameFile.length;i++){
            if(!watchedBox1[i].children[0].checked){
                txtNameFile[i].classList.remove(["txt-area2"]);
                whatAbout1[i].classList.remove(["txt-area2"]);
                watchedBox1[i].classList.remove(["txt-area2"]);
                watchedBox1[i].parentElement.children[0].classList.remove(["txt-area2"]);
                watchedBox1[i].parentElement.children[1].classList.remove(["txt-area2"]);
                watchedBox1[i].parentElement.children[2].classList.remove(["txt-area2"]);
                watchedBox1[i].parentElement.style.borderBottom = "black solid 1px";
            }else{
                txtNameFile[i].classList.add(["txt-area2"]);
                whatAbout1[i].classList.add(["txt-area2"]);
                watchedBox1[i].classList.add(["txt-area2"]);
            }
        }
    }
    else{
        for(let i = 0;i<txtNameFile.length;i++){
            txtNameFile[i].classList.remove(["txt-area2"]);
            whatAbout1[i].classList.remove(["txt-area2"]);
            watchedBox1[i].classList.remove(["txt-area2"]);
        }
        for(let i = 0;i < wTitle1.length;i++){
            wTitle1[i].classList.remove(["txt-area2"]);
            classTitle[i].classList.remove(["txt-area2"]);
            classTitle[i].nextElementSibling.classList.remove(["txt-area2"]);
            wTitle1[i].parentElement.style.borderBottom = "black solid 1px";
        }
    }
})
 * 
 * 
 * 
 * 
 */


/*  عمل ملف وحفظة
    // Function to download data to a file
    function download(data, filename, type) {
        var file = new Blob([data], {type: type});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                    url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 
        }
    }
*/

/* read file
document.querySelector("#file-save").addEventListener("change",function(){
    const fr=new FileReader();
    fr.onload=function(){ 
        console.log(fr.result); 
} 
    fr.readAsText(this.files[0]); 
});
*/
// const file = new File([0],"kirollos");


/*
    var allImage = document.getElementsByTagName("a");
    function checkImage(){
        for(i=0;i<allImage.length;i++){
            if (allImage[i].getAttribute("href") == "" || !(allImage[i].hasAttribute("href"))){
                var parentOf = allImage[i].parentElement;
                parentOf.style.display = "none";
                parentOf.nextElementSibling.style.display = "none";
                parentOf.style.borderBottom = "none";
                parentOf.nextElementSibling.style.borderBottom = "none";
                parentOf.nextElementSibling.style.borderBottom = "none";
                parentOf.nextElementSibling.nextElementSibling.style.display= "none";  
            }

        }
    }
onload = checkImage();

function editable(){
   var s = document.getElementsByClassName("grid");
   for(i=0;i<s.length;i++){
    s[i].setAttribute("contenteditable","false");
   }   
   alert("تم اغلاق التعديل على الكتابة");
}

function notEditable(){
   var s = document.getElementsByClassName("grid");
   for(i=0;i<s.length;i++){
    s[i].setAttribute("contenteditable","true");
   }   
   alert("يمكنك التعديل الان على الكتابة");
}

*/



