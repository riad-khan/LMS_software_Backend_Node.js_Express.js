const express = require('express');
const router = express.Router();
const {createCategory,getCategory,deleteCategory,updateCategory} = require('../controllers/CategoryController');
const authorization = require('../middlewares/authorization');

router.route('/create-category')
    .post(authorization,createCategory)

router.route('/')
    .get(getCategory)

    router.route('/:id')
    .delete(authorization,deleteCategory)
    .put(authorization,updateCategory)
module.exports = router