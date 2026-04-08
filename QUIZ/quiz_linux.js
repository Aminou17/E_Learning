const questions = [

{
question:"Quelle commande permet d'afficher le contenu d'un dossier ?",
answers:["ls","dir","show"],
correct:0
},

{
question:"Quelle commande permet de changer de répertoire ?",
answers:["cd","mv","pwd"],
correct:0
},

{
question:"Quelle commande affiche le chemin du dossier courant ?",
answers:["pwd","path","where"],
correct:0
},

{
question:"Quelle commande permet de copier un fichier ?",
answers:["cp","mv","copy"],
correct:0
},

{
question:"Quelle commande permet de supprimer un fichier ?",
answers:["rm","del","erase"],
correct:0
}

]






let questionActuelle = 0
let score = 0
let reponseChoisie = null

const question = document.getElementById("question")
const reponses = document.getElementById("reponses")
const btnSuivant = document.getElementById("btnSuivant")
const progression = document.getElementById("progression")
const texteProgression = document.getElementById("texteProgression")
const resultat = document.getElementById("resultat")

function chargerQuestion(){

let q = questions[questionActuelle]

question.textContent = q.question

reponses.innerHTML=""

reponseChoisie=null

texteProgression.textContent =
"Question " + (questionActuelle+1) + " / " + questions.length

progression.style.width =
(questionActuelle/questions.length)*100 + "%"

q.answers.forEach((a,i)=>{

let btn = document.createElement("button")

btn.textContent = a

btn.addEventListener("click", () => {
reponseChoisie = i
})

reponses.appendChild(btn)

})

}

btnSuivant.addEventListener("click", () => {

if(reponseChoisie === null) return

if(reponseChoisie === questions[questionActuelle].correct){
score++
}

questionActuelle++

if(questionActuelle < questions.length){
chargerQuestion()
}else{
finQuiz()
}

})




function finQuiz(){

// afficher le message de fin
question.textContent = "Quiz Linux terminé"


// supprimer les réponses
reponses.innerHTML = ""


// cacher le bouton suivant
btnSuivant.style.display = "none"


//mettre la barre de progression à 100
progression.style.width = "100%"


// afficher le score
resultat.textContent = "Score : " + score + " / " + questions.length


// sauvegarder le score du quiz Linux
sauvegarder_score("linux", score, questions.length)

}

// démarrer le quiz
chargerQuestion()