const request = require('request');


cryptoways = (symbol, convert, amount, cb) =>
{
    let key ='c1ebc8ad-c63f-4456-8298-0940b93b3e0f';
 let url =`https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY=${key}&symbol=${symbol}&convert=${convert}&amount=${amount}`
 request({url:url, json:true}, (err,dat) =>
 {
     if(err)
     {
     return    cb("error internet i guess", undefined);
     }
     cb(undefined,dat.body);


 })

}

module.exports = cryptoways;