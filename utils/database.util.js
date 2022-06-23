const {Sequelize,DataTypes} = require('sequelize')

//connect to database, conectar con la base de datos
const db = new Sequelize({
	dialect:"postgres",
	host:"localhost",
	username:"postgres",
	password:"gato",
	port: 5432,
	database: "blogs"
});

module.exports= {db,DataTypes}