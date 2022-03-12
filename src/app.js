const express = require('express');
const app = express();
const authRoute = require("../routes/auth");
const port = 8000;
require("../db/Dconn");
app.use(express.json());

app.use(authRoute);

app.get('/', (req, res)=>{
    res.send('this is home page')
})

// app.get('/legalapp/services/cybercrime/Cyberbullying/submit', (req, res)=>{
//     res.send('get data')
// })

// app.post('/legalapp/partnerregistration/submit', (req, res)=>{
//     // this is code 
// })

app.listen(port, ()=>{
    console.log('Listening port',port)
})