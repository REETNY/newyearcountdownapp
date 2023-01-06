let anyYear = new Date().getFullYear();
let add1Year = (anyYear + 1);
const newYears = `1 Jan ${add1Year}`;

const month = new Date().getMonth() + 1;
const date = new Date().getDate();
console.log(month, date);

const body = document.querySelector(".body");
const appBody = document.querySelector(".countdown-body");
const main = document.querySelector("main");

const dayEl = document.querySelector(".d-day");
const hourEl = document.querySelector(".d-hour");
const minEl = document.querySelector(".d-min");
const secEl = document.querySelector(".d-sec");

const dayLetter = document.querySelector(".dayel");
const hourLetter = document.querySelector(".hourel");
const minLetter = document.querySelector(".minel");
const secLetter = document.querySelector(".secel");


if(month === 1 && date === 1){
    happyNewYear();
}else{
    // initial call
    countDown();
    setInterval(countDown, 1000)
}


function happyNewYear() {
    body.style.backgroundImage = "url(/img/happy.jpg)"
    appBody.innerHTML = ``;
    const container = document.createElement("div");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");

    container.classList.add("newyear-cont");
    span.classList.add("span1");
    span2.classList.add("span2");
    span3.classList.add("span2");

    span2.innerHTML = `
        Happy New Year
    `;

    container.appendChild(span2);

    appBody.appendChild(container);

    setInterval(cardDesign, 2500);
}


function cardDesign() {

    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");

    span1.classList.add("card");
    span2.classList.add("card");
    span3.classList.add("card");
    span4.classList.add("card");

    span1.classList.add("span_1");
    span2.classList.add("span_2");
    span3.classList.add("span_3");
    span4.classList.add("span_4");

    span1.style.left = numGene1(90) + "vw";
    span1.style.animationDuration = Math.random() * 2.9 + 10 + "s";

    span2.style.left = numGene2(90) + "vw";
    span2.style.animationDuration = Math.random() * 2.9 + 10 + "s";

    span3.style.left = numGene3(90) + "vw";
    span3.style.animationDuration = Math.random() * 2.9 + 10 + "s";

    span4.style.left = numGene4(90) + "vw";
    span4.style.animationDuration = Math.random() * 2.9 + 10 + "s";

    main.appendChild(span1);
    main.appendChild(span2);
    main.appendChild(span3);
    main.appendChild(span4);

    function erase() {
        main.removeChild(span1);
        main.removeChild(span2);
        main.removeChild(span3);
        main.removeChild(span4);
    }

    setTimeout(erase,10000)
}


function numGene1(num) {
    return (Math.random() * num);
}

function numGene2(num) {
    return (Math.random() * num);
}

function numGene3(num) {
    return (Math.random() * num);
}

function numGene4(num) {
    return (Math.random() * num);
}



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


function formatNum(num){
    return num < 10 
    ? `0${num}`
    : `${num}`
}