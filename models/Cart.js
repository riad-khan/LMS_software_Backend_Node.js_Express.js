const {Schema, model} = require('mongoose');

const cartSchema = Schema({
    course:{
        type: Schema.Types.ObjectId,
        ref:'Course',
        required: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required : true,
    },
    price: Number,
})

module.exports.cartSchema = cartSchema
module.exports.Cart  = model('Cart',cartSchema);