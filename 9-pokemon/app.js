/*
    Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

    После получения, получите информацию о первой его ability по
    ссылке, которая приходит при первом запросе. Там найдите
    описание на английском и выведите в консоль.
*/

'use strict';

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