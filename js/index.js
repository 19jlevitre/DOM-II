// Your code goes here

// slectors///
let buttons = document.querySelectorAll('.btn');

const destination = document.querySelector('.destination');

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
images.scroll(100, 50)
  