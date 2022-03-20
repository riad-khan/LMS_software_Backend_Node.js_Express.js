const _ = require('lodash');
const {Category,validateCategory} = require('../models/Category');

module.exports.createCategory = async(req, res) =>{
    const {error} = validateCategory(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let category ={}
    category = await Category.findOne({name: req.body.name});
    if(category) return res.status(401).send('category already exists');
    category = new Category(_.pick(req.body,['name']));
    await category.save();
    res.send({
        message: 'category created successfully'
    })
}
module.exports.getCategory = async(req, res)=>{
    const category = await Category.find();
    res.send(category)
}
module.exports.deleteCategory = async(req, res)=>{
    const category = await Category.findByIdAndDelete({_id: req.params.id});
    res.send('deleted successfully')
}
module.exports.updateCategory = async(req, res) =>{
    const category = await Category.findByIdAndUpdate({_id: req.params.id},{name: req.body.name});
    res.send({
        message: 'Category updated successfully',
    })
}