const db = require('../database/db');

module.exports = {
    getStudents
}

async function getStudents(){
    const database = await db.getDatabase();
    const collection = database.collection("marks");
    const cursor = collection.find({})
    let studData = await cursor.toArray()

    return studData
}