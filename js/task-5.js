function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector('.change-color');
btnElem.addEventListener('click', handleBtnClick);

function handleBtnClick(event) {
  const bodyElem = document.body;
  const textElem = document.querySelector('.color');
  const currentColor = getRandomHexColor();
  bodyElem.style.backgroundColor = currentColor;
  textElem.textContent = currentColor;
  // bodyElem.style.backgroundColor = textElem.textContent = getRandomHexColor();
}

