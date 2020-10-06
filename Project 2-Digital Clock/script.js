const sechand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hrhand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const secs = now.getSeconds();
    const secDegrees = (secs/60)*360 + 90;
    sechand.style.transform = `rotate(${secDegrees}deg)`;

    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + ((secs/60)*6) + 90;
    minhand.style.transform =  `rotate(${minDegrees}deg)`;

    const hrs = now.getHours();
    const hrDegrees =  ((hrs / 12) * 360) + ((mins/60)*30) + 90;
    hrhand.style.transform =  `rotate(${hrDegrees}deg)`;
}

setInterval(setDate,1000);