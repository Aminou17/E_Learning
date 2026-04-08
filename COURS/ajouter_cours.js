
let bouton = document.querySelector(".btn_ajouter_cours");


if(bouton){

bouton.addEventListener("click", function(){

//si l'utilisateur est connecté
let current_user = JSON.parse(localStorage.getItem("current_user"));

if(!current_user){

alert("Connectez-vous pour ajouter ce cours");

return;

}

// récupérer le cours
let cours = bouton.dataset.cours;

//récupérer les cours enregistrés
let mes_cours = JSON.parse(localStorage.getItem("mes_cours")) || {};


//identifier l'utilisateur
let email = current_user.contact;

//créer un tableau si vide
if(!mes_cours[email]){

mes_cours[email] = [];

}

// doublons
if(!mes_cours[email].includes(cours)){

mes_cours[email].push(cours);

}

//sauvegarder
localStorage.setItem("mes_cours", JSON.stringify(mes_cours));


alert("Cours ajouté à Mes cours");

});

}