const User = require("../model/cyberFieldSchema");
const cyberBullying = async (req, res) => {
    try {
        const { fname, lname, mobile, wts_no, email, address, type_of_service, query } = req.body;

        if (!lname || !fname || !mobile || !wts_no || !email || !address || !type_of_service || !query) {
            return res.status(400).send("Please fill the data")
        } else {
            const userField = new User({lname, fname, mobile, wts_no, email, address, type_of_service, query} );
            const userRegister = await userField.save();

            if (userRegister) {
                return res.status(201).json("User Registered Successfully");
            } else {
                return res.status(500).json("failed to register")
            }
        }

    } catch (err) {
        console.log(err)
    }
}
module.exports = cyberBullying;