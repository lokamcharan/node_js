const express = require('express');
const router = express.Router();
const userController = require('../Controller/usercontroller');

router.get('/', userController.getUsers);

module.exports = router;


