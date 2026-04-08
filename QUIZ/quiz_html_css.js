const questions = [

{
question:"Quelle propriété CSS permet de changer la couleur du texte ?",
answers:["text-color","color","font-color"],
correct:1
},

{
question:"Quelle balise HTML est utilisée pour créer un lien ?",
answers:["<link>","<a>","<href>"],
correct:1
},

{
question:"Quelle propriété CSS permet de transformer un élément en conteneur flex ?",
answers:["display:flex","flex:display","layout:flex"],
correct:0
},

{
question:"Quelle balise HTML est utilisée pour insérer une image ?",
answers:["<image>","<img>","<src>"], 
correct:1
},

{
question:"Quelle propriété CSS permet d'ajouter un espace intérieur dans un élément ?",
answers:["margin","padding","spacing"],
correct:1
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
question.textContent = "Quiz HTML/CSS terminé"


reponses.innerHTML = ""


//cacher le bouton suivant
btnSuivant.style.display = "none"


// barre de progression à 100% 
progression.style.width = "100%"


// afficher le score obtenu
resultat.textContent = "Score : " + score + " / " + questions.length



// sauvegarder le score
sauvegarder_score("html_css", score, questions.length)
}


// démarrer le quiz
chargerQuestion()