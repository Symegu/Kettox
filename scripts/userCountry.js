const country = document.querySelector('.user-geo')

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  
    fetch(locationUrl)
      .then(response => response.json())
      .then(locationData => {
        const countryCode = locationData.countryCode;
        const countryUrl = `https://restcountries.com/v2/alpha/${countryCode}`;
  
        fetch(countryUrl)
          .then(response => response.json())
          .then(countryData => {
            const countryName = countryData.name;
            const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=${encodeURIComponent(countryName)}`;
  
            fetch(translateUrl)
              .then(response => response.json())
              .then(translationData => {
                const russianName = translationData[0][0][0];
                console.log(russianName);
                country.innerText = `${russianName || 'Россия'}`;
              })
              .catch(error => console.error(error));
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  });
  