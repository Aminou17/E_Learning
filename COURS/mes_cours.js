// AFFICHER LES COURS SUIVIS

document.addEventListener("DOMContentLoaded", function(){

// utilisateur connecté
let current_user = JSON.parse(localStorage.getItem("current_user"));

// conteneur
let container = document.querySelector("#cours_container");


// bloquer accès si non connecté
if(!current_user){
alert("Connectez-vous pour accéder à vos cours");
window.location.href = "../LOGIN_LOGOUT/login.html";
return;
}


// récupérer données
let mes_cours = JSON.parse(localStorage.getItem("mes_cours")) || {};
let email = current_user.contact;
let cours_user = mes_cours[email] || [];

let scores = JSON.parse(localStorage.getItem("scores")) || {};
let scores_user = scores[email] || {};

container.innerHTML = "";


// aucun cours
if(cours_user.length === 0){

container.innerHTML = `
<p class="vide_message">
Vous n'avez encore suivi aucun cours
</p>
`;

return;

}


// afficher cours
cours_user.forEach(function(cours){

let lien = "";

if(cours === "javascript") lien = "../DESCRIPTION_MODULE/js.html";
if(cours === "php") lien = "../DESCRIPTION_MODULE/php.html";
if(cours === "linux") lien = "../DESCRIPTION_MODULE/linux.html";
if(cours === "sql") lien = "../DESCRIPTION_MODULE/sql.html";
if(cours === "html") lien = "../DESCRIPTION_MODULE/html_css.html";


// score
let score = scores_user[cours];

let texte_score = "Quiz non fait";

if(score !== undefined){
texte_score = "Score : " + score + " / 5";
}


// afficher carte
container.innerHTML += `
<a href="${lien}" class="cours_card">

<h3>${cours}</h3>

<p>${texte_score}</p>

<button class="btn_supprimer" data-cours="${cours}">
Supprimer
</button>

</a>
`;

});


// suppression cours
let boutons = document.querySelectorAll(".btn_supprimer");

boutons.forEach(function(btn){

btn.addEventListener("click", function(e){

// empêcher ouverture du lien
e.preventDefault();
e.stopPropagation();

let cours = btn.dataset.cours;

// supprimer du tableau
mes_cours[email] = mes_cours[email].filter(c => c !== cours);

// sauvegarder
localStorage.setItem("mes_cours", JSON.stringify(mes_cours));

// recharger
location.reload();

});

});

});