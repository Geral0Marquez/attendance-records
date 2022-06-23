const express = require('express');

// Controllers
const {
	getAllRegistration,
	checkIn,
	getRegistrationById,
	updateOut,
	canceledRegistration
} = require('../controllers/records.controller');

const registrationRouter = express.Router();


registrationRouter.get('/', getAllRegistration);//bien

registrationRouter.post('/', checkIn); //bien

registrationRouter.get('/:id', getRegistrationById);

registrationRouter.patch('/:id', updateOut);

registrationRouter.delete('/:id',canceledRegistration);

module.exports = { registrationRouter };