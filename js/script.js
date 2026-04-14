// ===== Utilities =====
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// Year
$('#year').textContent = new Date().getFullYear();

// ===== Theme toggle =====
const themeBtn = $('#themeToggle');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
function applyTheme(mode){
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
}
applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== Active nav highlight =====
const links = $$('.navlink');
const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const id = '#' + e.target.id;
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
        }
    });
}, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
sections.forEach(s => io.observe(s));


// ===== Gestion de la Modale avec Chargement de Fichiers Markdown =====
const modal = $('#projectModal');
const modalBody = $('#modalBody');
const closeModal = $('.close-modal');

$$('.project').forEach(card => {
    card.addEventListener('click', async () => {
        const fileName = card.getAttribute('data-file');
        
        if (!fileName) return;

        // Afficher un état de chargement
        modalBody.innerHTML = '<p class="muted">Chargement du projet...</p>';
        modal.style.display = 'flex';
        document.body.classList.add('modal-open'); // Bloque le scroll du fond

        try {
            // 1. Récupération du fichier .md
            const response = await fetch(fileName);
            if (!response.ok) throw new Error('Fichier introuvable');
            
            const markdownText = await response.text();

            // 2. Conversion Markdown vers HTML via Marked.js
            // On utilise marked.parse() pour le rendu
            modalBody.innerHTML = marked.parse(markdownText);
            
        } catch (error) {
            modalBody.innerHTML = `<p style="color:red">Erreur : Impossible de charger le contenu (${error.message})</p>`;
        }
        
    });
});

// Fermeture
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = 'none';
};

const closeAll = () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Libère le scroll du fond
};

closeModal.onclick = closeAll;
window.onclick = (event) => {
    if (event.target == modal) closeAll();
};