"use strict";

const selector = document.querySelector('.contacts__selector');
const btnSelector = selector.querySelector('.contacts__selector-button');
const cities = selector.querySelectorAll('.city');
const selectCity = name => {
  cities.forEach(city => {
    if (city.id === name) {
      city.classList.add('city--active');
    } else {
      city.classList.remove('city--active');
    }
  });
};
btnSelector.addEventListener('click', () => {
  selector.classList.toggle('contacts__selector--active');
});
selector.addEventListener('click', evt => {
  const city = evt.target;
  if (city.classList.contains('contacts__select-city-btn')) {
    const cityName = city.textContent;
    const cityID = city.dataset.city;
    selector.classList.remove('contacts__selector--active');
    btnSelector.textContent = cityName;
    selectCity(cityID);
  }
});
const showEvaluation = () => {
  console.log("  \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u0430\u043A\u0435\u0442\u0443. \u0428\u0438\u0440\u0438\u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 768px +24\n  \u0431\u043B\u043E\u043A <header> +2\n  \u0441\u0435\u043A\u0446\u0438\u044F welcome +3\n  \u0441\u0435\u043A\u0446\u0438\u044F about +4\n  \u0441\u0435\u043A\u0446\u0438\u044F service +4\n  \u0441\u0435\u043A\u0446\u0438\u044F prices +4\n  \u0441\u0435\u043A\u0446\u0438\u044F contacts +4\n  \u0431\u043B\u043E\u043A <footer> + 3\n  \u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u0430\u043A\u0435\u0442\u0443. \u0428\u0438\u0440\u0438\u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 380px +24\n  \u0431\u043B\u043E\u043A <header> +2\n  \u0441\u0435\u043A\u0446\u0438\u044F welcome +3\n  \u0441\u0435\u043A\u0446\u0438\u044F about +4\n  \u0441\u0435\u043A\u0446\u0438\u044F service +4\n  \u0441\u0435\u043A\u0446\u0438\u044F prices +4\n  \u0441\u0435\u043A\u0446\u0438\u044F contacts +4\n  \u0431\u043B\u043E\u043A <footer> + 3\n  \u041D\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u0438\u0437 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 320px \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438. \u0412\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F: \u043D\u0435 \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u0442\u0441\u044F \u0438 \u043D\u0435 \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F +15\n  \u043D\u0435\u0442 \u043F\u043E\u043B\u043E\u0441\u044B \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u043F\u0440\u0438 \u0448\u0438\u0440\u0438\u043D\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0442 1440\u0440\u0445 \u0434\u043E 380px +7\n  \u043D\u0435\u0442 \u043F\u043E\u043B\u043E\u0441\u044B \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u043F\u0440\u0438 \u0448\u0438\u0440\u0438\u043D\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0442 380px \u0434\u043E 320\u0440\u0445 +8\n  \u041D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u044D\u043A\u0440\u0430\u043D\u0430 380\u0440\u0445 \u0438 \u043C\u0435\u043D\u044C\u0448\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E +22 (\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u044F \u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 380, \u043D\u043E \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 770px)\n  \u043F\u0440\u0438 \u0448\u0438\u0440\u0438\u043D\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B 380\u0440\u0445 \u043F\u0430\u043D\u0435\u043B\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u0443\u0440\u0433\u0435\u0440-\u0438\u043A\u043E\u043D\u043A\u0430 +2\n  \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u0431\u0443\u0440\u0433\u0435\u0440-\u0438\u043A\u043E\u043D\u043A\u0443 \u043F\u043B\u0430\u0432\u043D\u043E \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E +4\n  \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0441\u0445\u0435\u043C\u0435 \u043C\u0430\u043A\u0435\u0442\u0430 +4\n  \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u043A\u0440\u0435\u0441\u0442\u0438\u043A \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u043F\u043B\u0430\u0432\u043D\u043E \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0443\u0435\u0437\u0436\u0430\u044F \u0437\u0430 \u044D\u043A\u0440\u0430\u043D +4\n  \u0441\u0441\u044B\u043B\u043A\u0438 \u0432 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u043C \u043C\u0435\u043D\u044E \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u043F\u043B\u0430\u0432\u043D\u0443\u044E \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443 \u043F\u043E \u044F\u043A\u043E\u0440\u044F\u043C +4\n  \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0432 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u043C \u043C\u0435\u043D\u044E \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u043F\u043B\u0430\u0432\u043D\u043E \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u0442\u0430\u043A\u0436\u0435 \u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u043C\u0435\u043D\u044E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0435\u0441\u043B\u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u043B\u0438\u043A \u0432\u043D\u0435 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 +4\n\n  \u041C\u043E\u044F \u043E\u0446\u0435\u043D\u043A\u0430 - 85 \u0431\u0430\u043B\u043B\u043E\u0432\n\n  ");
};
const header = document.querySelector('.header--no-js');
const btnHeaderToggle = header.querySelector('.header__btn-toggle');
if (header) {
  header.classList.remove('header--no-js');
  header.classList.add('header--closed');
}
btnHeaderToggle.addEventListener('click', evt => {
  header.classList.toggle('header--closed');
});
const headerNavList = header.querySelector('.header__nav ul');
const headerNav = header.querySelector('.header__nav');
const closeNavbarHandler = evt => {
  if (evt.target.tagName == 'A') {
    btnHeaderToggle.click();
  }
};
headerNavList.addEventListener('click', closeNavbarHandler);
const clickOverlayHandler = evt => {
  if (evt.target != headerNavList && evt.target == headerNav || !header.contains(evt.target)) {
    header.classList.add('header--closed');
  }
};
document.addEventListener('click', clickOverlayHandler);
const pricesList = document.querySelectorAll('.price');
const closePrice = price => {
  // здесь можно анимировать схлопывание аккордена

  price.classList.add('price--closed');
};
const closeAllPrices = () => {
  for (const price of pricesList) {
    closePrice(price);
  }
};

// Нужно переделать svg иконку стрелки и ее переворот
for (const price of pricesList) {
  price.classList.add('price--closed');
  price.addEventListener('click', evt => {
    const title = price.querySelector('.price__title');
    if (evt.target === title) {
      if (price.classList.contains('price--closed')) {
        closeAllPrices();
        price.classList.remove('price--closed');
      } else {
        price.classList.add('price--closed');
      }
    }
  });
}
const btnOrders = document.querySelectorAll('.price__btn-order');
const contacts = document.querySelector('.contacts');
for (let button of btnOrders) {
  button.addEventListener('click', evt => {
    contacts.scrollIntoView();
  });
}
const listCards = document.querySelector('.service__list-services');
const listButtons = document.querySelector('.service__list-buttons');
const cards = listCards.children;
const buttons = listButtons.children;
const MAX_ACTIVE = 2;
let activeButtons = 0;
let focusCards = [];
const blurCards = arrFocusCards => {
  const isFocusName = card => arrFocusCards.some(filterName => card.classList.contains(filterName));
  if (arrFocusCards.length > 0) {
    for (const card of cards) {
      if (!isFocusName(card)) {
        card.style.filter = 'blur(2px)';
        card.style.transition = '0.3s';
      } else {
        card.style.filter = 'none';
      }
    }
  } else {
    for (let card of cards) {
      card.style.filter = 'blur(0px)';
    }
  }
};
const clickButtonHandler = evt => {
  const btn = evt.target;
  const isButton = tag => tag.tagName === 'BUTTON';
  const activeClass = 'service__list-buttons-item--active';
  const findUnactive = () => listButtons.querySelectorAll(".service__list-buttons-item:not(.".concat(activeClass, ")"));
  if (isButton(btn)) {
    if (!btn.classList.contains(activeClass) && activeButtons < MAX_ACTIVE) {
      btn.classList.add(activeClass);
      const filterName = btn.dataset.focus;
      focusCards.push(filterName);
      activeButtons += 1;
    } else if (btn.classList.contains(activeClass)) {
      btn.classList.remove(activeClass);
      focusCards = focusCards.filter(b => b !== btn.dataset.focus);
      activeButtons -= 1;
      btn.blur();
    }
    if (activeButtons === MAX_ACTIVE) {
      [...findUnactive()].map(btn => btn.disabled = true);
    } else {
      [...findUnactive()].map(btn => btn.disabled = false);
    }
    blurCards(focusCards);
  }
};
listButtons.addEventListener('click', clickButtonHandler);