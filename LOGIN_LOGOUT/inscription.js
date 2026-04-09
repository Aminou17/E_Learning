// INSCRIPTION D'UN UTILISATEUR


let current_user = JSON.parse(localStorage.getItem("current_user"));

if(current_user){
window.location.href = "../index.html";
}


const form_inscription = document.querySelector("#forme_inscription");

if (form_inscription) {

form_inscription.addEventListener("submit", function(e){

// empêcher le rechargement
e.preventDefault();


// RECUPERATION DES DONNEES

const nom = document.querySelector("#name_inscription").value.trim();
const prenom = document.querySelector("#firstName_inscription").value.trim();
const pays = document.querySelector("#country_inscription").value;
const contact = document.querySelector("#mail_inscription").value.trim();
const mot_de_passe = document.querySelector("#passwd_input").value;
const confirm_pass = document.querySelector("#confirm_passwd_input").value;


// VERIFIER LE PAYS
if(pays === ""){
alert("Veuillez choisir un pays");
return;
}


// VERIFIER LE MOT DE PASSE
if(mot_de_passe !== confirm_pass){

alert("Les mots de passe ne correspondent pas");
return;

}


// MOT DE PASSE MINIMUM
if(mot_de_passe.length < 6){

alert("Mot de passe trop court (minimum 6 caractères)");
return;

}


// RECUPERER LES UTILISATEURS EXISTANTS
let users = JSON.parse(localStorage.getItem("users")) || [];


// VERIFIER SI L'UTILISATEUR EXISTE
let existe = users.find(user => user.contact === contact);

if(existe){

alert("Cet utilisateur existe déjà");
return;

}


// CREER LE NOUVEL UTILISATEUR
const new_user = {

nom: nom,
prenom: prenom,
pays: pays,
contact: contact,
mot_de_passe: mot_de_passe

};


// AJOUTER AU TABLEAU
users.push(new_user);


// SAUVEGARDER DANS LOCALSTORAGE
localStorage.setItem("users", JSON.stringify(users));


alert("Inscription réussie");


// REDIRECTION
window.location.href = "login.html";

});

}