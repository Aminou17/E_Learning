
//  OBJET CONTENANT TABLEAU DES QUESION ET INDICE DE REPONSE CORRECT

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
question:"Quel concept consiste à cacher les détails internes d'une classe et à contrôler l'accès aux données ?",
answers:[
"L'encapsulation",
"L'héritage",
"La compilation"
],
correct:0
},

{
question:"Quelle structure permet de définir un nouveau type regroupant variables et fonctions en C++ ?",
answers:[
"class",
"array",
"loop"
],
correct:0
}

]


// Initialisation des var
let questionActuelle = 0 
let score = 0
let reponseChoisie = null

const question = document.getElementById("question")
const reponses = document.getElementById("reponses")
const btnSuivant = document.getElementById("btnSuivant")
const progression = document.getElementById("progression")
const texteProgression = document.getElementById("texteProgression")
const resultat = document.getElementById("resultat")


// Fonction pour afficher question svte
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

/* afficher le message de fin */
question.textContent = "Quiz C++ terminé"


/* supprimer les réponses */
reponses.innerHTML = ""


/* cacher le bouton suivant */
btnSuivant.style.display = "none"


/* mettre la barre de progression à 100% */
progression.style.width = "100%"


/* afficher le score */
resultat.textContent = "Score : " + score + " / " + questions.length

// sauvegarder le score du quiz C++
sauvegarder_score("cpp", score, questions.length)

}


// démarrer le quiz 
chargerQuestion()