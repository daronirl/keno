'use strict';

const contOne = document.querySelector('.cont--one--whole');
const contTwo = document.querySelector('.cont--two--whole');
const container = document.querySelectorAll('.container');
const boxes = document.querySelectorAll('.box');
const erase = document.querySelector('.button--erase');
const play = document.querySelector('.button--play');
let creditAvail = document.querySelector('.credit--available');
let win = document.querySelector('.win');




// click numbers 1 to 40
contOne.addEventListener('click', (e) => {
    e.target.classList.toggle('bg-red');

}); 

// click numbers 41 to 80
contTwo.addEventListener('click', (e) => {
    e.target.classList.toggle('bg-red');

});


erase.addEventListener('click', (e) => {
    e.target.classList.remove('bg-red');
});


play.addEventListener('click', () => {
    let minm = 1;
    let maxm = 80;
    const play = Math.trunc(Math.random() * 80) + 1;
    console.log(play);
    
    
});