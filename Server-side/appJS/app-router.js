"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoRequest_1 = require("./mongoRequest");
// Retrieve
// let mongoose = require("mongoose");
function getImagesRestApi() {
    const router = new express.Router();
    console.log('Router : [ OK ]');
    /**
     * Cherche une image dans la bdd en fonction des paramètres entrés
     */
    router.post("/findImages", (req, res) => {
        console.log('requete forme : ', req.body.forme, ' et couleur ', req.body.couleur);
        let sendResultat;
        let forme = req.body.forme;
        let couleur = req.body.couleur;
        // TODO: faire des vérifications pour les parametres de la requete, undefinned, etc ..
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        // res.set('Content-Type', 'text/plain');
        // // requete seulement pour les couleurs
        // if (forme === "none" && (couleur !== undefined || couleur !== "")) {
        //     console.log("requete seulement pour les couleurs");
        //     sendResultat = findAllImagesWithColor(req.body.color);
        // }
        // requete seulement pour les formes
        if (forme !== "none" && (couleur === undefined || couleur === "")) {
            console.log("requete seulement pour les formes");
            sendResultat = mongoRequest_1.findAllIamgestWithShape(req.body.forme);
        }
        // requete seulement pour les formes et les couleurs
        if (forme === "none" && (couleur !== undefined || couleur !== "")) {
            console.log("requete pour les formes et/ou les couleurs");
            sendResultat = mongoRequest_1.findAllImagesWithBoth(req.body.forme, req.body.color);
        }
        console.log("le resultat a envoyer >>>>>>>>>>> ", sendResultat);
        res.send(sendResultat);
        res.end();
    });
    /** Lecture des fichiers et application de la feuille de style à ces images

     *
     */
    router.get("/chargerDB", function (req, res) {
        const imageFolder = './data/';
        // const fs = require('fs');
        // let jsonFile;
        // let files = fs.readdirSync(imageFolder);
        console.log('chargement BD ..');
        mongoRequest_1.PopulateBDD();
        res.end("BDD peuplée !");
    });
    //Vider la BDD
    router.get("/flushBDD", function (req, res) {
        mongoRequest_1.flushBDD();
        res.end("DB Flushed !");
        /*imageModel.remove({}, function(err, row) {
            if (err) {
                console.log("Collection couldn't be removed" + err);
                return;
            }
          
            console.log("collection removed");
          }) */
    });
    // TODO: à déplacer dans une fonction qui s'initialise au démarrage du serveur: initIndexation();
    /** /IndexerImages */
    router.get("/indexeImage", (req, res) => {
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
        fs.readdir(imageFolder, (err, files) => {
            files.forEach(file => {
                console.log('filename: ', imageFolder + file);
                // on applique pour chaque fichier ..
                // jsonFile = parseXmlToJson(imageFolder + file);
                // if (!files) {
                //     console.log("Pas de fichiers");
                //     return false;
                // }
                // else {
                //     files.forEach( file => {
                //         //Vérification que le fichier lu est bien un SVG (le split . [1] va prendre ce qui est après le .)
                //         // (index) [0] serait ce qu'il y a avant le .
                //         if(file.split('.')[1] == "svg") {
                //             let image = fs.readFileSync(imageFolder + file, "UTF-8");
                //             // Il est maintenant nécessaire d'enlever le namespace contenu dans le fichier svg sinon la xslt
                //             // ne sera pas capable de lui appliquer son template
                //             image = image.replace(/(xlmns|xml):?[a-z]*=\"[^\"]+\"/gi,"");
                //             // Appliquer la feuille XSLT pour transformer le fichier SVG en JSON
                //             // Ajouter le tout dans la BDD en se servant du model imageModel
                //         }
                //     });
                // }
            });
            // TODO: à la fin de l'analyse du répertoire ..            
        });
        // --------------
        // envoit des noms de fichiers analysés
        res.json({ 'file': file });
    });
    return router;
}
exports.getImagesRestApi = getImagesRestApi;
