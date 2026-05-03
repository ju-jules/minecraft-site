// Sélectionne toutes les images dans la galerie (classe "grille-images")
const images = document.querySelectorAll('.grille-images img');

// On parcourt chaque image une par une
images.forEach(img => {

    // --- ZOOM AVANT : quand la souris passe sur l'image ---
    img.addEventListener('mouseover', () => {

        // Agrandit l'image de 10%
        img.style.transform = 'scale(1.2)';

        // Rend l'animation fluide en 0.3 secondes
        img.style.transition = 'transform 0.3s ease';

        // Met l'image au-dessus des autres pour qu'elle ne soit pas cachée
        img.style.zIndex = '10';

    }); // fin du mouseover

    // --- ZOOM ARRIÈRE : quand la souris repart ---
    img.addEventListener('mouseout', () => {

        // Remet l'image à sa taille normale
        img.style.transform = 'scale(1)';

        // Remet l'image à son niveau normal
        img.style.zIndex = '1';

    }); // fin du mouseout

}); // fin du forEach