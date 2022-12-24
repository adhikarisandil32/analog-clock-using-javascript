$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

displayNumbersOnClock();
setInterval(moveTheClock, 1000);

function moveTheClock(){
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours() >= 12 ? new Date().getHours() - 12 : new Date().getHours();
  
  //angle made in each unit period of time
  let uH = 360/12, uM = 360/60, uS = 360/60;
  
  $(".second-hand").style.setProperty("--rotate" ,uS*seconds+"deg");
  $(".minute-hand").style.setProperty("--rotate:", uM*(minutes+seconds/60)+"deg");
  $(".hour-hand").style.setProperty("--rotate:", uH*(hours+minutes/60+seconds/3600)+"deg");
}

function displayNumbersOnClock(){
  $$(".number").forEach((element, index) => {
    let rotatingAngle = (index+1)*30;
    //height of div containing numbers extend from center to the circumference
    //rotate div to place the number in that location
    element.style.setProperty("--rotate", rotatingAngle+"deg");
    //unrotate the text (span tag) so that it can be read straight
    element.children[0].style.setProperty("--rotate", -rotatingAngle+"deg");
  });
}