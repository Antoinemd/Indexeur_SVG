import { Schema, model } from "mongoose";

// On ne met ici que les modèles de données, qui sont les "JSON Schemas".
export const svgSchema = new Schema({
    nom             : String,
    prenom          : String,
    adresse         : { numero: String, rue: String, ville: String, codePostal: String,
                        etage: String, latitude: Number, longitude: Number },
    numss           : {type: String},
    birth           : String,
    sexe            : String,
    tel             : String,
    pathologie      : String
});

export const svgModel = model("svg", svgSchema);