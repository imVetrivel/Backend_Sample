const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://vetrivel:12345@cluster123.svuzc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster123")

const connection = mongoose.connection;

connection.on('connected',()=>
{
	console.log('DB Conected')
})

connection.on('error',()=>{
	console.log('Error')
})

module.exports = mongoose