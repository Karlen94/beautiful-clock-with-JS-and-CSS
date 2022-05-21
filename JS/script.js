setInterval(() => {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const ampm = document.getElementById("ampm");

  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");

  const hr_dot = document.querySelector(".hr_dot");
  const min_dot = document.querySelector(".min_dot");
  const sec_dot = document.querySelector(".sec_dot");

  let hoursNow = new Date().getHours();
  let minutesNow = new Date().getMinutes();
  let secondsNow = new Date().getSeconds();
  let am = hoursNow >= 12 ? "PM" : "AM";

  // convert 24hr clock to 12hr clock
  if (hoursNow > 12) {
    hoursNow = hoursNow - 12;
  }

  // add zero before single digit number
  hoursNow = hoursNow < 10 ? "0" + hoursNow : hoursNow;
  minutesNow = minutesNow < 10 ? "0" + minutesNow : minutesNow;
  secondsNow = secondsNow < 10 ? "0" + secondsNow : secondsNow;

  hours.innerHTML = hoursNow + "<br><span>Hours</span>";
  minutes.innerHTML = minutesNow + "<br><span>Minutes</span>";
  seconds.innerHTML = secondsNow + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  //   12 hrs clock
  hh.style.strokeDashoffset = 440 - (440 * hoursNow) / 12;
  //   60 minutes
  ss.style.strokeDashoffset = 440 - (440 * secondsNow) / 12;
  //   60 seconds
  mm.style.strokeDashoffset = 440 - (440 * minutesNow) / 12;

  //   360 /12=30
  hr_dot.style.transform = `rotate(${hoursNow * 30}deg)`;
  //   360 /60=6
  min_dot.style.transform = `rotate(${minutesNow * 30}deg)`;
  //   360 /60 =6
  sec_dot.style.transform = `rotate(${secondsNow * 30}deg)`;
});
