const mongoose = require('mongoose')

//creating the Schema that enforce constraints on our database

const MemberSchema = new mongoose.Schema({

name:{

type : String,

trim: true,

minlength: 3

},

lastName:{

type : String,

trim: true

},

_setId:{

type: mongoose.Types.ObjectId,

required: true

}

})

const Member = mongoose.model('Member', MemberSchema)

module.exports = Member