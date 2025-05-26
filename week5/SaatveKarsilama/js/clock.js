const myName = prompt("Lütfen isminizi giriniz:");
document.getElementById("myName").textContent = myName || "Misafir";

function showTime() {
  const clock = document.getElementById("myClock");
  const now = new Date();

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let dayName = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  clock.textContent = `${dayName}, ${hour}:${minute}:${second}`;

  setTimeout(showTime, 1000);
}

showTime();
