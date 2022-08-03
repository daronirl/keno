'use strict';

const contOne = document.querySelector('.cont--one--whole');
const contTwo = document.querySelector('.cont--two--whole');
const boxes = document.querySelectorAll('.box');
const erase = document.querySelector('.button--erase');



// click numbers 1 to 40
contOne.addEventListener('click', (e) => {
    e.target.classList.toggle('bg-red');
      
}); 

// click numbers 41 to 80
contTwo.addEventListener('click', (e) => {
    e.target.classList.toggle('bg-red');

});


erase.addEventListener('click', () => {
    
});

