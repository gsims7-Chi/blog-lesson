const mongoose = require('mongoose');


// create db and connect
mongoose.connect('mongodb://localhost/blog')

mongoose.connection.on('connected', () => {
	console.log('mongoose is connected');
})
mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose error');
})
