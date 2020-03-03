exports.hometinz =  (req,res) =>{
    res.render('crypto', {
        title: "Crypto",
        name: "crypto",
        quote:"The purpose of a centralized financial system or any other system, is not to exploit people, but to ensure stability in the society"
    });
};

exports.cryptostuff =  (req,res) =>
{
    res.render('crypto2', {
        title: "Crypto",
        name: "crypto",
        quote:"The purpose of a centralized financial system or any other system, is not to exploit people, but to ensure stability in the society"
    });
};