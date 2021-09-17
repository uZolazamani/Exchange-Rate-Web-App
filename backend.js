const { request, response } = require('express');
const fetch = require('node-fetch');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server is listening"));
app.use(express.static('public'));

app.use(express.json({limit:'1mb'}));



 app.get('/api/:userParams', async (request, response) =>{
    
    const userParams = request.params.userParams.split(",");
    console.log(userParams);

    const fromCurrency = userParams[0];
    const toCurrency = userParams[1];
    const fromValue = userParams[2];

    console.log(fromCurrency, toCurrency,fromValue);

    console.log("request received"); 
    
    const headers = {
    
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": process.env.API_KEY
        }    
}
const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${fromCurrency}&to=${toCurrency}&amount=${fromValue}`;

    const fetch_response = await fetch(url, headers);
    const json = await fetch_response.json();
    response.json(json);
 });
