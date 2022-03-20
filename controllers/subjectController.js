const _ = require('lodash');
const {Subject,validateSubject} = require('../models/Subject');

module.exports.createSubject = async(req, res)=>{
    const {error} = validateSubject(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let subject ={}
    subject = await Subject.findOne({name: req.body.name});
    if(subject) return res.status(400).send('Subject already existed');
    subject = new Subject(_.pick(req.body,['name','category']));
   await subject.save();
    res.send('inserted successfully');
}
module.exports.getSubject = async(req, res)=>{
    const subject = await Subject.find();
    res.send(subject)
}
module.exports.deleteSubject = async(req, res)=>{
    const subject = await Subject.findByIdAndDelete({_id: req.params.id});
    res.send('deleted successfully')
}
module.exports.updateSubject = async(req, res) =>{
    const subject = await Subject.findByIdAndUpdate({_id: req.params.id},{name: req.body.name});
    res.send({
        message: 'updated successfully',
    })
}