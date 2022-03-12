const Csubmit = require("../model/cyberSubmitSchema")

const cyberSubmit = async ( req, res)=>{
    try{
        // console.log(req.body)
        const { lname, fname, mobile, wts_no, email, address, qualification } = req.body;

        if (!lname || !fname || !mobile || !wts_no || !email || !address || !qualification) {
            return res.status(400).send("Please fill the data")
        } else {
            const userField = new Csubmit({lname, fname, mobile, wts_no, email, address, qualification});
            const userRegister = await userField.save();

            if (userRegister) {
                return res.status(201).json("User Registered Successfully");
            } else {
                return res.status(500).json("failed to register")
            }
        }

    }catch (err){
        console.log( 'error found ',err)
    }
}

module.exports = cyberSubmit;