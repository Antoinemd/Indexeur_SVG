import * as express from 'express';
import { Subject } from 'rxjs/Subject';
import { parseXmlToJson } from './parseXml2Json';

const newPatientSubject = new Subject();
const delPatientSubject = new Subject();

export const newPatientObs = newPatientSubject.asObservable();
export const delPatientObs = delPatientSubject.asObservable();

export function getImagesRestApi(): express.Router {
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
                console.log('filename: ',imageFolder + file);
                // on applique pour chaque fichier ..
                jsonFile = parseXmlToJson(imageFolder + file);
            });
            // à la fin de l'analyse du répertoire ..
            
            
        })
        // envoit le dernier fichier
        res.json({ 'file' : jsonFile });
        // res.json( {message: "Il va falloir implémenter tout ça... "+" Bon chance"} );
});

    return router;
}