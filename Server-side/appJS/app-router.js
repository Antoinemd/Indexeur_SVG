"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
function getImagesRestApi() {
    console.log("routed !");
    const router = new express.Router();
    /** /getImage */
    router.get("/getImage", (req, res) => {
        res.json({ message: "Il va falloir implémenter tout ça... " + " Bon chance" });
    });
    return router;
}
exports.getImagesRestApi = getImagesRestApi;
