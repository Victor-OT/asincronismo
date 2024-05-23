const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //importa el módulo
const API = 'https://api.escuelajs.co/api/v1'; //constante que contiene la URL bas de la API que se va a consumir

function fetchData(urlApi, callback) {  //función que toma dos argumentos: urlApi que es la api a consultar, y callback que es la funcion que seejecutará cuado se complete la solicitud http
    let xhttp = new XMLHttpRequest(); //Instancia del objeto XMLHttpRequest, realizará solicitud http

    xhttp.open('GET', urlApi, true); //configura la solicitud HTTP. el primer argumento es GET, el segundo la url de la api, y booleano que indica si es asíncrona
    xhttp.onreadystatechange = function (event) { //Constrolador de eventos, se activa cada que cambia el estado de la solicitud http
        if (xhttp.readyState === 4) { //Comprueba si el estado de la solicitud ya se completó
            if(xhttp.status === 200)  { //verificta si se completó con éxito
                callback(null, JSON.parse(xhttp.responseText)); //llama a la función callback, el argumento null indica que no hubo error, json.parse(xhttp.responseText) hace conversión de texto y lo pasa como argumento
            }
            else { //si xhttp.status no es 200, significa que no se completó, y lanzará un error
                const error = new Error('Error' + urlApi); //crea una instancia de Error, contiene el mensaje error y la url de la Api
                return callback(error, null); //la función retorna el resultado del callback, toma el error generado y null como argumentos, null indica que no se obvtuvo respuesta
            }      
        }
    }
    xhttp.send(); //esta línea manda la solicitud HTTP al servidor
}

fetchData(`${API}/products`, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1[0]);    
            console.log(data2.title);    
            console.log(data3.name);    
        });
    });
});