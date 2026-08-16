const clock = document.querySelector("#clock");

//To update the time after interval
setInterval(() => {
  const date = new Date();
  console.log(date.toLocaleDateString());
  clock.innerHTML = `${date}`;
}, 1000);
