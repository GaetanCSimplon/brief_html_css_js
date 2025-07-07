/*Section Carrousel */ 

const slide = document.querySelector('.carrousel-slide')
const slide_img = document.querySelectorAll('.carrousel-slide img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let compteur = 0;
// Mise à jour de la position du carrousel
function updateCarrousel() {
  slide.style.transform = `translateX(-${compteur * 100}%)`;
}
// Défilement à droite

next.addEventListener('click', () => {
  compteur = (compteur + 1) % slide_img.length;
  slide.style.transform = `translateX(-${compteur * 100}%)`;
}
)

// Défilement à gauche

prev.addEventListener('click', () => {
  compteur = (compteur - 1 + slide_img.lenght) % slide_img.length;
  slide.style.transform = `translateX(-${compteur * 100}%)`;
})
