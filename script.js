const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionArray = [
    "me when:",
    "Normal People: Me:",
    "Big brain",
    "Somewhere"
];

const img = document.getElementById("random-meme");
const h2 = document.getElementById("random-caption");
const button = document.getElementById("generator-button");

button.addEventListener("click", ()=>{
    const randomNumberMeme = Math.floor(Math.random()*memeArray.length);
    img.src = memeArray[randomNumberMeme];

    const randomNumberCaption = Math.floor(Math.random()*captionArray.length);
    h2.innerText = captionArray[randomNumberCaption];
});