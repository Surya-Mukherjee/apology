(() => {
  const letter = document.getElementById('letter');
  const paper = document.getElementById('letterPaper');
  const more = document.getElementById('letterMore');
  const readMore = document.getElementById('readMore');
  document.getElementById('openLetter').addEventListener('click', () => {
    letter.scrollIntoView({ behavior: 'smooth' });
    paper.classList.add('paper-open');
  });
  readMore.addEventListener('click', () => {
    more.classList.remove('hidden');
    readMore.classList.add('hidden');
    paper.classList.add('paper-open');
  });
  document.querySelectorAll('.memory-photo img').forEach((img) => {
    const placeholder = img.nextElementSibling;
    const showPlaceholder = () => { img.style.display = 'none'; placeholder.style.display = 'flex'; };
    const hidePlaceholder = () => { img.style.display = 'block'; placeholder.style.display = 'none'; };
    img.addEventListener('error', showPlaceholder);
    img.addEventListener('load', hidePlaceholder);
    if (img.complete) img.naturalWidth ? hidePlaceholder() : showPlaceholder();
  });
  document.querySelectorAll('.reason-card').forEach((card) => {
    card.addEventListener('click', () => {
      const open = card.classList.toggle('is-open');
      card.querySelector('.note-copy > span').textContent = open ? card.dataset.reason : 'a tiny thing I want you to know…';
      card.querySelector('.note-icon').textContent = open ? '♥' : '♧';
      card.querySelector('.note-plus').textContent = open ? '♡' : '+';
    });
  });
  const finalButton = document.getElementById('finalButton');
  const finalNote = document.getElementById('finalNote');
  finalButton.addEventListener('click', () => {
    const open = finalNote.classList.toggle('hidden') === false;
    document.getElementById('finalButtonText').textContent = open ? 'hide my little note' : 'one last tiny note';
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