const pricesList = document.querySelectorAll('.price');


const closePrice = (price) => {
  // здесь можно анимировать схлопывание аккордена

  price.classList.add('price--closed');
}

const closeAllPrices = () => {
  for (const price of pricesList) {
    closePrice(price);
  }
}

// Нужно переделать svg иконку стрелки и ее переворот
for (const price of pricesList) {
  price.classList.add('price--closed');
  price.addEventListener('click', (evt) => {
    const title = price.querySelector('.price__title');


    if (evt.target === title) {
      if (price.classList.contains('price--closed')) {
        closeAllPrices();
        price.classList.remove('price--closed');
      }
      else {
        price.classList.add('price--closed');
      }
    }

  });
}

const btnOrders = document.querySelectorAll('.price__btn-order');
const contacts = document.querySelector('.contacts');

for (let button of btnOrders) {
  button.addEventListener('click', (evt) => {
    contacts.scrollIntoView();
  });
}

