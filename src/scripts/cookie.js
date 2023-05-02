console.log("função cookies carregado");

function setCookie(name, value, data){
  var validate = "";
  if(data){
    var date = new Date();
    date.setTime(date.getTime() + (data*24*60*1000))
    validate = "; expires="+ date.toUTCString();
  }
  document.cookie = `${name}=${value || ""}${validate}; path=/`;
}

function getCookie(name){
  var cookieName = name+"=";
  var ca = document.cookie.split(";");
  for(var i=0; i < ca.length;i++){
    var c = ca[i];
    while(c.charAt(0)==' ') c = c.substring(1,c.length);
    if(c.indexOf(cookieName) == 0) return c.substring(cookieName.length, c.length);
  }
  return null;
}

function eraseCookie(name){
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export {setCookie, getCookie, eraseCookie}