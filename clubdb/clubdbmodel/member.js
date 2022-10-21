const mongoose = require('mongoose')

//creating the Schema that enforce constraints on our database

const MemberSchema = new mongoose.Schema({
_setId:{

    type: mongoose.Types.ObjectId,
        
    required: true
        
},

name:{

type : String,

trim: true,

minlength: 3

},

lastName:{

type : String,

trim: true

}



})

const Member = mongoose.model('Member', MemberSchema)

module.exports = Member