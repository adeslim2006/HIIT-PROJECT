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
app.post('/myset/:mysetId/members', (req, res) => {
    (new member ({ '_setId' : req.params.mysetId, 'name': req.body.name, 'lastName': req.body.lastName }))
.save()
.then((member) => res.send(member))
.catch((error) => console.log(error))
}) 

//view/read all sets in the Database

app.get('/myset', (req, res) => {
    myset.find({})
    .then(myset => res.send(myset))
    .catch((error) => console.log(error))
})

//read/get one member set
app.get('/myset/:mysetId', (req, res) => {
    myset.findOne( { _id: req.params.mysetId })
    .then(myset => res.send(myset))
    .catch((error) => console.log(error))
})

//get all members from a set using the setId 

app.get('/myset/:mysetId/members', (req, res) =>{
    member.find({ _setId: req.params.mysetId })
    .then((member) => res.send(member))
    .catch((error) => console.log(error))
    
})

//get one member from a set using the setId and the specific id of that member

app.get('/myset/:mysetId/members/:memberId', (req, res) =>{

    member.findOne({ _setId: req.params.mysetId, _id: req.params.memberId })
    
    .then((onemember) => res.send(onemember))
    
    .catch((error) => console.log(error))
    
    })

//update details of members' sets

app.patch('/myset/:mysetId', (req, res) =>{

    myset.findOneAndUpdate({ '_id' : req.params.mysetId }, {$set: req.body})
    
    .then((myset) => res.send(myset))
    
    .catch((error) => console.log(error))
    
    })

// update a specific member's details and information

app.patch('/myset/:mysetId/members/:memberId', (req, res) => {

    member.findOneAndUpdate({ '_id': req.params.mysetId, _id: req.params.memberId }, { $set: req.body })
    
    .then((member) => res.send(member))
    
    .catch((error) => console.log(error))
    
    })