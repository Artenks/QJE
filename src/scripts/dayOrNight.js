import { eraseCookie, getCookie, setCookie } from "./cookie";
const dayOrNightCookie = "dayOrNight";

function themeChange(){
  if(getCookie(dayOrNightCookie) == null || getCookie(dayOrNightCookie) == 1){
    console.log("tema escuro");
    document.body.classList.remove('day');
    document.body.classList.toggle('night');
  }
  else if(getCookie(dayOrNightCookie) == 2){
    console.log("tema claro");
    document.body.classList.remove('night');
    document.body.classList.toggle('day');
  }
}
themeChange();

function changeClick(){
  if(getCookie(dayOrNightCookie) == null || getCookie(dayOrNightCookie) == 1){
    setCookie(dayOrNightCookie, 2, 0);
    themeChange();
  }
  else if(getCookie(dayOrNightCookie) == 2){
    setCookie(dayOrNightCookie, 1, 0);
    themeChange();
  }

}

export {changeClick}