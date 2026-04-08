const questions = [

{
question:"Quelle requête retourne le nombre total d'étudiants par filière ?",
answers:[
"SELECT filiere, COUNT(*) FROM etudiants GROUP BY filiere",
"SELECT COUNT(filiere) FROM etudiants",
"SELECT filiere FROM etudiants COUNT(*)"
],
correct:0
},

{
question:"Quelle clause est utilisée pour filtrer les résultats d'une agrégation ?",
answers:["WHERE","HAVING","FILTER"],
correct:1
},

{
question:"Quelle jointure retourne uniquement les lignes présentes dans les deux tables ?",
answers:["LEFT JOIN","INNER JOIN","FULL JOIN"],
correct:1
},

{
question:"Que fait la requête suivante ? SELECT DISTINCT ville FROM clients",
answers:[
"Supprime la colonne ville",
"Retourne les villes uniques",
"Trie les villes par ordre alphabétique"
],
correct:1
},

{
question:"Quelle requête supprime toutes les lignes d'une table sans supprimer la structure ?",
answers:[
"DROP TABLE clients",
"DELETE FROM clients",
"REMOVE TABLE clients"
],
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

question.textContent="Quiz SQL terminé"

reponses.innerHTML=""

btnSuivant.style.display="none"

progression.style.width="100%"

resultat.textContent="Score : "+score+" / "+questions.length

}

/* démarrer le quiz */

chargerQuestion()