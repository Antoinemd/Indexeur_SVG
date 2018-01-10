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
        // récupération des requêtes req.body.Nom_Param_Donné_Par_EVA
        // params['query'] = req.body;
        // params['queries'] = q.queries_name;
        // routine à exécuter au lancement du server ( TODO: à déplacer )
        // on ne placera dans ce router, que les requetes qui iront interroger la bdd avec les 
        // attributs contenus dans la variable req.body
        const imageFolder = './data/';
        const file = 'polyline.svg';
        const fs = require('fs');
        let jsonFile;
        // ------
        // A décommenter pour appliquer la méthode à l'enssemble du repertoire
        // fs.readdir(imageFolder, (err, files) => {
        //     files.forEach(file => {
        console.log('filename: ', imageFolder + file);
        // on applique pour chaque fichier ..
        jsonFile = parseXml2Json_1.parseXmlToJson(imageFolder + file);
        // });
        // TODO: à la fin de l'analyse du répertoire ..            
        // });
        // --------------
        // envoit le dernier fichier
        res.json({ 'file': jsonFile });
        // res.json( {message: "Il va falloir implémenter tout ça... "+" Bon chance"} );
    });
    return router;
}
exports.getImagesRestApi = getImagesRestApi;
