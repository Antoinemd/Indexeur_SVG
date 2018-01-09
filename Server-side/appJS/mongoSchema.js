"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// On ne met ici que les modèles de données, qui sont les "JSON Schemas".
exports.svgSchema = new mongoose_1.Schema({
    nom: String,
    prenom: String,
    adresse: { numero: String, rue: String, ville: String, codePostal: String,
        etage: String, latitude: Number, longitude: Number },
    numss: { type: String },
    birth: String,
    sexe: String,
    tel: String,
    pathologie: String
});
exports.svgModel = mongoose_1.model("svg", exports.svgSchema);
