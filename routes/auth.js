const express = require('express');
const router = express.Router();
const cyberbullying = require('../controller/cyberbullying')
const cyberSubmit = require('../controller/cyberSubmit')
const cyberSubmit_get = require('../controller/cyberbullying_get');
const cyberBullying_new_get = require('../controller/cyberbullying_new_get')

// const user = require('../model/cyberField');

router.get("/", (req, res)=>{
    res.send('this is router page');
})

router.post('/legalapp/services/cybercrime/Cyberbullying/fields', cyberbullying)

router.post('/legalapp/partnerregistration/fields', cyberSubmit)

router.get('/legalapp/partnerregistration/fields', cyberSubmit_get)

router.get('/cyber-bullying',cyberBullying_new_get);

// router.get('/legalapp/services/cybercrime/Cyberbullying/submit', cyberBullying_get)
module.exports = router;