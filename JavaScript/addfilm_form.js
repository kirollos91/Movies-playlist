//============================================================
// دالة اظهار فروم الاضافة من زرار الاضافة
function showFormAddMovie(){
    this.classList.add(["disappear-element"]);
    header.classList.add("disappear-element");
    watchedContinar.classList.add("disappear-element");
    menuBar.classList.add(["disappear-element"]);
    for(let grid of allgrid){
        grid.classList.add("disappear-element");
    }
    addGrid.classList.remove("disappear-element");
    addGrid.classList.add("grid-add-appear");
    btnGoTop.classList.add("hide-element");
}
btnAdd.addEventListener("click",showFormAddMovie);
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
    btnGoTop.classList.remove("hide-element");
}
btnClose.addEventListener("click",returnPage);
window.addEventListener("keydown",function(event){
    if(event.key == "Escape" && !(addGrid.classList.contains("disappear-element"))){
        returnPage();
    }
});
//============================================================
// دالة تفريغ العناصر فى فورم الاضافة
function clearText(){
    imgPath.value ="";
    moviePath.value ="";
    movieName.value="";
    movieDescription.value="";
    filmYear.value = "";
    addActorsName.value ="";
    addFilmsKindVar.value = "";
    ratingMovie.value = "";
    filmTime.value = "";
    directorMovie.value = "";
    isWatched.checked = false;
}
//============================================================
// دالة اضافة فيلم جديد
//let textOfRow = "";
function addMovie(){
    for(let i=0;i<classTitle.length;i++){
        if (classTitle[i].textContent.trim() == moviekind.value){
            if((moviePath.value != "" &&  movieName.value != "" && movieDescription.value != "")){
                //
                const filmName    = document.createElement("div");
                const actors_name = document.createElement("div");
                const films_kind  = document.createElement("div");
                const whatAbout   = document.createElement("div");
                const watchedBox  = document.createElement("div");
                // ضافة كلاسات الديف الاول 
                filmName.classList.add("filmName");
                //
                const year_num = document.createElement("span");
                year_num.classList.add("year-num","disappear-element");
                year_num.textContent = filmYear.value;
                //
                const rating_movie = document.createElement("span");
                rating_movie.classList.add("rating-movie","disappear-element");
                rating_movie.textContent = ratingMovie.value;
                //
                const film_time = document.createElement("span");
                film_time.classList.add("film-time","disappear-element");
                film_time.textContent = filmTime.value;
                //
                const film_director = document.createElement("span");
                film_director.classList.add("director-movie","disappear-element");
                film_director.textContent = directorMovie.value;
                //
                const info_film = document.createElement("span");
                info_film.classList.add("info-film",isDarkMode?"info-film-dark-mode-on":"info-film-dark-mode-off");
                info_film.textContent = "i";
                info_film.addEventListener("click",showInformationFilm);
                //
                actors_name.classList.add("add-actors","disappear-element");
                let stractorn = "";
                for(let actorn of document.querySelectorAll(".add-actors-name-w")){
                    if (actorn.value.trim() !=""){
                        let sp_actor = document.createElement("span");
                        sp_actor.textContent = actorn.value;
                        actors_name.append(sp_actor);    
                        stractorn += `<span>${actorn.value}</span>` 
                    }
                }
                //
                films_kind.classList.add("add-films-kind","disappear-element");
                let strfilmk = "";
                for(let filmk of document.querySelectorAll(".add-kind-w")){
                    if(filmk.value.trim() != ""){
                        let sp_filmk = document.createElement("span");
                        sp_filmk.textContent = filmk.value;
                        films_kind.append(sp_filmk);
                        strfilmk += `<span>${filmk.value}</span>` 
                    }    
                }
                // انشاء فى الدف الاول عنصر الصورة و عنصر اللينك
                const fImage = document.createElement("img");
                const ahref = document.createElement("a");
                
                // اضافة خصائص الى العناصر
                fImage.setAttribute("class","fImage");
                // التحقق من ان بداية مسار الصورة يبدا بكذا
                if(imgPath.value.trim().startsWith("https://"))
                    fImage.setAttribute("src",imgPath.value);
                else
                    fImage.setAttribute("src","https://place-hold.it/100x100");
                // اضافة مسار الفيلم    
                ahref.setAttribute("href",moviePath.value);
                // اضافة الكلاسات للينك
                ahref.classList.add("link-film",isDarkMode?"a-in-dark-mode-on":"a-in-dark-mode-off");
                // اضافة اسم الفيلم    
                ahref.textContent = movieName.value;
                // اضافى العناصر الصورة و اللينك الى الديف الاول
                filmName.append(fImage);
                filmName.append(ahref);
                filmName.append(year_num);
                filmName.append(rating_movie);
                filmName.append(film_time);
                filmName.append(film_director);
                filmName.append(info_film);

                // اضافة خاصية الكلاس للديف الرابع
                whatAbout.setAttribute("lang","ar");
                whatAbout.classList.add("whatAbout",isDarkMode?"whatAbout-in-dark-mode-on":"whatAbout-in-dark-mode-off");
                // اضافة اسم الفيلم للديف الرابع من مربع النص
                whatAbout.textContent =  movieDescription.value;
                // اضافة خاصية الكلاس للديف الخامس
                watchedBox.setAttribute("class","watchedBox");
                // انشاء الانبوت التابع للدف الخامس
                const cbx = document.createElement("input");
                cbx.setAttribute("type","checkbox");
                if(isWatched.checked) cbx.setAttribute("checked","true");
                watchedBox.append(cbx);
                //

                // اضافة الخمس دفات فى الدف الاب
                classTitle[i].parentElement.append(filmName);
                classTitle[i].parentElement.append(actors_name);
                classTitle[i].parentElement.append(films_kind);
                classTitle[i].parentElement.append(whatAbout);
                classTitle[i].parentElement.append(watchedBox);
                //
                const textOfRow =`<div class="filmName" ><img class="fImage" src="${imgPath.value}" alt="${movieName.value}">       <a class="link-film a-in-dark-mode-off" href="${moviePath.value}">                ${movieName.value}</a><span class="year-num disappear-element">${filmYear.value}</span><span class="rating-movie disappear-element">${ratingMovie.value}</span><span class="film-time disappear-element">${filmTime.value}</span><span class="director-movie disappear-element">${directorMovie.value}</span><span class="info-film info-film-dark-mode-off">i</span></div>              <div class="add-actors disappear-element">${stractorn}</div>  <div class="add-films-kind disappear-element">${strfilmk}</div>         <div lang="ar" class="whatAbout whatAbout-in-dark-mode-off">${movieDescription.value}</div>                       <div class="watchedBox"><input type="checkbox" name="watched" ${isWatched.checked?"checked":""}  value="watched"></div>`; 
                txtArea.textContent += textOfRow +"\n=======================================================================================\n";
                // تفريغ البيانات من مربعات النص
                clearText();
                returnTheAddActor();
                returnTheAddKind();
            }
        }
    }
}
// } END
//============================================================
// دالة اظهار واخفاء التكست اريا الخاص بظهور الكود للاضافى الجديدة
function showHtml(){
    txtArea.classList.toggle("disappear-element");
}
//============================================================
//دالة اضافة اسم جديد لممثل داخل الفيلم {
    let counterOfAddActors = 0;
    let counterOfAddMoviesKind = 0;
    
    document.querySelector(".add-actors-name-a").addEventListener("click",addActors);
    
    function addActors(){
    
        let inpActor =  document.createElement("input");    
        inpActor.classList.add("txt","add-anthor","add-actors-name-w");
        inpActor.setAttribute("id","add-actors-name");
        inpActor.setAttribute("type","text");
        
        let divAAR = document.createElement("div");
        divAAR.classList.add("divAAR");
        let spanAdd =  document.createElement("span");
        spanAdd.classList.add("add-anthor-all","add-actors-name-a");
        spanAdd.textContent = "+";
    
        let spanRemove =  document.createElement("span");
        spanRemove.classList.add("remove-anthor-all","remove-actors-name-a");
        spanRemove.textContent = "-";
        
        addGrid.insertBefore(inpActor,document.querySelector(".lbl-add-films-kind"));
        divAAR.appendChild(spanAdd);
        divAAR.appendChild(spanRemove);
        addGrid.insertBefore(divAAR,document.querySelector(".lbl-add-films-kind"));
        spanRemove.addEventListener("click",removeActorsOrRemoveKind);
        /*for(let i = counterOfAddActors+1 ;i< document.querySelectorAll(".add-actors-name-a").length;i++){
            document.querySelectorAll(".add-actors-name-a")[i].addEventListener("click",addActors);
        }*/
        this.removeEventListener("click",addActors);
        document.querySelectorAll(".add-actors-name-a")[counterOfAddActors+1].addEventListener("click",addActors);
        counterOfAddActors++;
        
    }
    // } END
    //+++++++++++++++++++++++++++++++++++++++++++++++++++
    //دالة اضافة نوع جديد للفيلم  {
    document.querySelector(".add-kind-a").addEventListener("click",addFilmsKind);
    function addFilmsKind(){
    
        let inpKind =  document.createElement("input");    
        inpKind.classList.add("txt","add-anthor","add-kind-w");
        inpKind.setAttribute("id","add-films-kind");
        inpKind.setAttribute("type","text");
        
        let divAAR = document.createElement("div");
        divAAR.classList.add("divAAR2");
    
        let spanAddKind =  document.createElement("span");
        spanAddKind.classList.add("add-anthor-all","add-kind-a");
        spanAddKind.textContent = "+";
        
        let spanRemoveKind =  document.createElement("span");
        spanRemoveKind.classList.add("remove-anthor-all","remove-kind-a");
        spanRemoveKind.textContent = "-";
    
    
        addGrid.insertBefore(inpKind,document.querySelector(".lbl-movie-check"));
        divAAR.appendChild(spanAddKind);
        divAAR.appendChild(spanRemoveKind);
        addGrid.insertBefore(divAAR,document.querySelector(".lbl-movie-check"));
        spanRemoveKind.addEventListener("click",removeActorsOrRemoveKind);
        /*for(let i = counterOfAddMoviesKind+1 ;i< document.querySelectorAll(".add-kind-a").length;i++){
            document.querySelectorAll(".add-kind-a")[i].addEventListener("click",addFilmsKind);
        }*/
        this.removeEventListener("click",addFilmsKind);
        document.querySelectorAll(".add-kind-a")[counterOfAddMoviesKind+1].addEventListener("click",addFilmsKind);
        counterOfAddMoviesKind++;
        
    }
    // } END
    /* -------------------------------------------------------------------------------- */
    
    function removeActorsOrRemoveKind(){
        this.previousElementSibling.remove();
        this.parentElement.previousElementSibling.remove();
        let t = this.parentElement;
        t.remove();
        this.remove();
        if(document.querySelectorAll(".add-kind-a").length == 1){
            document.querySelector(".add-kind-a").addEventListener("click",addFilmsKind);
            counterOfAddMoviesKind = 0;
        }else if(t.classList.contains("divAAR2")){
            document.querySelectorAll(".add-kind-a")[document.querySelectorAll(".add-kind-a").length-1].addEventListener("click",addFilmsKind);
            counterOfAddMoviesKind -= 1;
        }
        if(document.querySelectorAll(".add-actors-name-a").length == 1){
            document.querySelector(".add-actors-name-a").addEventListener("click",addActors);
            counterOfAddActors = 0;
        }else if(t.classList.contains("divAAR")){
            document.querySelectorAll(".add-actors-name-a")[document.querySelectorAll(".add-actors-name-a").length-1].addEventListener("click",addActors);
            counterOfAddActors -= 1;
        }
       // console.log(t.classList.contains("divAAR"));
    }
    
    /* -------------------------------------------------------------------------------- */
    // دالة حذف مربع معين من مربعات الادخالة لاسم ممثل {
    function returnTheAddActor(){
        counterOfAddActors = 0;
        const lenOfActorsName = document.querySelectorAll(".add-actors-name-a").length-1;
        
        for(let i = lenOfActorsName ;i > 0; i--){
            
            document.querySelectorAll(".add-actors-name-w")[i].remove();
            document.querySelectorAll(".add-actors-name-a")[i].remove();
            document.querySelectorAll(".remove-actors-name-a")[i].remove();
            
        }
        for(let i =  document.querySelectorAll(".divAAR").length-1;i>0;i--){
            document.querySelectorAll(".divAAR")[i].remove();
        }
        
        document.querySelector(".add-actors-name-a").addEventListener("click",addActors);
    }
    // } END
    // دالة حذف مربع معين من مربعات الادخالة لنوع الفيلم
    function returnTheAddKind(){
        counterOfAddMoviesKind = 0;
        const lenOfActorsName = document.querySelectorAll(".add-kind-a").length-1;
        for(let i = lenOfActorsName ;i > 0; i--){
            document.querySelectorAll(".add-kind-w")[i].remove();
            document.querySelectorAll(".add-kind-a")[i].remove();
            document.querySelectorAll(".remove-kind-a")[i].remove();
        }
        for(let i =  document.querySelectorAll(".divAAR2").length-1;i>0;i--){
            document.querySelectorAll(".divAAR2")[i].remove();
        }
        document.querySelector(".add-kind-a").addEventListener("click",addFilmsKind);
    }
    // انتهاء اضافة او حذف مربع من مربعات الادخال لاسم الممثل او لنوع الفيلم
    //===================================================================================================