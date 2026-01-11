// SKILLS SECTION
const boutons = document.querySelectorAll(".boutonTexte");

boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {
        const texte = bouton.previousElementSibling;
        texte.textContent = bouton.dataset.texte;
    });
});