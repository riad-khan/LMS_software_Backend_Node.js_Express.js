const joi = require('joi');
const {Schema,model} = require('mongoose');

const categorySchema = Schema({
    name :{
        type: String,
        required :  true,
        unique: true,
    }
},{timestamps : true})
const validateCategory = category =>{
    const schema = joi.object({
        name : joi.string().min(4).max(255).required(),
    })
    return schema.validate(category);
};

module.exports.Category = model('Category',categorySchema);
module.exports.validateCategory  = validateCategory;