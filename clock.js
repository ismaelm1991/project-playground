const clock = document.getElementById('clock');

function createClock() {
    let dateTime = new Date();
let h = dateTime.getHours();
let m = dateTime.getMinutes();
let s = dateTime.getSeconds();

if (h < 10) {
    h = `0${h}`
}
if (m < 10) {
    m = `0${m}`
}
if ( s < 10) {
    s = `0${s}`
}

clock.innerHTML = `${h}:${m}:${s}`;
}

setInterval(createClock, 1000);



