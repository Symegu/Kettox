document.addEventListener('mouseleave', () => {
  const popup = document.querySelector('.popup');
  popup.style.display = 'flex';

  const endTime = new Date().setHours(23, 59, 59);
  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const currentTime = new Date();
    const diff = endTime - currentTime;

    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    const hoursText = document.querySelector(".hours-text");
    const minutesText = document.querySelector(".minutes-text");
    const secondsText = document.querySelector(".seconds-text");

    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    function getHoursText(hours) {
      if (hours == 1) {
        return 'час';
      }
      return 'часов';
    }

    function getMinutesText(minutes) {
      if (minutes % 10 == 1 && minutes != 11) {
        return 'минута';
      } else if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes)) {
        return 'минуты';
      } else {
        return 'минут';
      }
    }

    function getSecondsText(seconds) {
      if (seconds % 10 == 1 && seconds != 11) {
        return 'секунда';
      } else if ([2, 3, 4].includes(seconds % 10) && ![12, 13, 14].includes(seconds)) {
        return 'секунды';
      } else {
        return 'секунд';
      }
    }

    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    hoursText.innerText = getHoursText(hoursLeft);
    minutesText.innerText = getMinutesText(minutesLeft);
    secondsText.innerText = getSecondsText(secondsLeft);

  }

  // const hidePopup = setTimeout(() => {
  //   popup.style.display = 'none';
  //   clearInterval(timerInterval);
  // }, 10000);

  document.addEventListener('click', (event) => {
    if (event.target !== popup) {
      popup.style.display = 'none';
      // clearInterval(hidePopup);
      clearInterval(timerInterval);
    }
  });
});