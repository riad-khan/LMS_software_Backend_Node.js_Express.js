const joi = require('joi');
const { Schema, model } = require('mongoose');

const noticeSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    notice: {
        type: String,
        required: true,
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    }

}, { timestamps: true });

const validateNotice = notice => {
    const schema = joi.object({
        name: joi.string().required(),
        notice: joi.string().required(),
        course: joi.string().required(),
    })

    return schema.validate(notice);
};



module.exports.Notice = model('Notice', noticeSchema);
module.exports.validateNotice = validateNotice;