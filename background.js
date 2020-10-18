const body = document.querySelector("body");

const IMAGE_NUM = 8;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImg");
  body.prepend(image);
}

function generateRandomNum() {
  const randomNum = Math.floor(Math.random() * IMAGE_NUM);
  return randomNum;
}

function init() {
  const randomNumber = generateRandomNum();
  paintImage(randomNumber);
}

init();