// Initialisation du compteur de likes
let likeCount = 3;

// Sélection du bouton et du compteur
const likeButton = document.getElementById('likeButton');
const likeCountDisplay = document.getElementById('likeCount');

// Ajout d'un événement au clic sur le bouton
likeButton.addEventListener('click', () => {
    likeCount++; // Incrémentation du compteur
    likeCountDisplay.textContent = likeCount; // Mise à jour de l'affichage
});
