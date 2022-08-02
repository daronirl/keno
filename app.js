'use strict';
const contOne = document.querySelector('.cont--one--whole');
const boxes = document.getElementById('box');

contOne.addEventListener('click', () => {
    boxes.style.backgroundColor = 'red';

});

