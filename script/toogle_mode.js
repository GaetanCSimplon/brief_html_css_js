/**Toggle mode */
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-ecosystem');
  const body = document.body;

  toggleBtn.addEventListener('click', function () {
    body.classList.toggle('ecosystem-mode');

    // Change le texte du bouton
    if (body.classList.contains('ecosystem-mode')) {
      toggleBtn.textContent = '☀️ Mode Classique';
    } else {
      toggleBtn.textContent = '🌙 Mode Écosystème';
    }
  });
});
