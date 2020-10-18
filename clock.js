const h1 = document.querySelector("h1");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  h1.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();