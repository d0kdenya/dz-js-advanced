/*
    Перепишите предыдущий пример на цепочку Promise

    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
    request.send();

    request.addEventListener('load', function() {
        const { abilities } = JSON.parse(this.responseText);
        
        const abilityURL = abilities[0].ability.url;

        const request = new XMLHttpRequest();
        request.open('GET', abilityURL);
        request.send();

        request.addEventListener('load', function() {
            const { effect_entries } = JSON.parse(this.responseText);
            const effect = effect_entries.find((effect_entry) => effect_entry.language.name === 'en');
            console.log(effect);
        })
    })
*/

'use strict';

function getData(url, errorMessage, method = 'GET') {
    return fetch(url, {
        method
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMessage} : ${response.status}`);
            }
            return response.json();
        })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Ошибка загрузки абилок')
    .then(({abilities}) => getData(abilities[0].ability.url, 'Ошибка загрузки описания абилки'))
    .then(({ effect_entries }) => {
        const effect = effect_entries.find((effect_entry) => effect_entry.language.name === 'en');
        console.log(effect);
    });