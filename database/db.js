const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;

async function getDatabase(){
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
    database = client.db('students');

    if(!database){
        console.log("not connected");
        
    }
    return database;
}

module.exports = {
    getDatabase
}