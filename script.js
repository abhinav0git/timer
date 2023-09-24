const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const futureDate = "28 July 2061";

function countdown() {
    const newfutureDate = new Date(futureDate);
    const currentDate = new Date();

    const totalSec = (newfutureDate - currentDate)/1000;

    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec/3600) % 24;
    const mins = Math.floor(totalSec/60) % 60;
    const seconds = Math.floor(totalSec) % 60;
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(seconds);
}

function formatTime(time)
{
    return time < 10 ? "0"+time : time;
}

//initial call
countdown();

setInterval(countdown, 1000);


//dynamic bg with transition

const backgroundContainer = document.querySelector('body');
const images = ['comet1.jpg', 'comet2.jpg', 'comet3.jpg'];

let currentImageIndex = 0;

function changeBackgroundImage() {

    currentImageIndex = Math.floor((Math.random() * 10) % 3);
    const imageUrl = images[currentImageIndex];
    backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
}
changeBackgroundImage();

