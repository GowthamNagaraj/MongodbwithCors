const express = require('express');
const router = express.Router();
const studentServices = require('./students.services');

router.get('/', getStudents);

module.exports = router;

async function getStudents(req, res, next){
    try {
        const result = await studentServices.getStudents();
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}