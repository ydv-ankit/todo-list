const express = require('express')
const fs = require('fs')
const app = express()

// variables
const PORT = process.env.PORT || 4444

app.get('/', (req, res)=>{
    res.send("server up")
})

app.listen(PORT, ()=>{
    console.log("server running at http://localhost:" + PORT);
})