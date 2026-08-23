const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 2000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
