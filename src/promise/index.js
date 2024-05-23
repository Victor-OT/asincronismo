const promise = new Promise(function(resolve, reject) {
    resolve('Correcto!')
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve('We have enough cows');
    }
    else {
        reject('Not enough cows');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Esto es todo'))