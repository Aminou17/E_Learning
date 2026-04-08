/*** QUIZ JS ***/
let current_user = JSON.parse(localStorage.getItem("current_user"));


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
question:"Que fait la méthode array.filter() ?",
answers:[
"Supprime définitivement les éléments du tableau",
"Retourne un nouveau tableau avec les éléments qui respectent une condition",
"Transforme chaque élément du tableau"
],
correct:1
},

{
question:"Quelle est la portée d'une variable déclarée avec let ?",
answers:[
"Portée globale seulement",
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

// si l'utilisateur n'est pas connecté
if(!current_user){

alert("Connectez-vous pour répondre au quiz");

return;

}

// vérifier si une réponse est choisie 
if(reponseChoisie === null) return

/* vérifier la bonne réponse */

if(reponseChoisie === questions[questionActuelle].correct){
score++
}

questionActuelle++

// charger la prochaine question
if(questionActuelle < questions.length){
chargerQuestion()
}else{
finQuiz()
}

})






function finQuiz(){

// afficher le message de fin
question.textContent = "Quiz JavaScript terminé"


// vider les réponses
reponses.innerHTML = ""


// cacher le bouton suivant
btnSuivant.style.display = "none"


//la barre de progression à 100% */
progression.style.width = "100%"


// afficher le score
resultat.textContent = "Score : " + score + " / " + questions.length



sauvegarder_score("javascript", score, questions.length)
}


// démarrer le quiz 
chargerQuestion()