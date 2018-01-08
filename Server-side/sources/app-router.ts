import * as express from "express";



export function getImagesRestApi(): express.Router {
    console.log("routed !");
    const router = new express.Router();

    /** /getImage */
    router.get("/getImage", (req, res) => {


        
        res.json( {message: "Il va falloir implémenter tout ça... "+" Bon chance"} );
});

    return router;
}