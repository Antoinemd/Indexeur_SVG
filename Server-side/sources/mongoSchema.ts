import { Schema, model } from "mongoose";

// Retrieve
let mongoose = require("mongoose");

//Version à utiliser au final
// Utilisation de deux schémas, le schéma des formes, et le schéma des images qui contiendra des formes
//Si besoin de traiter par la suite les particularités de chaque formes (en dehors de leur couleur et de leur nom),
//Il faudra créer un schema par type de forme avec leurs caracs particulières (peut-être utiliser de la prog par event
//avec discriminator)

export const formesSchema = new mongoose.Schema({
    genre             :   { type : String, 
                            enum:['circle','line','rect','ellipse','polyline','polygon']},
    couleur           :     String
});

//Mongoose créé la collection images si elle n'existe pas
export const imageSchema = new mongoose.Schema({
    _nom_image       : { type : String, required : true },
    formes            : [formesSchema]
});

//En principe Mongoose recréé une collection "images" si elle n'existe pas déjà
export const imageModel = mongoose.model("images", imageSchema);



//Version nestée, à corriger côté forme pour faire tableau d'objets
export const imageSchemaNested = new Schema({
      _nom_image       : { type : String, required : true },
      formes            : {
                            genre             :   { type : String, 
                                                    enum:['circle','line','rect','ellipse','polyline','polygon']},
                            couleur :   String
                          }
});


export const modelImage = model("imagen", imageSchemaNested);


//Version JSON schema vu en cours

/* au début ?
"$schema": "http://json-schema.org/draft-04/schema#",
    "title" : "Images",
    "description" : "Représentation des images stockée sur la BDD",
    "type" : "object",
    "properties" :
    {*/
export const schemaImage = {
                        images : {
                          type : "string",
                          description : "Une image",
                          properties : {
                                  _nom_image : {type : "string",
                                                description: "Le nom de l'image qui va l'identifier"},
                                  formes :     {type : "array",
                                                description: "Une image contient des formes dans un tableau avec deux attributs",
                                                properties : {
                                                      genre   : {type : "string", enum : ['circle','line','rect','ellipse','polyline','polygon']},
                                                      couleur : {type : "string"}
                                                }
                                                }
                                        }
                                }
                            };


export const imagesModel = model("images", schemaImage);

