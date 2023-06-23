const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getDoctorInfoController } = require('../controllers/doctorCtrl')
// router object
const router = express.Router()

// get single doctor info || POST
router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)

module.exports = router