const mongoose = require('mongoose');

const cyberFieldSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true,
        // uppercase : true,
        // trim : true,
    }, 
    lname : {
        type : String,
        required : true,
        // uppercase : true,
        // trim : true,
    }, 
    mobile : {
        type : Number,
        required : true,
        trim : true,
    }, 
    wts_no : {
        type : Number,
        required : true,
        trim : true,
    }, 
    email : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
    }, 
    address : {
        type : String,
        required : true,
    }, 

    type_of_service : {
        type : String,
        required : true,
    },

    query : {
        type : String, 
        required: true,
    },
    
})

const P_registration = mongoose.model('p_regi', cyberFieldSchema);
module.exports = P_registration;