"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoSchema_1 = require("./mongoSchema");
//Fonction de récupération des images ayant une forme correspondant à la requête
function findAllIamgestWithShape(shape) {
    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    let ra = mongoSchema_1.modelImage.findOne({ 'formes.genre': shape }, function (err, res) {
        // (err, doc, res) => {
        console.log("Resultat de la recherche ONLY SHAPE >>> ", err, res);
        if (err) {
            handleError(err);
        }
        console.log('BLALALALALALALALA', res);
    });
    return ra;
}
exports.findAllIamgestWithShape = findAllIamgestWithShape;
//Fonction de récupération des images ayant une couleur correspondant à la requête
function findAllImagesWithColor(color) {
    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    let ra = mongoSchema_1.modelImage.findOne({ 'formes.couleur': color }, function (err, res) {
        // (err, doc, res) => {
        console.log("Resultat de la recherche ONLY COLOR >>> ", err, res);
        if (err) {
            handleError(err);
        }
        console.log('BLALALALALALALALA', res);
        // console.log('%s %s is a %s.', res.name.first, res.name.last, res.occupation);
    });
    return ra;
}
exports.findAllImagesWithColor = findAllImagesWithColor;
function findAllImagesWithBoth(shape, color) {
    let condition = { $and: [{ "formes.genre": shape }, { "formes.couleur": color }] };
    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    let ra = mongoSchema_1.modelImage.findOne(condition, function (err, res) {
        // (err, doc, res) => {
        console.log("Resultat de la recherche COLOR AND SHAPE $and >>> ", err, res);
        if (err) {
            handleError(err);
        }
        console.log('BLALALALALALALALA', res);
        // console.log('%s %s is a %s.', res.name.first, res.name.last, res.occupation);
    });
    return ra;
}
exports.findAllImagesWithBoth = findAllImagesWithBoth;
/*
There is no method for dropping a collection from mongoose, the best you can do is remove the content of one :

Model.remove({}, function(err) {
   console.log('collection removed')
});
But there is a way to access the mongodb native javascript driver, which can be used for this

mongoose.connection.collections['collectionName'].drop( function(err) {
    console.log('collection dropped');
});
*/
function flushBDD() {
    console.log('delete DB ..');
    mongoSchema_1.modelImage.remove({}, function (err, res) {
        if (err) {
            console.log('ERROR >>> ', err);
        }
        else {
            console.log('Collection removed !');
        }
    });
    // .connection.db.dropCollection('images', function(err, result) {
    //     if(!err) { console.log("Collection supprimée"); }
    // });
}
exports.flushBDD = flushBDD;
/**
 * sert à peupler la BDD en fonction des fichiers présents dans le dossier data
 * TODO: les éléments qui peuples la bdd sont codés en dur pour le moment
 */
function PopulateBDD() {
    // fichiers json test/peupler la BDD en attendant de trouver une solution pour les feuilles de style XSLT
    let rectOrange = { "nom_image": "rectOrange.svg", "formes": [{ "genre": "rect", "couleur": "#FFA500" }] };
    let redRectGreenCircle = { "nom_image": "red-rect-green-circle-test.svg", "formes": [{ "genre": "circle", "couleur": "#008000" }, { "genre": "rect", "couleur": "#ff0000" }] };
    let modeleTestWeb = { "nom_image": "ModeleTestWeb.svg", "formes": [{ "genre": "rect", "couleur": "#008000" }, { "genre": "rect", "couleur": "#ffff00" }, { "genre": "rect", "couleur": "#d35f5f" }, { "genre": "ellipse", "couleur": "#916f6f" }, { "genre": "ellipse", "couleur": "#ff2a2a" }] };
    let testJsonImage3 = { "image": { "nom_image": "", "formes": [{ "genre": "rect", "couleur": "#FFA500" }] } };
    let testJsonImage4 = { "image": { "nom_image": "", "formes": [{ "genre": "rect", "couleur": "#FFA500" }] } };
    let tabFormes = [rectOrange, redRectGreenCircle, modeleTestWeb];
    for (let i = 0; i < tabFormes.length; i++) {
        const forme = tabFormes[i];
        let formeMongo = new mongoSchema_1.modelImage(forme);
        // let forme2 = new modelImage(redRectGreenCircle);
        formeMongo.save(function (err) {
            if (err) {
                console.log("erreur: ", err);
                throw err;
            }
            console.log('[ Info ] >>> Dessin ajouté à la BD: ', formeMongo);
        });
    }
}
exports.PopulateBDD = PopulateBDD;
/**
 * Affiche l'erreur qui s'est produite
 * @param err erreur
 */
function handleError(err) {
    console.log('>>> ERROR:: something went wrong ... ', err);
}
