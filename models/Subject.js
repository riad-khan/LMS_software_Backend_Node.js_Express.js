const joi = require('joi');
const {Schema,model} = require('mongoose');

const subjectSchema = Schema({
    name:{
        type: String,
        required : true,
        unique: true,
    },
    category:{
        type : Schema.Types.ObjectId,
        ref:'Category',
        required : true,
    }
},{timestamps : true})
const validateSubject = subject =>{
    const schema = joi.object({
        name : joi.string().min(3).max(255).required(),
        category : joi.string().min(3).max(200).required(),
    })
    return schema.validate(subject);
};

module.exports.Subject = model('Subject',subjectSchema);
module.exports.validateSubject  = validateSubject;