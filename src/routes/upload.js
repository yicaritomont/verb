const express = require('express');
const router = express.Router();
const helper = require('../lib/helpers');

router.get('/fileValidate', (req, res) => {
    res.render('upload/index');
});

router.post('/fileValidate', (req, res) => {
    let EDFile = req.files.file
    var allowedExtensions = /(.csv)$/i;
    req.flash('success', EDFile.name);
    if(allowedExtensions.exec(EDFile.name)){
        
        EDFile.mv(`./files/${EDFile.name}`,err => {
            if(err) return res.status(500).send({ message : err.stack })
            return res.status(200).send({ message : 'File upload and correct ext' })
        })
        
    }
    else
    {
        return res.status(500).send({mesagge: 'upload a CSV file.'});
    }
});


module.exports = router;