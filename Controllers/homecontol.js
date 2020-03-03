exports.homestuff = (req,res) =>{
    res.render('home',  {
        title:"Money Moves",
        name: "home",
        quote:"If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed."
    });
};


exports.errorstuff= (req,res) =>{
    res.render('404',{
        title:"404",
        name:"ERROR",
        quote:"The only thing a person can ever really do is keep moving forward. Take that big leap forward without hesitation, without once looking back. Simply forget the past and forge toward the future"

    })
}