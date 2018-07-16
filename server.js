const express = require('express');
const mongoose = require('mongoose')
const app = express()

// connecting db
require('./db/db')

const authorController = require('./controllers/author')
app.use ('/authors', authorController)

app.get('/', (req, res) => {
	res.render('index.ejs')
})



app.listen(3000, () => {
	console.log('app is listening on port 3000')
})