const selector = document.querySelector('.contacts__selector');
const btnSelector = selector.querySelector('.contacts__selector-button');
const cities = selector.querySelectorAll('.city');

const selectCity = (name) => {
  cities.forEach((city) => {
    if (city.id === name) {
      city.classList.add('city--active');
    }
    else {
      city.classList.remove('city--active');
    }
  });
}

btnSelector.addEventListener('click', () => {
  selector.classList.toggle('contacts__selector--active')
});

selector.addEventListener('click', (evt) => {
  const city = evt.target;

  if (city.classList.contains('contacts__select-city-btn')) {
    const cityName = city.textContent;
    const cityID = city.dataset.city;

    selector.classList.remove('contacts__selector--active');
    btnSelector.textContent = cityName;
    selectCity(cityID);
  }
});
