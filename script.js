
// DIAPO AUTOMATIQUE

let images = document.querySelectorAll(".image");

// position
let position = 0;

// fonction pour changer d'image
function imageSuivante(){

    // enlève l'image visible
    images[position].classList.remove("active");

    // passer à l'image suivante
    position = (position + 1) % images.length;
    images[position].classList.add("active");
}
// change chaqye 3min
setInterval(imageSuivante, 3000);







const user = JSON.parse(localStorage.getItem("current_user"));

const bonjour_user = document.getElementById("bonjour_user");
const btn_login = document.getElementById("btn_login");
const btn_signup = document.getElementById("btn_signup");
const btn_logout = document.getElementById("btn_logout");


/* si un user est connecté */
if(user) {
    bonjour_user.textContent = "Bonjour " + user.nom;
    /* cacher les boutons loigin et inscription */
    btn_login.style.display = "none";
    btn_signup.style.display = "none";

}else{

    /* si le user n'est pas connecter */
    btn_logout.style.display = "none";

}


/* gestion du clic sur déconnexion */
btn_logout.addEventListener("click", function(){

    /* supprimer la session utilisateur */
    localStorage.removeItem("current_user");

    /* redirection vers l'accueil */
    window.location.href = "/index.html";

});





