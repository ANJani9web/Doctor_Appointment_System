const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// SINGLE DOC INFO || POST
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//UPDATE PROFILE || POST
router.post("/updateProfile", authMiddleware, updateProfileController);

// get single doc infor || POST
router.post("/getDoctorById",authMiddleware,getDoctorByIdController);

module.exports = router;