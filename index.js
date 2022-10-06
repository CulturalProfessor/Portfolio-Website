var audio = new Audio("audio/song.mp3");
audio.autoplay=true;
audio.play();
audio.volume=.5;
setInterval(() => {
  audio.autoplay = true;
  audio.play();
  audio.volume = 0.5;
}, 200000);

let string = `Vinayak Sharma is a beginner in web-dev, with experience of small personal projects and undying passion for everything internet.
        Vinayak's hunger for knowledge and determination to turn information into action has contributed to his open source journey.he's also a serious weeabo and a gym rat.My strengths are I am self-motivated and a positive thinker,hard worker.My long-term goal is to achieve a good position with my hard work and dedication.Currently, I am pursuing B.Tech from CSE dep.`;
            let str="";
            function sleep(ms) {
              return new Promise((resolve) => setTimeout(resolve, ms));
            }
let node = document.createElement("p");  
async function insert(){ 
    for (let index = 0; index < string.length; index++) {
    let element = string[index];
    let textnode = document.createTextNode(element);
    document.getElementById("para").appendChild(textnode);
    await sleep(75)
}}
insert();

let cardelem = document.getElementsByClassName("card-effect");
console.log(cardelem);
let element=new Array(cardelem.length);
for (let index = 0; index < cardelem.length; index++) {
  element[index] = cardelem[index];
  console.log(element[index]);
}
element[0].addEventListener("mouseover", function () {
  element[0].classList.add("card-elem-style");
  element[0].addEventListener("mouseout", () => {
    element[0].classList.remove("card-elem-style");
  });
});
element[1].addEventListener("mouseover", function () {
  element[1].classList.add("card-elem-style");
  element[1].addEventListener("mouseout", () => {
    element[1].classList.remove("card-elem-style");
  });
});
element[2].addEventListener("mouseover", function () {
  element[2].classList.add("card-elem-style");
  element[2].addEventListener("mouseout", () => {
    element[2].classList.remove("card-elem-style");
  });
});

