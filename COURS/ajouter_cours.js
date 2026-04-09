// AJOUTER UN COURS A "MES COURS"

let bouton = document.querySelector(".btn_ajouter_cours");

if(bouton){

bouton.addEventListener("click", function(){

// vérifier si l'utilisateur est connecté
let current_user = JSON.parse(localStorage.getItem("current_user"));

if(!current_user){

alert("Connectez-vous pour ajouter ce cours");
return;

}


// récupérer le cours depuis l'attribut data-cours
let cours = bouton.dataset.cours;


// récupérer les cours enregistrés
let mes_cours = JSON.parse(localStorage.getItem("mes_cours")) || {};


// identifier l'utilisateur
let email = current_user.contact;


// créer un tableau si l'utilisateur n'a encore aucun cours
if(!mes_cours[email]){

mes_cours[email] = [];

}


// éviter les doublons
if(!mes_cours[email].includes(cours)){

mes_cours[email].push(cours);

}


// sauvegarder les cours
localStorage.setItem("mes_cours", JSON.stringify(mes_cours));


alert("Cours ajouté à Mes cours");

});

}