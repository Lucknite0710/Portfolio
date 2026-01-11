// Gestion de l'accordéon
function toggleCompetence(id) {
    const content = document.querySelector(`#${id} .competence-content`);
    const header = document.querySelector(`#${id} .competence-header`);
    content.classList.toggle('active');
    header.parentElement.classList.toggle('open');
}

// Navigation fluide vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Ouvrir l'accordéon si la section est ciblée
            const competenceId = this.getAttribute('href').substring(1);
            if (competenceId.startsWith('competence')) {
                toggleCompetence(competenceId);
            }
        }
    });
});
