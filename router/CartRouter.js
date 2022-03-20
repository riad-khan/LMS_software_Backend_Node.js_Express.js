const express = require('express');
const router = express.Router();
const {addToCart,getCart,deleteCart} =  require('../controllers/cartController')
const authorization = require('../middlewares/authorization');

router.route('/')
    .post(authorization,addToCart)
    .get(authorization,getCart)

router.route('/:id')
    .delete(authorization,deleteCart)
module.exports = router