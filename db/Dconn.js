const mongoose = require('mongoose');

const db = 'mongodb://shreyash510:shreyash510@cluster0-shard-00-00.xymkp.mongodb.net:27017,cluster0-shard-00-01.xymkp.mongodb.net:27017,cluster0-shard-00-02.xymkp.mongodb.net:27017/mernproject?ssl=true&replicaSet=atlas-6sw5zn-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(db, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log('connection successfully!');
}).catch((e)=>{
    console.log('connection failed ', e);
})

module.exports = db;