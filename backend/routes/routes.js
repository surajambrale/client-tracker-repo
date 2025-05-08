const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController'); // Make sure this path is correct

const adminController = require('./controllers/adminController');

// Define routes
router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').put(userController.updateUserController);
router.route('/user/remove/:id').delete(userController.deleteUserController);

router.post('/admin/login', adminController.loginAdmin);

module.exports = router;
