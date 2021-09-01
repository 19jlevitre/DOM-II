// Your code goes here

// slectors///
let buttons = document.querySelectorAll('.btn');

const destination = document.querySelector('.destination');
let nav = document.querySelectorAll('nav a');
let images = document.querySelectorAll('img');

let titlesSmall = document.querySelectorAll('h4');

const titles = document.querySelectorAll('h1');

let paragraphs = document.querySelectorAll('p');
// event listeners///

function titlesPink(event){event.target.style.backgroundColor = "pink";
};
// buttons.addEventListener('click', titlesOff);
buttons.forEach(element => element.addEventListener('click', titlesPink));

function colorBack(event){event.target.style.backgroundColor = "black";};

buttons.forEach(element => element.addEventListener('mouseover', colorBack));





titles.forEach(element => element.addEventListener('dblclick', titlesBig));

function titlesBig(event){

event.target.style.textTransform = 'lowercase';
};

titlesSmall.forEach(element => element.addEventListener ('select', selection));

// function pause(){
//     titlesSmall.target.textTransform = 'caplitalize';
//     log.textContent = 'holy shit';
// }

const input = document.querySelector('input')
    input.addEventListener('select', selection);

    function selection(event){
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `thou hast selected: ${selection}`;
    
}

// window.addEventListener('load', (event) => {
//     titlesSmall.textTransform = 'capitalize';
//   });
window.addEventListener('scroll', (event => {
    console.log('Scrolling....');

}));
  

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

window.addEventListener('resize', reportWindowSize);

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});

input.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.02;
    scale = Math.min(Math.max(.200, scale), 3);
    images.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;

  window.onwheel = zoom;

  const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});

nav.click(function (event) {
    event.preventDefault();
  });