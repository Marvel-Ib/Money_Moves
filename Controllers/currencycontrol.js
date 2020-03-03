exports.currencyhome =  (req,res) =>{
    res.render('currency', {
        title:"Currency",
        name:"currency",
        quote:`Don’t tell me where your priorities are. 
Show me where you spend your money and I’ll tell you what they are`
    });
};

exports.currencyconvert =  (req,res) =>
{
    convertamt(req.query.base,req.query.symbol,req.query.amount, (err, response) =>
    {
     //http://localhost:9000/currency/convert?base=USD&symbol=CAD&amount=10000
        if(err)
        {
            return({err: "error"})
        }
        res.send(response);
    })
    
}

exports.currencystart =(req,res) =>{
    res.render('currency2', {
        title:"Currency",
        name:"currency",
        quote:`Don’t tell me where your priorities are. 
Show me where you spend your money and I’ll tell you what they are`
    });
};