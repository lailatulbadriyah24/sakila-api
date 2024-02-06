const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authorizationMiddleWare = require('../middlewares/authMiddleware');

// router.get('/', controller.getUsers);
router.post('/', controller.addUsers);
router.put('/:id', controller.editUsers);
router.delete('/:id', controller.deleteUsers);
router.get('/', authorizationMiddleWare(['admin']), controller.getUsers);

module.exports = router;