import * as express from 'express';
import { Subject } from 'rxjs/Subject';
import { parseXmlToJson } from './parseXml2Json';
import mongoose from 'mongoose';

// Retrieve
let mongoose = require("mongoose");


export function getImagesRestApi(): express.Router {
    const router = new express.Router();
    console.log('Router : [ OK ]');


    /**
     * Cherche une image dans la bdd en fonction des paramètres entrés
     */
    router.get("/findImages", (req, res) => {

        

    });

    /** Lecture des fichiers et application de la feuille de style à ces images

     * 
     */
     router.post("/chargerDB", function(req,res) {
        const imageFolder = './data/';
        const fs = require('fs');
        let jsonFile;
        let files = fs.readdirSync(imageFolder);
        if (!files) {
            console.log("Pas de fichiers");
            return false;
        }
        else {
            files.forEach( file => {
                //Vérification que le fichier lu est bien un SVG (le split . [1] va prendre ce qui est après le .)
                // (index) [0] serait ce qu'il y a avant le .
                if(file.split('.')[1] == "svg") {
                    let image = fs.readFileSync(imageFolder + file, "UTF-8")

                    //Il est maintenant nécessaire d'enlever le namespace contenu dans le fichier svg sinon la xslt
                    // ne sera pas capable de lui appliquer son template
                    image = image.replace(/(xlmns|xml):?[a-z]*=\"[^\"]+\"/gi,"");

                    //Appliquer la feuille XSLT pour transformer le fichier SVG en JSON


                    //Ajouter le tout dans la BDD en se servant du model imageModel
                }
            });
        }
    });

    //Vider la BDD
    router.post("/flushBDD", function (req, res) {
        mongoose.connection.db.dropCollection('images', function(err, result) {
        if(!err) {
        console.log("Collection supprimée")

        }
    });

    /*imageModel.remove({}, function(err, row) {
        if (err) {
            console.log("Collection couldn't be removed" + err);
            return;
        }
      
        console.log("collection removed");
      }) */
    });






    /** /IndexerImages */
    router.get("/indexeImage", (req, res) => {

        // récupération des requêtes req.body.Nom_Param_Donné_Par_EVA
        // params['query'] = req.body;
		// params['queries'] = q.queries_name;

        // routine à exécuter au lancement du server ( TODO: à déplacer )
        // on ne placera dans ce router, que les requetes qui iront interroger la bdd avec les 
        // attributs contenus dans la variable req.body

        const imageFolder = './data/';
        const file = 'polyline.svg'
        const fs = require('fs');
        let jsonFile;

        // ------
        // A décommenter pour appliquer la méthode à l'enssemble du repertoire
        fs.readdir(imageFolder, (err, files) => {
            files.forEach(file => {
                console.log('filename: ',imageFolder + file);
                // on applique pour chaque fichier ..
                // jsonFile = parseXmlToJson(imageFolder + file);


            });

            // TODO: à la fin de l'analyse du répertoire ..            
        });
        // --------------
        
        // envoit le dernier fichier




        res.json({ 'file' : jsonFile });
        // res.json( {message: "Il va falloir implémenter tout ça... "+" Bon chance"} );
    });



    return router;
}