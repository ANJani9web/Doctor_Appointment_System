
const doctorModel = require('../models/doctorModel')
const userModel = require('../models/userModels')

// get all user controller
const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.find({ });
        res.status(200).send({
        success: true,
        message: 'user data list',
        data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        message: `Error in fetching details of users`,
        error
        });
    }
}

// get all doctors controller
const getAllDoctorsController = async (req, res) => {
    try {
        const doctors = await doctorModel.find({});
        res.status(200).send({
        success: true,
        data: doctors,
        message: 'doctors data list',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        message: `Error in fetching details of doctors`,
        error
        });
    }
}


// to change the status of the doctor
const changeAccountStatusController = async(req,res) =>{
      try {
        const {doctorId,status}=req.body
        const doctor = await doctorModel.findByIdAndUpdate(doctorId,{status})
        const user = await userModel.findById({_id:doctor.userId})
        const notifcation = user.notifcation
        notifcation.push({
            type:"Doctor Account Status Changed",
            message:`Your doctor account status is ${status}`,
            onClickPath:"/notification"
        })
        user.isDoctor = status === "approved" ? true : false
        await user.save()
        res.status(201).send({
            success:true,
            message: "Status of Doctors updated successfully",
            data:doctor
        })
      } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error in updating the status of Doctors",
            error
        })
      }
}
module.exports = {
    getAllDoctorsController,
    getAllUsersController,
    changeAccountStatusController
}