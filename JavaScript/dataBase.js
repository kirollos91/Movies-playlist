let tableData = []; 
function getAllData(){
    for(let i = 0 ;i<txtNameFile.length;i++){

        let actorsNamesArr ="";
        let filmsKindsArr = "";
         
         for(let a =0; a < actorsNames[i].children.length; a++){
             if(actorsNames[i].children[a].textContent.length > 0)
             actorsNamesArr += (a == actorsNames[i].children.length-1 )? actorsNames[i].children[a].textContent : actorsNames[i].children[a].textContent + " ";
         }
         for(let a =0;a<filmsKinds[i].children.length; a++){
             if(filmsKinds[i].children[a].textContent.length > 0)
             filmsKindsArr += (a ==filmsKinds[i].children.length-1)?filmsKinds[i].children[a].textContent :  filmsKinds[i].children[a].textContent + " ";
         }
         tableData.push(
            [
                [txtNameFile[i].children[0].src],
                [txtNameFile[i].children[0].alt],
                [txtNameFile[i].children[1].href],
                [txtNameFile[i].children[1].textContent],
                [txtNameFile[i].children[2].textContent],
                [txtNameFile[i].children[3].textContent],
                [txtNameFile[i].children[4].textContent],
                [txtNameFile[i].children[5].textContent],
                actorsNamesArr.trim().split(" "),
                filmsKindsArr.trim().split(" "),
                [whatAbout1[i].textContent],
                [watchedBox1[i].children[0].checked]
            ]
        );
     }
}


function orderArrayByYear(number){  
    let maxYear = 0;
    let thisYear = 0;
    let orderArr = [];
    for(let i=0;i<tableData.length ;i++){
        thisYear = parseInt(tableData[i][number]);
        for(let j=i;j<tableData.length ;j++){
            if(thisYear <= parseInt(tableData[j][number])){
                thisYear = parseInt(tableData[j][number]);
                maxYear = j;
            }   
        }
        orderArr = tableData[i];
        tableData[i] = tableData[maxYear];
        tableData[maxYear] = orderArr;

    }
}

function showDataAfterOrder(){
    for(let g of allgrid)
        g.classList.add("disappear-element");
    getAllData();
    orderArrayByYear(4);
    const df = document.createDocumentFragment();
    for(let l of tableData){
        
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
        year_num.textContent = l[4];
        //
        const rating_movie = document.createElement("span");
        rating_movie.classList.add("rating-movie","disappear-element");
        rating_movie.textContent =l[5];
        //
        const film_time = document.createElement("span");
        film_time.classList.add("film-time","disappear-element");
        film_time.textContent = l[6];
        //
        const film_director = document.createElement("span");
        film_director.classList.add("director-movie","disappear-element");
        film_director.textContent = l[7];
        //
        const info_film = document.createElement("span");
        info_film.classList.add("info-film",isDarkMode?"info-film-dark-mode-on":"info-film-dark-mode-off");
        info_film.textContent = "i";
        //
        actors_name.classList.add("add-actors","disappear-element");
        let stractorn = "";
        for(let actorn of l[8]){
            let sp_actor = document.createElement("span");
            sp_actor.textContent = actorn;
            actors_name.append(sp_actor);    
        }
        //
        films_kind.classList.add("add-films-kind","disappear-element");
        let strfilmk = "";
        for(let filmk of l[9]){
            let sp_filmk = document.createElement("span");
            sp_filmk.textContent = filmk;
            films_kind.append(sp_filmk);     
        }
        // اضافة خاصية الكلاس للديف الرابع
        whatAbout.setAttribute("lang","ar");
        whatAbout.classList.add("whatAbout",isDarkMode?"whatAbout-in-dark-mode-on":"whatAbout-in-dark-mode-off");
        // اضافة اسم الفيلم للديف الرابع من مربع النص
        whatAbout.textContent =  l[10];
        // اضافة خاصية الكلاس للديف الخامس
        watchedBox.setAttribute("class","watchedBox");
        // انشاء الانبوت التابع للدف الخامس
        const cbx = document.createElement("input");
        cbx.setAttribute("type","checkbox");
        cbx.setAttribute("checked",l[11]);
        watchedBox.append(cbx);

        

        // انشاء فى الدف الاول عنصر الصورة و عنصر اللينك
        const fImage = document.createElement("img");
        const ahref = document.createElement("a");
        
        // اضافة خصائص الى العناصر
        fImage.setAttribute("class","fImage");
        // التحقق من ان بداية مسار الصورة يبدا بكذا
        fImage.setAttribute("src",l[0]);
        fImage.setAttribute("alt",l[1]);
        // اضافة مسار الفيلم    
        ahref.setAttribute("href",l[2]);
        // اضافة الكلاسات للينك
        ahref.classList.add("link-film",isDarkMode?"a-in-dark-mode-on":"a-in-dark-mode-off");
        // اضافة اسم الفيلم    
        ahref.textContent = l[3];
        // اضافى العناصر الصورة و اللينك الى الديف الاول
        filmName.append(fImage);
        filmName.append(ahref);
        filmName.append(year_num);
        filmName.append(rating_movie);
        filmName.append(film_time);
        filmName.append(film_director);
        filmName.append(info_film);
        //

        // اضافة الخمس دفات فى الدف الاب
        df.append(filmName);
        df.append(actors_name);
        df.append(films_kind);
        df.append(whatAbout);
        df.append(watchedBox);

    }
    
    allgrid[4].classList.remove("disappear-element");
    allgrid[4].append(df);
    
}
