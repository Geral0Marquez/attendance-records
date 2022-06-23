// importamos el modelo que contiene los datos 
const { Registration } = require('../models/registration.model');

// registro de asistencia
const getAllRegistration = async (req, res) => {
	try {
		const registration = await Registration.findAll();

		res.status(200).json({
			status: 'success',
			registration
		});
	} catch (err) {
		console.log(err);
	}
    
};

//registrar por el id
const getRegistrationById = async (req, res) => {
	const { id }=req.params // id que va especificar en la ruta

    const registration = await Registration.findOne({where:{ id }});

    //el empleado existe en nuestra base de datos
    if (! registration) {
        return res.status(404).json({
            status:'error',
            message:'employee not found'
        });
        
    };

    res.status(200).json({
        status:'success',
		registration
    });
};

//se registra la hora de llegada
const checkIn = async (req,res)=>{
    try {
        const { entranceTime} = req.body// nos comunica por medio del body en postman de la api o peticion del cliente
        const newRegister = await Registration.create({
            entranceTime: new Date(entranceTime),
            
        });

        res.status(200).json({
            status:'success',
            newRegister,
            message:'has entered'
            
        });

        
    } catch (err) {
        console.log(err);
    };
};

// se registra la hora de salida
const updateOut = async (req,res)=>{
    const { id } = req.params;
    const { exitTime} = req.body;

    const registration = await Registration.findOne({where : { id }});

    if (!registration) {
        return res.status(404).json({
            status:'Error',
            message:'not found'
        });
    };

    await registration.update({exitTime,status:'Out'});

    res.status(204).json({status:'success'});
};

//registracion cancelada(si el empleado por algún motivo salió antes)
const canceledRegistration = async (req,res)=>{
    const {id}=req.params;

    const registration = await Registration.findOne({where : {id}});

    if (!registration) {
        return res.status(404).json({
            status:'Error',
            message:' not found'
        });
    };

    await registration.update({status:'cancelled'});

    res.status(204).json({status:"success"});

};

module.exports = {
    getAllRegistration,
    getRegistrationById,
    checkIn,
    updateOut,
    canceledRegistration
};