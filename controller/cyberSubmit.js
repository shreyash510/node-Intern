const Csubmit = require("../model/cyberSubmitSchema")
const multer = require('multer')

const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: ((req, file, cb) => {
        cb(null, file.originalname)
    })
});

const upload = multer({
    storage: Storage
}).single('testImage')
const cyberSubmit = async (req, res) => {
    try {
        // console.log(req.body)
        upload(req, res, (err) => {
            if (err) {
                console.log(err)
            } else {
                const { lname, fname, mobile, wts_no, email, address, qualification } = req.body;

                if (!lname || !fname || !mobile || !wts_no || !email || !address || !qualification) {
                    return res.status(400).send("Please fill the data")
                } else {

                    const userField = new Csubmit({
                        lname, fname, mobile, wts_no, email, address, qualification,
                        gov_id_img: {
                            data: req.file.filename,
                            contentType: "image/png"
                        }
                    });
                    const userRegister = userField.save();

                    if (userRegister) {
                        return res.status(201).json("User Registered Successfully");
                    } else {
                        return res.status(500).json("failed to register")
                    }
                }
            }
        })


    } catch (err) {
        console.log('error found ', err)
    }
}

module.exports = cyberSubmit;