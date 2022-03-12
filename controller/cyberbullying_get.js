const User_get = require("../model/cyberSubmitSchema");
const cyberBullying_get = async (req, res) => {
    try {
        const userData = await User_get.find();
        res.send({Body : userData})
    } catch (err) {
        console.log(err)
    }
}
module.exports = cyberBullying_get;