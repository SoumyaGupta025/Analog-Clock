
 setClock();

function setClock( ) {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var milliSecond = time.getMilliseconds();

  seconds = seconds+ milliSecond/1000;
  minutes = minutes + seconds/60;
  hours = hours + minutes/60;

  hours = (hours + 11)%12 +1;

  var degHour = (360/12) * hours ;
  var degMinute  = (360/60) * minutes ;
  var degSecond = (370/60) * seconds ;

  document.querySelector(".hour").style.transform =  "rotate(" + degHour + "deg)" ;
  document.querySelector(".minute").style.transform = "rotate(" + degMinute +  "deg)";
  document.querySelector(".second").style.transform = "rotate(" + degSecond +"deg)";

}
// setInterval( function () {
//   setClock(hours, minutes, seconds);
// }, 1000);
setInterval(setClock, 1000);
