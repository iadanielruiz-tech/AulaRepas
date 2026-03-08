
document.addEventListener("DOMContentLoaded", function(){

if(!localStorage.getItem("cookiesAccepted")){

const banner = document.createElement("div");
banner.id="cookieBanner";

banner.innerHTML = `
<div class="cookie-inner">
<p>
Utilizamos cookies para mejorar la experiencia de usuario. 
<a href="/politica-cookies.html">Más información</a>
</p>

<div class="cookie-buttons">
<button id="acceptCookies">Aceptar</button>
<button id="rejectCookies">Rechazar</button>
</div>
</div>
`;

document.body.appendChild(banner);

document.getElementById("acceptCookies").onclick=function(){
localStorage.setItem("cookiesAccepted",true);
banner.remove();
}

document.getElementById("rejectCookies").onclick=function(){
localStorage.setItem("cookiesAccepted",false);
banner.remove();
}

}

});
