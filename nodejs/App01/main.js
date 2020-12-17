const ax = require('axios');
ax.get('https://api.exchangeratesapi.io/latest')
    .then(function(res) {
        console.log(`สกุล ${res.data.base}`);
        console.log(`ต่อไทยบาท ${res.data.rates.THB}`)
    });