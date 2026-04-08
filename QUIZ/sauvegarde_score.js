// SAUVEGARDER LE SCORE DU QUIZ
function sauvegarder_score(nom_cours, score_user, total_questions){

// utilisateur connecté
let current_user = JSON.parse(localStorage.getItem("current_user"))

// si personne n'est connecté
if(!current_user) return

// récupérer les scores déjà enregistrés
let scores = JSON.parse(localStorage.getItem("scores")) || {}


let email = current_user.contact

if(!scores[email]){

scores[email] = {}

}


// enregistrer le score
scores[email][nom_cours] = score_user


// sauvegarder dans localStorage
localStorage.setItem("scores", JSON.stringify(scores))

}