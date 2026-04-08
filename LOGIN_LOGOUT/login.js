
   // CONNEXION UTILISATEUR
let form_login = document.querySelector("#forme_login");

// on vérifie si le formulaire existe sur la page
if(form_login){

form_login.addEventListener("submit", function(e){

e.preventDefault();

/* récupérer l'email ou numéro saisi */
let contact = document.querySelector("#mail_login").value.trim();

// Mot de passe saisi
let mot_de_passe = document.querySelector("#passwd_login").value;

/* Liste des uers */
let users = JSON.parse(localStorage.getItem("users")) || [];

//  Verification
let user = users.find(u => 
    u.contact === contact && u.mot_de_passe === mot_de_passe
);

// Si le user n'existe pas 
if(!user){
alert("Email ou mot de passe incorrect");
return;
}

/* enregistrer dle user dns localStorage */
localStorage.setItem("current_user", JSON.stringify(user));
alert("Connexion réussie");

/* redirection vers la page d'accueil */
window.location.href = "../index.html";

});

}



  // BOUTON inscription et 

// user actuellement connecté
let current_user = JSON.parse(localStorage.getItem("current_user"));

let bonjour = document.getElementById("bonjour_user");
let btn_login = document.getElementById("btn_login");
let btn_signup = document.getElementById("btn_signup");
let btn_logout = document.getElementById("btn_logout");

/* vérifier si un utilisateur est connecté */
if(current_user){

/* afficher un message de bienvenue */
if(bonjour){
bonjour.textContent = "Bonjour " + current_user.prenom;
}

// cacher boutons connexion, iscription
if(btn_login) btn_login.style.display = "none";
if(btn_signup) btn_signup.style.display = "none";

}else{

// si aucun utilisateur n'est connecté on cache le bouton déconnexion
if(btn_logout) btn_logout.style.display = "none";

}



// DECONNEXION

// vérifier si le bouton deconnecter est afficher ou pas *
if(btn_logout){

btn_logout.addEventListener("click", function(){

// supprimer l'utilisateur connecté
localStorage.removeItem("current_user");

// la page d'accueil
window.location.href = "../index.html";

});

}