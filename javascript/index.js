const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0)
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1)

}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0)
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle("stop")


  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP"
    chronometer.startClick(printTime)

  } else {
    btnLeft.innerHTML = "START"
    chronometer.stopClick()
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.classList.toggle("split")

  if (btnRight.innerHTML === "RESET") {
    btnRight.innerHTML = "SPLIT"
    chronometer.resetClick()
    printTime()
  } else {
    btnRight.innerHTML = "RESET"
    chronometer.splitClick()
  }

});