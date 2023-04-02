const screenWidth = window.innerWidth;
const popup1 = document.querySelector('.popup1');
const popup2 = document.querySelector('.popup2');
const popup3 = document.querySelector('.popup3');

const popups = [popup1, popup2, popup3];

function displayRandomPopup() {
  popups.forEach(popup => popup.style.display = 'none');

  const randomIndex = Math.floor(Math.random() * popups.length);

  const popup = popups[randomIndex];
  popup.style.display = 'block';

  const timeoutId = setTimeout(() => {
    popup.style.display = 'none';
  }, 10000);

  popup.querySelector('.close-button').addEventListener('click', () => {
    popup.style.display = 'none';
    clearTimeout(timeoutId);
  });
}

if (screenWidth > 1240) {
  setInterval(displayRandomPopup, 10000);
}
