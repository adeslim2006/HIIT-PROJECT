const express = require('express')
const app = express()
const mongoose = require('./clubdb/clubdbmodel/mongoose')
const myset = require('./clubdb/clubdbmodel/set')
const member = require('./clubdb/clubdbmodel/Member')

app.listen(5000, () => console.log("Listening on port 5000"))
app.use(express.json())
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD,OPTIONS, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin",
    "X-Requested-With", "Content-Type", "Accept")
    next()
    })

//create a new set of members
app.post('/myset', (req, res) => {
    (new myset({ 'setName' : req.body.setName , 'numberOfMembers' : req.body.numberOfMembers }))
.save()
.then((myset) => res.send(myset))
.catch((error) => console.log(error))
}) 

//register a member into a set
 