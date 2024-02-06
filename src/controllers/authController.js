const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const {secret} = require('../../config/jwt.json');

exports.login = async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await User.findOne({ where: {username:username}});

        if (!user || !bcrypt.compareSync(password, user.password)){
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const token = jwt.sign({sub: user.id, role: user.role}, secret);
        res.json({token});
    }catch(e){
        res.status(500).json({message: 'Internal server error'});
    }
}