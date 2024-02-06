const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.getUsers);
router.post('/', controller.addUsers);
router.put('/:id', controller.editUsers);
router.delete('/:id', controller.deleteUsers);

module.exports = router;