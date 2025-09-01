/*
    Сделайте функцию получения координат пользователя, используя
    Geolocation API, но преобразовав его в Promise.

    navigator.geolocation.getCurrentPosition((position) => {
        doSomething(position.coords.latitude, position.coords.longtitude);
    });
*/

'use strict';

function getUserCoordinates() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation API не поддерживается в этом браузере"));
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => reject(error)
        );
    });
}

getUserCoordinates().then((data) => console.log('coords: ', data));