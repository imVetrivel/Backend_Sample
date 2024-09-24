const express = require('express')
const app = express()
const dbcon = require('./config/db')

require('dotenv').config()

// const dotenv = require('dotenv')
// dotenv.config()

const port = process.env.PORT || 7770

app.get('/',(req,res) => {
    res.json({message:"Welcome"})
})

app.listen(port,() => {
    console.log(`Server running on port : ${port}`);
})