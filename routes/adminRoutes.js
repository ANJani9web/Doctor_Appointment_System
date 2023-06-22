const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getAllUsersController, 
    getAllDoctorsController,
    changeAccountStatusController,
    } = require('../controllers/adminCtrl')

// router object
const router = express.Router()

// routes

// GET Method || USERS
router.get('/getAllUsers',authMiddleware,getAllUsersController)

// GET Method || DOCTORS
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

// POST Account status
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)


module.exports = router