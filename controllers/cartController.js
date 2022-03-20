const {Cart} = require('../models/Cart');
const _ = require('lodash');

module.exports.addToCart = async(req, res)=>{
    let {price , course} = _.pick(req.body,['price','course']);

    const cartItem = await Cart.findOne({user : req.user.id , course : course});
    if(cartItem) return res.status(400).send('Course already in cart');

    let newItem = new Cart({
        price : price,
        course : course,
        user :  req.user.id
    })

   const result = await newItem.save();
   res.status(201).send({
    message: "Added To Cart Successfully",
    data: result
});
}

module.exports.getCart = async(req, res)=>{
    const findCart  = await Cart.find({user: req.user.id}).populate('course','name').populate('user','name')
    if(!findCart) return res.status(404).send('No courses on Cart');
    else return res.status(201).send(findCart);
}
module.exports.deleteCart = async(req, res)=>{
    const cartItem  = await Cart.findByIdAndDelete({_id: req.params.id})
    res.send('deleted successfully')
}