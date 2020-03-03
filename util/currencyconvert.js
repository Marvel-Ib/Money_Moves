const request = require('request');

const currency = (base, sym, amt, cb) =>
{
    const key = 'rLhFE6r5HnRRlVfmcTAx'
const url= `https://marketdata.tradermade.com/api/v1/convert?api_key=${key}&from=${base}&to=${sym}&amount=${amt}`;

request({url:url, json:true}, (err, res) =>
{
    if(err)
    {
        cb("Could not connect to internet", undefined);
    }
    else{
        cb(undefined, res.body)

    }})};

module.exports =currency