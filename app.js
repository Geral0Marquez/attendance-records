const express = require('express');


// Routers
const { registrationRouter } = require('./routes/records.routes');

// Utils
const { db } = require('./utils/database.util');

// Init express app
const app = express();

app.use(express.json());

// Define endpoints
// http://localhost:4005/api/v1/registration
app.use('/api/v1/registration', registrationRouter);



db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));


app.listen(4005, () => {
	console.log('Express app running!');
});


