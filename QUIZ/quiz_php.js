const questions = [

{
question:"Quelle fonction PHP permet de compter les éléments d'un tableau ?",
answers:["length()","count()","size()"],
correct:1
},

{
question:"Quelle fonction permet de supprimer les espaces au début et à la fin d'une chaîne ?",
answers:["strip()","trim()","clean()"],
correct:1
},

{
question:"Quelle superglobale contient les données envoyées par un formulaire en méthode POST ?",
answers:["$_POST","$_GET","$_FORM"],
correct:0
},

{
question:"Que fait la fonction isset() en PHP ?",
answers:[
"Vérifie si une variable existe et n'est pas null",
"Supprime une variable",
"Convertit une variable en string"
],
correct:0
},

{
question:"Quelle fonction permet d'inclure un fichier PHP dans un autre ?",
answers:["include","import","connect"],
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

question.textContent = "Quiz PHP terminé"


reponses.innerHTML = ""


btnSuivant.style.display = "none"

progression.style.width = "100%"


resultat.textContent = "Score : " + score + " / " + questions.length



//sauvegarder le score du quiz PHP
sauvegarder_score("php", score, questions.length)

}


chargerQuestion()