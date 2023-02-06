const listCards = document.querySelector('.service__list-services');
const listButtons  = document.querySelector('.service__list-buttons');

const cards = listCards.children;
const buttons = listButtons.children;
const MAX_ACTIVE = 2;

let activeButtons = 0;
let focusCards = [];

const blurCards = (arrFocusCards) => {
  const isFocusName = (card) => arrFocusCards
    .some((filterName) => card.classList.contains(filterName))

  if (arrFocusCards.length > 0) {
    for (const card of cards) {
      if (!isFocusName(card)) {
        card.style.filter = 'blur(2px)';
        card.style.transition = '0.3s'
      }
      else {
        card.style.filter = 'none';
      }
    }
  } else {
    for (let card of cards) {
      card.style.filter = 'blur(0px)';
    }
  }
}

const clickButtonHandler = (evt) => {
  const btn = evt.target;
  const isButton = (tag) => tag.tagName === 'BUTTON';
  const activeClass = 'service__list-buttons-item--active';
  const findUnactive = () => listButtons
    .querySelectorAll(`.service__list-buttons-item:not(.${activeClass})`);

  if (isButton(btn)) {
    if (!btn.classList.contains(activeClass)
      && activeButtons < MAX_ACTIVE
    ) {
      btn.classList.add(activeClass);
      const filterName = btn.dataset.focus;
      focusCards.push(filterName);
      activeButtons += 1;
    }
    else if (btn.classList.contains(activeClass)) {
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
}

listButtons.addEventListener('click', clickButtonHandler);
