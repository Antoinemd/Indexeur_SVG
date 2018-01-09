"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Retrieve
let mongoose = require("mongoose");
/**
 *  Connect to the MongoDB
 */
function connectBdd() {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/db-svg", { useMongoClient: true }).then(
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    () => {
        console.log("connexion à la BDD : [ OK ]");
        // Récupération des données .."
    }, 
    /** handle initial connection error */
        err => {
        console.log("Connection échoué >>> Error :: ", `${err}`);
    });
}
exports.connectBdd = connectBdd;
