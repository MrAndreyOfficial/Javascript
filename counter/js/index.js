'use strict';

import { saveData, loadData } from "./storage.js";

const key = 'count';

let count = parseInt(loadData(key)) || 0;

const counterElement = document.getElementById('counter');

updateDisplay();

function increase() {
    ++count;
    updateDisplay();
}

function decrease() {
    --count;
    updateDisplay();
}

function updateDisplay() {
    counterElement.textContent = count;
    saveData(key, count);
}

const increaseButtonElement = document.getElementById('increase-button');
const decreaseButtonElement = document.getElementById('decrease-button');

increaseButtonElement.addEventListener('click', increase);
decreaseButtonElement.addEventListener('click', decrease);
