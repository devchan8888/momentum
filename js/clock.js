const clock = document.querySelector('#clock');
const calendar = document.querySelector('#calendar');

function getTime() {
  const time = new Date();
  const month = String(time.getMonth()).padStart(2, '0');
  const date = String(time.getDate()).padStart(2, '0');

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  calendar.innerText = `${month}월 ${date}일`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
