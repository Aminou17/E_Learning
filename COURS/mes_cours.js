// AJOUTER AUX COURS EPEINGLE

document.addEventListener("DOMContentLoaded", function(){
let current_user = JSON.parse(localStorage.getItem("current_user"));

let container = document.querySelector("#cours_container");



// bloquer accès si, non connecté
if(!current_user){

    // inviter l user a se connecter
container.innerHTML = `
<h2>Connectez-vous pour voir vos cours</h2>
<a href="../LOGIN_LOGOUT/login.html">Se connecter</a>
`;

return;
}


// récupérer les cours enregistrés
let mes_cours = JSON.parse(localStorage.getItem("mes_cours")) || {};


// identifier utilisateur
let email = current_user.contact;


//récupérer ses cours
let cours_user = mes_cours[email] || [];


// scores quiz
let scores = JSON.parse(localStorage.getItem("scores")) || {};

let scores_user = scores[email] || {};


// afficher les cours
container.innerHTML = "";


// si aucun cours

if(cours_user.length === 0){

container.innerHTML = `
<h2>Vous n'avez encore suivi aucun cours</h2>
`;

return;

}


// afficher chaque cours
cours_user.forEach(function(cours){

let lien = "";

// définir lien cours 
if(cours === "javascript") lien = "../DESCRIPTION MODULE/js.html";
if(cours === "php") lien = "../DESCRIPTION MODULE/php.html";
if(cours === "linux") lien = "../DESCRIPTION MODULE/linux.html";
if(cours === "sql") lien = "../DESCRIPTION MODULE/sql.html";
if(cours === "html") lien = "../DESCRIPTION MODULE/html_css.html";


/* récupérer score */
let score = scores_user[cours];


/* texte score */

let texte_score = "Quiz non fait";

if(score !== undefined){

texte_score = "Score : " + score + " / 5";

}


// afficher

container.innerHTML += `
<a href="${lien}" class="cours_card">

<h3>${cours}</h3>

<p>${texte_score}</p>

</a>
`;

});

});