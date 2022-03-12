const mongoose = require('mongoose');

const cyberSubmitSchema = new mongoose.Schema({
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
    
    // Partner Registration submit

    qualification : {
        type : String,
        required : true,
    }, 
    gov_id_img : {
        data : Buffer,
        contentType : String,
    }
})

const cyberbilling_submit = mongoose.model('cyberSubmit', cyberSubmitSchema);
module.exports = cyberbilling_submit;