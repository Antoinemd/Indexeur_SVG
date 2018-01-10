"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// On ne met ici que les modèles de données, qui sont les "JSON Schemas".
exports.svgSchemaPath = new mongoose_1.Schema({
   path: String,
   
});

exports.svgSchemaAttrib = new mongoose_1.Schema({
    path: String,
    
 });
exports.svgModelPath = mongoose_1.model("svg", exports.svgSchemaPath);
exports.svgModelAttrib = mongoose_1.model("svg", exports.svgSchemaAttrib);
