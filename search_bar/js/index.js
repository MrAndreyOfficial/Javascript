'use strict';

import fetchData from './fetchData.js';
import searchData from './search_bar.js';

document.addEventListener('DOMContentLoaded', async() => {
    const dataUrl = 'https://jsonplaceholder.typicode.com/users';

    const users = await fetchData(dataUrl);

    const cardsContainerElement = document.getElementById('cards');

    for (const user of users) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const cardHeaderElement = document.createElement('div');
        cardHeaderElement.classList.add('card-header');

        const headingElement = document.createElement('h3');
        headingElement.textContent = user.name;

        cardHeaderElement.append(headingElement);
        cardElement.append(cardHeaderElement);

        cardsContainerElement.append(cardElement);
    }

    const searchButtonElement = document.getElementById('search-button');
    const searchInputElement = document.getElementById('search-input');

    const cards = document.getElementsByClassName('card');

    searchButtonElement.addEventListener('click', () => {
        const content = searchInputElement.value.toLowerCase();

        searchData(cards, content);
    });
});
