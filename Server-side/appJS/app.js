"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import de configuration du serveur
const express = require("express");
const bodyParser = require("body-parser"); // Parse HTTP GET and POST variables
const path = require("path"); // Deal with system paths
const http_1 = require("http");
// import du projet
const app_router_1 = require("./app-router");
const mongoConnect_1 = require("./mongoConnect");
class App {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
        mongoConnect_1.connectBdd();
    }
    createApp() { this.app = express(); }
    createServer() { this.server = http_1.createServer(this.app); }
    // Configure the web server
    config() {
        this.port = process.env.PORT || App.PORT;
        // get information from html forms
        this.app.use(bodyParser.json());
        // fonction express static pour atteindre le répertoire /data
        this.app.use(bodyParser.urlencoded({ extended: true }));
        // const dataPath = path.join(__dirname,"../app/data");
        this.app.use("/data", express.static(path.join(__dirname, "../data")));
        // Pour l'utilisation des routeurs 
        this.app.use("/apiImage", app_router_1.getImagesRestApi());
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log("Server start listening on port %s", this.port);
        });
    }
    getApp() { return this.app; }
}
App.PORT = 8000;
exports.App = App;
