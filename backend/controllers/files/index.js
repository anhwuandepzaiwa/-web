var express = require('express')
var router = express.Router()
mongoose = require('mongoose')
models = reqlib('database').models
const path = require('path');
const currentDirectory = __dirname;
const parentDirectory = path.resolve(currentDirectory, '..', '..');

const savePathFile = `${parentDirectory}/files`;

module.exports = () => {
    router.get('/:filename', async (req, res) => {
        try {
            const { filename } = req.params;
            const filePath = path.join(savePathFile, filename);
            res.sendFile(filePath);
        } catch (error) {
            return res.status(400).json({ status: 0, data: null, message: error.message })
        }
    })
    return router
}
