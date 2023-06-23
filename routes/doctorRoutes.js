const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  updateStatusController,
  doctorAppointmentsController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// SINGLE DOC INFO || POST
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//UPDATE PROFILE || POST
router.post("/updateProfile", authMiddleware, updateProfileController);

// get single doc infor || POST
router.post("/getDoctorById",authMiddleware,getDoctorByIdController);

//GET Appointments
router.get("/doctor-appointments",authMiddleware,doctorAppointmentsController);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;