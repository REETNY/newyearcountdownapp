let anyYear = new Date().getFullYear();
let add1Year = (anyYear + 1);
const newYears = `1 Jan ${add1Year}`;

const dayEl = document.querySelector(".d-day");
const hourEl = document.querySelector(".d-hour");
const minEl = document.querySelector(".d-min");
const secEl = document.querySelector(".d-sec");

const dayLetter = document.querySelector(".dayel");
const hourLetter = document.querySelector(".hourel");
const minLetter = document.querySelector(".minel");
const secLetter = document.querySelector(".secel");

function countDown(){
    const newYearsDate = new Date(newYears);
    let nYD = newYearsDate.getTime();

    const currentDate = new Date();
    let cD = currentDate.getTime();

    let totalSeconds = (nYD - cD) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    dayEl.textContent = days;
    hourEl.textContent = formatNum(hours);
    minEl.textContent = formatNum(min);
    secEl.textContent = formatNum(secs);

    days <= 1 ? dayLetter.textContent = `Day`: dayLetter.textContent = `Days`;
    hours <= 1 ? hourLetter.textContent = `Hour`: hourLetter.textContent = `Hours`;
    min <= 1 ? minLetter.textContent = `Minute`: minLetter.textContent = `Minutes`;
    secs <= 1 ? secLetter.textContent = `Second`: secLetter.textContent = `Seconds`

    
}
countDown()
// setInterval(countDown, 1000)

setInterval(countDown, 1000)


function formatNum(num){
    return num < 10 
    ? `0${num}`
    : `${num}`
}