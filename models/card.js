let card = require('../modals/product');
let getAllCard=async(req,res)=>{
    res.send(await card.find().populate('product_id'));
}
let createCard=async(req,res)=>{
    try{
        res.send(await card.create(req,body));
    }
    catch(error){
        res.send(error,400);
    }
}
let deleteCard = async(req,res)=>{
    res.send(await card.findByIdAndDelete(req.params.id));
}
let editCard =async(req,res)=>{
    res.send(await card.findByIdAndUpdateI(req.params.id,req.params.body))
}
module.exports={
    getAllCard,
    createCard,
    deleteCard,
    editCard
}


