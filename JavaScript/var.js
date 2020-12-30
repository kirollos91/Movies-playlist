// اضافة المتغيرات للمشروع
// متغيرات الهيدير
const header                    = document.querySelector("header");
const btnSettingMenu            = document.querySelector(".setting-menu");
const btnGoTop                  = document.querySelector(".btn-top-page");
// الانتهاء
//-------------------------------------------------------------------------
// متغيرات فورم اضافة فيلم جديد
const btnAdd                    = document.querySelector(".btn-add");
const btnClose                  = document.querySelector(".btn-close");
const addGrid                   = document.querySelector(".gridAdd");
const imgPath                   = document.getElementById("imgPath");                       //  input image path
const moviePath                 = document.getElementById("moviePath");                     //  input movie path 
const movieName                 = document.getElementById("movieName");                     //  input movie name
const movieDescription          = document.getElementById("movieDescription");              //  input movie des
const moviekind                 = document.getElementById("moviekind");                     //  input movie kind
const filmYear                  = document.querySelector("#year-num");                      //  input film year
const actorsName                = document.querySelectorAll(".add-actors-name-w");          //  input all actors name for film
const filmsKind                 = document.querySelectorAll(".add-kind-w");                 //  input all kinds for film
const filmTime                  = document.querySelector("#add-film-time");                 //  input time film spend
const directorMovie             = document.querySelector("#add-director-movie");
const addActorsName             = document.querySelector("#add-actors-name");               //  input the first input off actor name
const addFilmsKindVar           = document.querySelector("#add-films-kind");                //  input the first input off kind film
const ratingMovie               = document.querySelector(".inp-rating-movie");              //  input rating film
// الانتهاء
//---------------------------------------------------------------------------
// الجريد   ( all title kind film in grid )
const allgrid                   = document.querySelectorAll(".grid");                       
// الانتهاء
//---------------------------------------------------------------------------
// دفين العنوان
const classTitle                = document.querySelectorAll(".title"); 
const wTitle1                   = document.querySelectorAll(".wTitle");
// الانتهاء
//---------------------------------------------------------------------------
// الخمس دفات الرئيسبة
const txtNameFile               = document.querySelectorAll(".filmName");                   //  all div film name
const actorsNames               = document.querySelectorAll(".add-actors");
const filmsKinds                = document.querySelectorAll(".add-films-kind");
const whatAbout1                = document.querySelectorAll(".whatAbout");
const watchedBox1               = document.querySelectorAll(".watchedBox");
// الانتهاء
//---------------------------------------------------------------------------
// متغيرات الابناء فى ديف اسم الفيلم
const FilmImage                 = document.querySelectorAll(".fImage");
const FilmLink                  = document.querySelectorAll(".link-film");
const yearFilmNumber            = document.querySelectorAll(".year-num");
const ratingFilm                = document.querySelectorAll(".rating-movie");
const informationFilm           = document.querySelectorAll(".info-film");                  //  button off information of film

//
//---------------------------------------------------------------------------
//
const menuBar                   = document.querySelector(".main-menu-bar");
const menuBar2                  = document.querySelector(".menu-bar-open1");
const menuBar3                  = document.querySelector(".menu-bar-open2");
const imgOpenMenu               = document.querySelector(".img-open-menu");
const imgCloseMenu              = document.querySelector(".img-close-menu");
const imgSearch                 = document.querySelector(".img-search");
const imgCloseMenuSearch        = document.querySelector(".img-close-menu-search");
//
//---------------------------------------------------------------------------
//
const allLbl                    = document.querySelectorAll(".lbl-dark");                   //  all label except label dark key
//
//---------------------------------------------------------------------------
//
const datalist                  = document.querySelector("#film-name");                     //  datalist for film name to the search box
const movieSearch               = document.querySelector("#movie-search");                  //  search box            
//
//---------------------------------------------------------------------------
//
//const notWatched                = document.querySelector("#not-watched");
const watchedContinar           = document.querySelector(".watched-continar")
const rdoWatched                = document.querySelectorAll(".rdo-watched");
const darkModeOff               = document.querySelector("#dark-mode-off");
const darkModeOn                = document.querySelector("#dark-mode-on");
const darkModeStick             = document.querySelector("#dark-mode-stick");
const darkMode                  = document.querySelector(".dark-mode");
const isWatched                 = document.querySelector("#is-checked");
const txtArea                   = document.querySelector("#txt-area");
let   isDarkMode                = false;
//
/*================================================================================*/
// متفيرات فورم معلومات عن الفيلم
const informationFilmForm       = document.querySelector(".information-film-form");
const btnFormInformationClose   = document.querySelector(".btn-form-information-close");
const infoFilmImage             = document.querySelector("#info-film-image");
const infoFilmName              = document.querySelector("#info-film-name");
const infoFilmRating            = document.querySelector("#info-film-rating");
const infoFilmYear              = document.querySelector("#info-film-year");
const infoFilmTime              = document.querySelector("#info-film-time");
const infoFilmDirector          = document.querySelector("#info-film-director");
const infoFilmActors            = document.querySelector("#info-film-actors");
const infoFilmKinds             = document.querySelector("#info-film-kinds");
const infoFilmDescription       = document.querySelector("#info-film-description");
// end
/*================================================================================*/
/*
// شكل جريد الفيلم
1- div filmName
                1- img  fImage           (src) (alt)
                2- link link-film       (href) (textContent)
                3- span year-num        (textContent)
                4- span rating-movie    (textContent)
                5- span film-time       (textContent)
                6- span director-movie  (textContent)
                7- span info-film
2- div add-actors       (textContent)
3- div add-films-kind   (textContent)
4- div whatAbout        (textContent)
5- div watchedBox
                1- input type="checkbox"                    
*/
