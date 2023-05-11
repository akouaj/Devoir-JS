/*
Ex1 : Création d'un générateur de mot de passe commplexe (chriffres + alphabet en min + maj et caractères spéciaux)
Ex2 : Création d'un convertisseur qui transfrome les degrés Celsus en Fahrenheit et inversement
Ex3 : Création d'un générateur de citations dans une Pop-up/Modal (pop-up activante et désactivable au click)
Ex4 : Création d'un DarkMode, qui varie en mode jour ou nuit l'enseble du style sur votre page
Ex5 : Crée un burger menu, qui au click de son icon s'ouvre et se referme 
*/

//Ex4 : Création d'un DarkMode, qui varie en mode jour ou nuit l'enseble du style sur votre page

// function darkMode qui sélectionnera tout le body
function darkMode() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
  }
// Ajout du darkMode au click
const btndark = document.getElementById('btn-darkmode')
  btndark.addEventListener('click', darkMode);

  // Ajout du lightMode au click
const btnlight = document.getElementById('btn-lightmode')
btnlight.addEventListener('click', darkMode);

// Ex5 : Crée un burger menu, qui au click de son icon s'ouvre et se referme

// Définition de opened
let opened = false

// functuon openmenu qui permet l'affichage et le désaffichage 
function openmenu(){
  opened = !opened
  let slidenav = document.getElementById("slide");

if (opened==true){
  slidenav.classList.add("active");

}else{
  slidenav.classList.remove("active");
}
}

// Ex1 : Création d'un générateur de mot de passe commplexe (chriffres + alphabet en min + maj et caractères spéciaux)

let mdp = document.getElementById("generation");
  
 // funcion generateur de mdp + alphabet maj, min, chiffres et caractères spéciaux aléatoirement
 function generateP() {
  let generateur = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random()
    * str.length + 1);
    generateur += str.charAt(char)
  }
  return generateur;
}

// function générateur de mdp
function nvxmdp() {
  mdp.innerHTML = generateP();
}

// Ex3 : Création d'un générateur de citations dans une Pop-up/Modal (pop-up activante et désactivable au click)

// Définitions du tabbleau citations
const citations = 
[
  "L'amour rends aveugle",
  "Je vous rapelle tout de suite",
  "Le succès c'est tomber sept fois, se relever huit.",
  "L'épargne est l'estomac de la fortune.",
  "Il y a toujours du bon dans la folie humaine."
];

// Séléction du l'élément id change, phrase-citations
const change = document.getElementById("change");
const phrasecitations = document.getElementById("phrase-citations");

// function générateur de citations aléatoirement
function generateCitation() {
  const citationIndex = Math.floor(Math.random() * citations.length);
  return citations[citationIndex];
}

// Modal
let modal = document.getElementById("myModal");

// Bnt pour ouverture modal
let btn = document.getElementById("myBtn");

// function modal
btn.onclick = function() {
  const citation = generateCitation();
  modal.style.display = "block";
  let texte = document.getElementById("modal-texte")
  texte.textContent=citation
}

// Fermeture modal cliquable n'importe ou
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Ex2 : Création d'un convertisseur qui transfrome les degrés Celsus en Fahrenheit et inversement

function convertCelsiusToFahrenheit() {
  
  // Récupération de la valeur de Degre
  const degreInput = document.getElementById("degre");
  const degre = parseFloat(degreInput.value);

  // Calcul de Fahrenheit pour convertion
  const fahrenheit = (degre * 9/5) + 32;

  // Affichage de Fahrenheit convertit
  const fahrenheitOutput = document.getElementById("fahrenheit");
  fahrenheitOutput.textContent = fahrenheit.toFixed();
}
