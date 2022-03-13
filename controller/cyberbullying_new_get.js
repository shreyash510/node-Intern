const {MongoClient} = require('mongodb');
const url = require('../db/Dconn');
// const { collection } = require('../model/cyberFieldSchema');


const cyberBullying_new_get = async(req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        if(err) throw error;
        else{
            const cyberBulling_data = db.db('mernproject')
            .collection('cyber_bulling');

            cyberBulling_data.find().toArray()
            .then((arr)=>{
                return arr;
            }).then((arr)=>{
                res.send(arr)
            })
        }
    })
}


module.exports = cyberBullying_new_get;