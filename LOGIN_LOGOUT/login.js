
const form_login = document.querySelector("#forme_login");

if (form_login) {

form_login.addEventListener("submit", function(e){

e.preventDefault();

// récupérer les informations saisies
const contact = document.querySelector("#mail_login").value.trim().toLowerCase();
const mot_de_passe = document.querySelector("#passwd_login").value;

// récupérer les utilisateurs enregistrés
const users = JSON.parse(localStorage.getItem("users")) || [];

// chercher l'utilisateur correspondant
const user = users.find(u => 
u.contact === contact && u.mot_de_passe === mot_de_passe
);

// si utilisateur non trouvé
if(!user){
alert("Email ou mot de passe incorrect");
return;
}

// enregistrer la session
localStorage.setItem("current_user", JSON.stringify(user));

alert("Connexion réussie");

// redirection vers accueil
window.location.href = "../index.html";

});

}



// GESTION DU HEADER
const current_user = JSON.parse(localStorage.getItem("current_user"));

const bonjour = document.getElementById("bonjour_user");
const btn_login = document.getElementById("btn_login");
const btn_signup = document.getElementById("btn_signup");
const btn_logout = document.getElementById("btn_logout");

if(current_user){

// message bonjour
if(bonjour){
bonjour.textContent = "Bonjour " + current_user.prenom;
}

// cacher connexion et inscription
if(btn_login) btn_login.style.display = "none";
if(btn_signup) btn_signup.style.display = "none";

}else{

// cacher déconnexion
if(btn_logout) btn_logout.style.display = "none";

}



// DECONNEXION
if(btn_logout){

btn_logout.addEventListener("click", function(){

// supprimer la session
localStorage.removeItem("current_user");

// redirection accueil
window.location.href = "../index.html";

});

}