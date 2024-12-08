// script.js

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert("Mehr Details über das Bild.");
        });
    });
});
