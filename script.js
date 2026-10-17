
(() => {
  const letter = document.getElementById('letter');
  const paper = document.getElementById('letterPaper');
  const more = document.getElementById('letterMore');
  const readMore = document.getElementById('readMore');

  // Open the letter
  document.getElementById('openLetter').addEventListener('click', () => {
    letter.scrollIntoView({ behavior: 'smooth' });
    paper.classList.add('paper-open');
  });

  // Reveal the rest of the letter
  readMore.addEventListener('click', () => {
    more.classList.remove('hidden');
    readMore.classList.add('hidden');
    paper.classList.add('paper-open');
  });

  // Handle memory images and placeholders
  document.querySelectorAll('.memory-photo img').forEach((img) => {
    const placeholder = img.nextElementSibling;

    function updateImage() {
      if (!placeholder) return;

      if (img.naturalWidth > 0) {
        img.style.display = 'block';
        placeholder.style.display = 'none';
      } else {
        img.style.display = 'none';
        placeholder.style.display = 'flex';
      }
    }

    img.addEventListener('load', updateImage);
    img.addEventListener('error', updateImage);

    if (img.complete) {
      updateImage();
    }
  });

  // Expand and collapse reason cards
  document.querySelectorAll('.reason-card').forEach((card) => {
    card.addEventListener('click', () => {
      const open = card.classList.toggle('is-open');

      const note = card.querySelector('.note-copy > span');
      const icon = card.querySelector('.note-icon');
      const plus = card.querySelector('.note-plus');

      if (note) {
        note.textContent = open
          ? card.dataset.reason
          : 'a tiny thing I want you to know…';
      }

      if (icon) {
        icon.textContent = open ? '♥' : '♧';
      }

      if (plus) {
        plus.textContent = open ? '♡' : '+';
      }
    });
  });

  // Reveal the final note
  const finalButton = document.getElementById('finalButton');
  const finalNote = document.getElementById('finalNote');

  finalButton.addEventListener('click', () => {
    const open = finalNote.classList.toggle('hidden') === false;

    document.getElementById('finalButtonText').textContent = open
      ? 'hide my little note'
      : 'one last tiny note';

    if (open) {
      const burst = document.createElement('div');

      burst.className = 'heart-burst';
      burst.setAttribute('aria-hidden', 'true');
      burst.textContent = '♡ ♥ ♡ ♥ ♡';

      finalButton.parentElement.appendChild(burst);

      setTimeout(() => burst.remove(), 1000);
    }
  });
})();
