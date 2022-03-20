const _ = require('lodash');
const { Notice, validateNotice } = require('../models/Notice');

module.exports.createNotice = async (req, res) => {
    const { error } = validateNotice(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let notice = {}
    notice = await Notice.findOne({ name: req.body.name });
    if (notice) return res.status(201).send('Notice with this Topic already exists');
    notice = new Notice(_.pick(req.body, ['name', 'notice', 'course']));
    await notice.save();
    return res.status(200).send('notice created successfully')
}

module.exports.getCourseNotices = async (req, res) => {
    const courseId = req.params.id;
    let courseNotice = {};
    courseNotice = await Notice.find({ course: courseId }).populate('course', 'name');
    if (!courseNotice) return res.status(404).send('no notice found');
    else return res.status(201).send(courseNotice);
}