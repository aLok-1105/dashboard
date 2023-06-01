const mongoose = require('mongoose');

// const DB = process.env.DATABASE;
const {MOGOURI} = require('../config/keys');


mongoose
	.connect(MOGOURI)
	.then(() => {
		console.log('Connection successful');
	})
	.catch((err) => console.log('No connection'));