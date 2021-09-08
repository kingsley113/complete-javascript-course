'use strict';
//  Document Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// Event Listeners
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModalWindow);
}

btnCloseModal.addEventListener('click', function () {
  hideModalWindow();
});

overlay.addEventListener('click', hideModalWindow);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    hideModalWindow();
});

// Functions
function showModalWindow() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModalWindow() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
