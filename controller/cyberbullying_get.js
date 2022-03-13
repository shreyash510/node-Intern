const User_get = require("../model/cyberSubmitSchema");
const cyberSubmit_get = async (req, res) => {
    try {
        const userData = await User_get.find();
        res.send({Body : userData})
    } catch (err) {
        console.log(err)
    }
}

module.exports = cyberSubmit_get;