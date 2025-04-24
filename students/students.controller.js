const express = require('express');
const router = express.Router();
const studentServices = require('./students.services');

router.get('/', getStudents);
router.post('/',insertStudent);
router.get('/:id',editStudent);
router.post('/:id',updateStudents);
router.post("/delete/:id",deleteStudents);

module.exports = router;

async function getStudents(req, res, next){
    try {
        const result = await studentServices.getStudents();
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function insertStudent(req,res,next){
    try {
        const result = await studentServices.insertStudent(req.body);
        return res.json(result);
    } catch (error) {
        res.json(error)
    }
}

async function editStudent(req,res,next) {
    try {
        const result = await studentServices.editStudent(req.params.id)
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

async function updateStudents(req,res,next) {
    try {
        const result = await studentServices.updateStudents(req.body,req.params.id)
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

async function deleteStudents(req,res,next) {
    try {
        const result = await studentServices.deleteStudents(req.params.id);
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}