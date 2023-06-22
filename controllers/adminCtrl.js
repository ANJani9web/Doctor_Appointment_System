
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

module.exports = {
    getAllDoctorsController,
    getAllUsersController,
}