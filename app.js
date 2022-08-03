'use strict';

const contOne = document.querySelector('.cont--one--whole');
const contTwo = document.querySelector('.cont--two--whole');
const boxes = document.querySelectorAll('.box');



// click numbers 1 to 40
contOne.addEventListener('click', (e) => {
        e.target.classList.add('bg-red');
        

});

// click numbers 41 to 80
contTwo.addEventListener('click', (e) => {
    e.target.classList.add('bg-red');
    

});

