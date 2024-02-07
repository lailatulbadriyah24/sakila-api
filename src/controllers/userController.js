// Retrieve data using Sequelizze
const sequelize = require('../../config/sequelize');
const User = require('../models/user');
const bcrypt = require('bcrypt');

async function getUsers(req, res){
    try{
        // Find all users
        const users = await User.findAll();

        // Log the retrieved users
        console.log('Retrieved Users:', users);

        res.json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
    }
}

async function addUsers(req, res){
    try{
        const bodyReq = req.body;
        bodyReq['password'] = await bcrypt.hash(bodyReq.password,10)
        const user = await User.create(bodyReq);
        res.json(user);
    }catch (e) {
        console.error(e);
    }
}

async function editUsers(req, res){
    try{
        const user = await User.update(req.body, {where: {id: req.params.id}});
        res.json(user);
    }catch (e) {
        console.error(e);
    }
}

async function deleteUsers(req, res){
    try{
        const user = await User.destroy({where: {id: req.params.id}});
        res.json(user);
    }catch(e){
        console.error(e);
    }
}

// Call the function to retrieve users
module.exports = {
    getUsers,
    addUsers,
    editUsers,
    deleteUsers,
}