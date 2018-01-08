 
// import { createServer, Server } from "http";
import * as express from "express";
import * as bodyParser from "body-parser";      // Parse HTTP GET and POST variables
import * as path from "path";                   // Deal with system paths
import * as http from "http";                   // HTTP server
import { createServer, Server } from "http";


// Router RestApi()
import { getImagesRestApi } from "./app-router";


export class App {
    public static readonly PORT: number = 8000;
    private app: express;
    private server: Server;
    private port: string | number;
    private host: any;


    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();

    }

    private createApp(): void { this.app = express(); }

    private createServer(): void { this.server = createServer(this.app); }

    // Configure the web server
    private config(): void { 
        this.port = process.env.PORT || App.PORT; 
        // get information from html forms
        this.app.use(bodyParser.json()); 			
        // fonction express static pour atteindre le répertoire /data
        this.app.use(bodyParser.urlencoded({extended: true}));	
        // const dataPath = path.join(__dirname,"../app/data");
        this.app.use("/data", express.static(path.join(__dirname, "../data")));
        // Pour l'utilisation des routeurs 
        this.app.use("/apiImage", getImagesRestApi());
        // TODO: faire la connection à la BDD Mongo
        // connection à la bdd cabinet-meidcal de mongoDB
        // connectBdd();
        
    }
    
    private listen(): void { 
        this.server.listen(this.port, () => {
            console.log("Server start listening on port %s", this.port);
        });
    }

    public getApp(): express.Application { return this.app; }
}



