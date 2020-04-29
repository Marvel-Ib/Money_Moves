const request = require('request');


cryptoways = (symbol, convert, amount, cb) =>
{
    let key =  process.env.SELL 
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