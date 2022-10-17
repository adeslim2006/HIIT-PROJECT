const mongoose = require('mongoose')

//S3 creating the Schema

const SetSchema = new mongoose.Schema({

setName:{

type : String,

trim: true,

minlength: 3

},

numberOfMembers:{

type : Number,

trim: true,

minlength: 3

}

})

const Set = mongoose.model('Set', SetSchema)

module.exports = Set