// Initialisation du compteur de likes


// Sélection du bouton et du compteur
const likeButton = document.getElementById('likeButton');
var likeCountDisplay = document.getElementById('likeCount');

var likeCount = parseInt(likeCountDisplay.textContent);



// Ajout d'un événement au clic sur le bouton
likeButton.addEventListener('click', () => {
    likeCount++; // Incrémentation du compteur
    likeCountDisplay.textContent = likeCount; // Mise à jour de l'affichage
});

let count = 12; // Compteur initial

document.getElementById('likeButton1').addEventListener('click', function() {
    count++; // Incrémente le compteur
    document.getElementById('likeCount1').textContent = '' + count; // Met à jour le texte
});


let likeCount2 = 9;

// Sélection du bouton et du compteur
const likeButton2 = document.getElementById('likeButton2');
const likeCountDisplay2 = document.getElementById('likeCount2');

// Ajout d'un événement au clic sur le bouton
likeButton2.addEventListener('click', () => {
    likeCount2++; // Incrémentation du compteur
    likeCountDisplay2.textContent = likeCount2; // Mise à jour de l'affichage
});

