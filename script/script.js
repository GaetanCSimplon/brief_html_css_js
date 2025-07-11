document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Empêche l'envoi réel du formulaire

  // Récupération de la valeur des champs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  // Nous permettra d'afficher les messages dans la div formMessage
  const formMessage = document.getElementById('formMessage');

  // Vérification de manque de saisi des champs
  if (!name || !email || !message) {
    formMessage.textContent = "Veuillez remplir tous les champs.";
    formMessage.className = "message error";
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = "Adresse email invalide.";
    formMessage.className = "message error";
    return;
  }

  // Simule un envoi réussi
  formMessage.textContent = "Message envoyé avec succès !";
  formMessage.className = "message success";

  // Réinitialisation du formulaire
  document.getElementById('contactForm').reset();
});

// Fonction de validation d’email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

