console.log(`\
Вёрстка соответствует макету. Ширина экрана 768px +24
блок <header> +2
секция welcome +3
секция about +4
секция service +4
секция prices +4
секция contacts +4
блок <footer> + 3
Вёрстка соответствует макету. Ширина экрана 380px +24
блок <header> +2
секция welcome +3
секция about +4
секция service +4
секция prices +4
секция contacts +4
блок <footer> + 3
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
нет полосы прокрутки при ширине страницы от 1440рх до 380px +7
нет полосы прокрутки при ширине страницы от 380px до 320рх +8
На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)
при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2
при нажатии на бургер-иконку плавно появляется адаптивное меню +4
адаптивное меню соответствует цветовой схеме макета +4
при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4
при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4

Моя оценка - 85 баллов

`);

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
