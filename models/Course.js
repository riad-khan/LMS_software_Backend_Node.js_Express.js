const joi = require('joi');
const {Schema,model} = require('mongoose');

const options ={ }
const courseSchema = Schema({
    name:{
        type :  String,
        required: true,
        unique: true,
    },
    subject:{
        type:Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    details:{
        type: String,
    },
    photo :{
        data: Buffer,
        contentType : String
    },
    price:{
        type: Number,
        required: true,

    }
},{timestamps : true})

const validateCourse = course =>{
    const schema = joi.object({
        name : joi.string().min(4).max(255).required(),
        subject : joi.string().required(),
        details : joi.string().required(),
        price: joi.number().required()
    })

    return schema.validate(course);
};



module.exports.Course = model('Course',courseSchema);
module.exports.validateCourse  = validateCourse;