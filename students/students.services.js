const db = require('../database/db');
const ObjectId = db.ObjectId;
module.exports = {
    getStudents,
    insertStudent,
    editStudent,
    updateStudents,
    deleteStudents
}

async function getStudents(){
    try {
        const database = await db.getDatabase();
        const collection = database.collection("marks");
        const cursor = collection.find({})
        let studData = await cursor.toArray()
        return studData
    } catch (error) {
        return error
    }
}

async function insertStudent(params){
    try {
        const database = await db.getDatabase();
        const collection = database.collection('marks');
        const result = await collection.insertOne(params);
        return result
    } catch (error) {
        return error
    }
}

async function editStudent(id){
    try {
        const database = await db.getDatabase();
        const collection = database.collection('marks');
        if(id){
            const data = await collection.findOne({_id:new ObjectId(id)})
            return data;
        }
        return {complete:false}
    } catch (error) {
        return error
    }
}

async function updateStudents(params,id){
    try {
        const database = await db.getDatabase();
        const collection = database.collection('marks');
        if(id){
            const result = await collection.updateOne({_id:new ObjectId(id)},{$set:params})
            return result
        }
        return {complete:false}
    } catch (error) {
        return error
    }
}

async function deleteStudents(id) {
    try {
        const database = await db.getDatabase();
        const collection = database.collection('marks');
        if(id){
            const result = await collection.deleteOne({_id:new ObjectId(id)});
            return result
        }
        return {complete: false}
    } catch (error) {
        return error
    }
}