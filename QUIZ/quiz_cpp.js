/*** QUIZ C++ ***/

const questions = [
{
question:"Quel concept de la programmation orientée objet permet à une classe d'utiliser les caractéristiques d'une autre classe ?",
answers:[
"L'encapsulation",
"L'héritage",
"La compilation"
],
correct:1
},
{
question:"Que permet le polymorphisme en C++ ?",
answers:[
"Utiliser plusieurs formes pour une même fonction",
"Créer plusieurs programmes",
"Supprimer une fonction"
],
correct:0
},
{
question:"Quel mot-clé permet de définir une méthode qui peut être redéfinie dans une classe dérivée ?",
answers:[
"virtual",
"static",
"const"
],
correct:0
},
{
question:"Quel concept consiste à cacher les détails internes d'une classe et contrôler l'accès aux données ?",
answers:[
"L'encapsulation",
"L'héritage",
"La compilation"
],
correct:0
},
{
question:"Quelle structure permet de définir un type regroupant variables et fonctions ?",
answers:[
"class",
"array",
"loop"
],
correct:0
}
]


let indexQuestion = 0
let score = 0
let choix = null


const question = document.getElementById("question")
const reponses = document.getElementById("reponses")
const btnSuivant = document.getElementById("btnSuivant")
const progression = document.getElementById("progression")
const texteProgression = document.getElementById("texteProgression")
const resultat = document.getElementById("resultat")

const btnRecommencer = document.getElementById("btnRecommencer")
const btnRetour = document.getElementById("btnRetour")



function afficherQuestion(){

let q = questions[indexQuestion]

question.textContent = q.question

reponses.innerHTML = ""

choix = null

texteProgression.textContent =
"Question " + (indexQuestion + 1) + " / " + questions.length

progression.style.width =
((indexQuestion + 1) / questions.length) * 100 + "%"


q.answers.forEach(function(rep,i){

let bouton = document.createElement("button")
bouton.textContent = rep

bouton.addEventListener("click", function(){

choix = i

document.querySelectorAll("#reponses button")
.forEach(function(b){
b.classList.remove("selection")
})

bouton.classList.add("selection")

})

reponses.appendChild(bouton)

})

}



btnSuivant.addEventListener("click", function(){

if(choix === null) return


let user = localStorage.getItem("current_user")

if(!user){

let rep = confirm("Vous devez être connecté pour continuer le quiz. Se connecter ?")

if(rep){
window.location.href = "../LOGIN_LOGOUT/login.html"
}

return
}


let bonne = questions[indexQuestion].correct
let boutons = document.querySelectorAll("#reponses button")

boutons.forEach(function(btn,i){

btn.disabled = true

if(i === bonne){
btn.classList.add("bonne")
}

if(i === choix && i !== bonne){
btn.classList.add("mauvaise")
}

})


if(choix === bonne){
score++
}


setTimeout(function(){

indexQuestion++

if(indexQuestion < questions.length){
afficherQuestion()
}else{
finQuiz()
}

},1000)

})



function finQuiz(){

question.textContent = "Quiz C++ terminé"

reponses.innerHTML = ""

btnSuivant.style.display = "none"

progression.style.width = "100%"


let pourcentage = Math.round((score / questions.length) * 100)

let message = ""

if(pourcentage >= 80){
message = "Excellent travail !"
}
else if(pourcentage >= 50){
message = "Bon résultat, continuez ainsi."
}
else{
message = "Résultat insuffisant. Essayez de revoir le cours."
}

resultat.style.display = "block"

resultat.textContent =
message + " Score : " + score + " / " + questions.length


btnRecommencer.style.display = "inline-block"
btnRetour.style.display = "inline-block"


sauvegarder_score("cpp", score, questions.length)

}



btnRecommencer.addEventListener("click", function(){
location.reload()
})

btnRetour.addEventListener("click", function(){
window.location.href = "../DESCRIPTION_MODULE/cpp.html"
})


afficherQuestion()