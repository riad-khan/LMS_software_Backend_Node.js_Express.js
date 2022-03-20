const _ = require('lodash');
const { Course, validateCourse } = require('../models/Course');
const formidable = require('formidable');
const fs = require('fs');


module.exports.createCourse = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(400).send('something Wrong');
        const { error } = validateCourse(_.pick(fields, ['name', 'subject', 'details', 'price',]));
        if (error) return res.status(400).send(error.details[0].message);
        const course = new Course(fields);

        if (files.photo) {
            fs.readFile(files.photo.path, (err, data) => {
                if (err) return res.status(400).send("problem with image upload")
                course.photo.data = data,
                course.photo.contentType = files.photo.type
                course.save((err, result) => {
                    if (err) return res.status(500).send('internal server error')
                    else return res.status(201).send({
                        message: "Product created Successfully",
                    })
                })
            })
        }
    })
}
module.exports.getCourse = async(req, res) =>{
    const course = await Course.find().select({photo:0}).populate('subject' ,'name')
    res.send(course)
}