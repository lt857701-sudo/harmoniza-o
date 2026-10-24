const videoModal = document.getElementById('video-modal');
const video = document.getElementById('clinic-video');
const videoPoster = document.getElementById('video-poster');
const videoPlaceholder = document.getElementById('video-placeholder');
const openButtons = document.querySelectorAll('[data-open-video]');
const closeButton = document.querySelector('[data-close-video]');
const videoSource = video?.dataset.videoSource?.trim();
let lastFocusedElement = null;

function openVideoModal(event) {
  if (!videoModal) return;

  lastFocusedElement = event.currentTarget;
  videoModal.showModal();

  if (videoSource && video) {
    video.src = videoSource;
    video.hidden = false;
    videoPoster.hidden = true;
    videoPlaceholder.hidden = true;
  }
}

function closeVideoModal() {
  if (!videoModal) return;

  videoModal.close();
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
  }

  lastFocusedElement?.focus();
}

openButtons.forEach((button) => {
  button.addEventListener('click', openVideoModal);
});

closeButton?.addEventListener('click', closeVideoModal);

videoModal?.addEventListener('click', (event) => {
  const bounds = videoModal.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;

  if (outside) closeVideoModal();
});

document.querySelectorAll('details nav a').forEach((link) => {
  link.addEventListener('click', () => link.closest('details')?.removeAttribute('open'));
});

function splitIntoLetters(element) {
  const text = element.textContent;
  if (!text || element.dataset.heroLetters === 'done') return;
  element.dataset.heroLetters = 'done';
  const chars = [...text];
  element.innerHTML = chars
    .map((ch, i) => {
      if (ch === ' ') return '<span style="white-space:pre-wrap"> </span>';
      return `<span class="hero-letter" style="--hero-letter-i:${i}">${ch}</span>`;
    })
    .join('');
}

function initHeroLetterReveal() {
  document.querySelectorAll('.hero-eyebrow-text').forEach(splitIntoLetters);
  document.querySelectorAll('.hero-title-line-champagne, .hero-title-line-ivory').forEach((el) => {
    const text = el.textContent;
    if (!text || el.dataset.heroLetters === 'done') return;
    el.dataset.heroLetters = 'done';
    const chars = [...text];
    el.innerHTML = chars
      .map((ch, i) => {
        if (ch === ' ') return '<span style="white-space:pre-wrap"> </span>';
        return `<span class="hero-letter" style="--hero-letter-i:${i}">${ch}</span>`;
      })
      .join('');
  });
  document.querySelectorAll('.hero-description').forEach((el) => {
    el.classList.add('hero-entrance');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroLetterReveal);
} else {
  initHeroLetterReveal();
}
