setInterval(function() {
  let date = new Date();
  let hrTime = date.getHours();
  let minTime = date.getMinutes();
  let secTime = date.getSeconds();
  let dayTime = date.getDay();
  let monthTime = date.getMonth();
  let yearTime = date.getYear();

  let strDate = date.toDateString();

  let minTime0 = minTime.toString();
  let secTime0 = secTime.toString();

  if (minTime0.length < 2) {
    minTime = "0" + minTime;
  }

  if (secTime0.length < 2) {
    secTime = "0" + secTime;
  }

  document.getElementById("hrClock").innerHTML = hrTime;
  document.getElementById("minClock").innerHTML = minTime;
  document.getElementById("secClock").innerHTML = secTime;
  document.getElementById("myDate").innerHTML = strDate;

  if (hrTime < 12) {
    document.getElementById("greet").innerHTML =
      "Good morning there, have you had breakfast yet?";
  }
  if (hrTime > 11 && hrTime < 20) {
    document.getElementById("greet").innerHTML =
      "Good afternoon there, have you had lunch yet?";
  }
  if (hrTime > 19) {
    document.getElementById("greet").innerHTML = "Good evening there,";
  }
}, 1000);
