// INSCRIPTION D'un USER

let form_inscription = document.querySelector("#forme_inscription");

if(form_inscription){
form_inscription.addEventListener("submit", function(e){

/* empêcher le rechargement de la page */
e.preventDefault();


   // RECUPERATION DES DONNES
// nom
let nom = document.querySelector("#name_inscription").value.trim();

// récupérer le prénom
let prenom = document.querySelector("#firstName_inscription").value.trim();

// pays
let pays = document.querySelector("#country_inscription").value;

// tél
let contact = document.querySelector("#mail_inscription").value.trim();

// le mot de passe 
let mot_de_passe = document.querySelector("#passwd_input").value;

/* récupérer la confirmation du mot de passe */
let confirm_pass = document.querySelector("#confirm_passwd_input").value;



   // VERIFICATION MOT DE PASSE

// vérifier si les deux password sont identiques
if(mot_de_passe !== confirm_pass){

alert("Les mots de passe ne correspondent pas");
return;

}


// RECUPERER LES USERS

//  utilisateurs déjà enregistrés 
let users = JSON.parse(localStorage.getItem("users")) || [];



//  VERIFIER SI UTILISATEUR EXISTE

//    chercher si le contact existe déjà
let existe = users.find(user => user.contact === contact);

// si l'utilisateur existe déjà
if(existe){

alert("Cet utilisateur existe déjà");
return;

}


//   CREER UN NOUVEL UTILISATEUR

/* créer un objet utilisateur */
let new_user = {

nom: nom,
prenom: prenom,
pays: pays,
contact: contact,
mot_de_passe: mot_de_passe

};


// ajouter l'utilisateur dans le tableau
users.push(new_user);


/* sauvegarder dans localStorage */
localStorage.setItem("users", JSON.stringify(users));
alert("Inscription réussie");


// redirection vers la page de connexion
window.location.href = "login.html";

});

}