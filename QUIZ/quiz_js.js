/*** QUIZ JAVASCRIPT ***/

const questions = [
{
question:"Quelle est la sortie de : console.log(2 + '2') ?",
answers:["4","22","NaN"],
correct:1
},
{
question:"Quelle est la différence principale entre == et === en JavaScript ?",
answers:[
"== compare valeur et type",
"=== compare valeur et type",
"Il n'y a aucune différence"
],
correct:1
},
{
question:"Que fait la méthode filter() sur un tableau ?",
answers:[
"Elle supprime les éléments",
"Elle crée un nouveau tableau selon une condition",
"Elle transforme chaque élément"
],
correct:1
},
{
question:"Quelle est la portée d'une variable déclarée avec let ?",
answers:[
"Globale seulement",
"Portée de bloc",
"Portée de fonction uniquement"
],
correct:1
},
{
question:"Que retourne typeof undefined ?",
answers:["undefined","null","object"],
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

question.textContent = "Quiz JavaScript terminé"

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


sauvegarder_score("javascript", score, questions.length)

}



btnRecommencer.addEventListener("click", function(){
location.reload()
})

btnRetour.addEventListener("click", function(){
window.location.href = "../DESCRIPTION_MODULE/js.html"
})


afficherQuestion()