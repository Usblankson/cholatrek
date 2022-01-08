const express = require('express')
const students = require('./module_1/students.json')
const app = express()
 
app.get('/', (req, res) =>{
    res.json({ students})
})
app.listen(4000, (req, res) => {
    console.log('Server listening on port 3000')
})