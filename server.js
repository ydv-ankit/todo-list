const express = require('express')
const fs = require('fs')
const app = express()

// variables
const PORT = process.env.PORT || 4444

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log("server running at http://localhost:" + PORT);
})