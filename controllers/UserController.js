const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validateUser } = require('../models/User');

module.exports.me = async (req, res) => [
    res.send('getting response')
]

module.exports.signUp = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = {};
    user = await User.findOne({ email: req.body.email });

    if (user) return res.status(400).send('user already exists');
    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const result = await user.save();
    const token = await user.getJwt();

    res.send({
        token : token,
        message :'user registered successfully'
    })

}

module.exports.signIn = async(req, res) =>{
    let user ={}

    user = await User.findOne({email: req.body.email});
    if(!user) return res.status(404).send("user doesnot exists")
    const passwordValidation =  await bcrypt.compare(req.body.password, user.password);
    if(!passwordValidation) return res.status(400).send('Invalid password');
    const token = await user.getJwt();
    res.send({
        id:user._id,
        name : user.name,
        email: user.email,
        role: user.role,
        token: token,
        message:'Logged in successfull'
    })
}