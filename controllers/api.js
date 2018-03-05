'use strict'

import { Router } from 'express'

const router = Router()
const fileUpload = require('express-fileupload');
var path = require('path');
// default options
router.use(fileUpload());
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


var pdf = require ('pdfkit');
var fs= require('fs');
var PDFParser = require("pdf2json");



router.post('/pdf', function(req, res) {
  var doc = new pdf;
  doc.pipe(fs.createWriteStream('./output/file.pdf'))

  for(var key in req.body) {
    doc.font('Times-Roman')
          .fontSize(20)
          .text(key +" : " + req.body[key]+"\n")
  }
  doc.end();
  // res.contentType('application/pdf')
  // res.json({"url" :`/public/output/file.pdf`})
    fs.readFile(path.resolve('./output/file.pdf'), function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
    // res.sendFile(path.resolve('./output/file.pdf'));
});

router.post('/upload',function (req, res) {

    console.log("File data : ",req.files.file.name)
    fs.writeFile("./uploads/"+req.files.file.name, req.files.file.data, function(err) {
        if(err) {
            console.log("Error in creating file : ",err);
            return
        }
    });

    // add code here to upload file

    var pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataError", errData => console.log("Error in parsing file : ",errData.parserError));
    pdfParser.on("pdfParser_dataReady", pdfData => {
        var response = []
        for(var key in pdfData["formImage"]["Pages"][0]["Fields"]){
            response.push(pdfData["formImage"]["Pages"][0]["Fields"][key]["TU"])
        }
        res.json(response)
    });
    pdfParser.loadPDF("./uploads/"+req.files.file.name);
  });


router.all('*', (req, res) => {
  res.status(404).json({
    code: -1,
    error: 'Not found'
  })
})

export default router
