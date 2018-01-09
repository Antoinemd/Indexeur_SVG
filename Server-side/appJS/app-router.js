"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Subject_1 = require("rxjs/Subject");
const parseXml2Json_1 = require("./parseXml2Json");
const newPatientSubject = new Subject_1.Subject();
const delPatientSubject = new Subject_1.Subject();
exports.newPatientObs = newPatientSubject.asObservable();
exports.delPatientObs = delPatientSubject.asObservable();
function getImagesRestApi() {
    const router = new express.Router();
    console.log('Router : [ OK ]');
    /** /getImage */
    router.get("/getImage", (req, res) => {
        const imageFolder = './data/';
        const fs = require('fs');
        let jsonFile;
        // voir http://johannburkard.de/software/xsltjs/
        fs.readdir(imageFolder, (err, files) => {
            files.forEach(file => {
                console.log('filename: ', imageFolder + file);
                // on applique pour chaque fichier ..
                jsonFile = parseXml2Json_1.parseXmlToJson(imageFolder + file);
            });
            // à la fin de l'analyse du répertoire ..
        });
        // envoit le dernier fichier
        res.json({ 'file': jsonFile });
        // res.json( {message: "Il va falloir implémenter tout ça... "+" Bon chance"} );
    });
    return router;
}
exports.getImagesRestApi = getImagesRestApi;
