const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress-bar');
const navHint = document.getElementById('nav-hint');
let currentSlide = 0;

function updateProgress() {
  const pct = slides.length > 1 ? (currentSlide / (slides.length - 1)) * 100 : 0;
  progressBar.style.width = pct + '%';
}
updateProgress();

// Cacher l'indicateur après 4 secondes
setTimeout(() => navHint.classList.add('hidden'), 4000);

function goTo(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
  updateProgress();
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    goTo(currentSlide + 1);
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault();
    goTo(currentSlide - 1);
  }
});

// Synchroniser avec le scroll natif
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      currentSlide = Array.from(slides).indexOf(e.target);
      updateProgress();
    }
  });
}, { threshold: 0.6 });
slides.forEach(s => io.observe(s));
