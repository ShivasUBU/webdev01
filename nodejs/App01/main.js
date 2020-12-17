const axios = require('axios');


const api = 'https://api.exchangeratesapi.io/latest';
axios
.get(api)
.then( function (res){
    console.log(`สกุลเงินพื้นฐานแลกเปลี่ยน ${res.data.base}`);
    console.log(`ต่อไทยบาม ${res.data.rates.THB}`);
});

