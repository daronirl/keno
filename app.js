'use strict';

const contOne = document.querySelector('.cont--one--whole');
const contTwo = document.querySelector('.cont--two--whole');
const container = document.querySelectorAll('.container');
const boxes = document.querySelectorAll('.box');
const erase = document.querySelector('.button--erase');
const play = document.querySelector('.button--play');
let creditAvail = document.querySelector('.credit--available');
let win = document.querySelector('.win');



// click numbers 1 to 80
boxes.forEach(boxes => boxes.addEventListener('click', () => {
    boxes.classList.toggle('bg-red');
}))

// Click to Erase all your numbers
erase.addEventListener('click', () => {
   
});


play.addEventListener('click', () => {
   
    const play = Math.trunc(Math.random() * 80) + 1;
   
});