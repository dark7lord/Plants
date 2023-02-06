const header = document.querySelector('.header--no-js');
const btnHeaderToggle = header.querySelector('.header__btn-toggle');

if (header) {
  header.classList.remove('header--no-js');
  header.classList.add('header--closed');
}

btnHeaderToggle.addEventListener('click', (evt) => {
  header.classList.toggle('header--closed');
});

const headerNavList = header.querySelector('.header__nav ul');
const headerNav = header.querySelector('.header__nav');

const closeNavbarHandler = (evt) => {
  if (evt.target.tagName == 'A') {
    btnHeaderToggle.click();
  }
}

headerNavList.addEventListener('click', closeNavbarHandler);

const clickOverlayHandler = (evt) => {
  if (
    (evt.target != headerNavList && evt.target == headerNav)
    || !header.contains(evt.target)
  ) {
    header.classList.add('header--closed');
  }
}

document.addEventListener('click', clickOverlayHandler);
