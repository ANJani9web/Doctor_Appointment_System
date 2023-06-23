const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// Notification of doctors who have applied for doctor || POST
router.post("/get-all-notification",authMiddleware,getAllNotificationController)

// deletion of notification related to doctors || POST
router.post("/delete-all-notification",authMiddleware,deleteAllNotificationController);

// get all doctor list || GET
router.get("/getAllDoctors",authMiddleware,getAllDoctorsController);

module.exports = router;