
// bring all card-container component
const cardContainer = document.querySelectorAll('.card-container');

// add active class on click event
cardContainer.forEach((card) => {
  card.addEventListener('click', () => {
    removeActive();
    card.classList.add('active');
  });
});

// remove active class from all card containers
function removeActive() {
  cardContainer.forEach(card => {
    card.classList.remove('active');
  })
}