"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { createServer, Server } from "http";
const express = require("express");
const bodyParser = require("body-parser"); // Parse HTTP GET and POST variables
const path = require("path"); // Deal with system paths
const http_1 = require("http");
// Router RestApi()
const app_router_1 = require("./app-router");
class App {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
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
        // TODO: faire la connection à la BDD Mongo
        // connection à la bdd cabinet-meidcal de mongoDB
        // connectBdd();
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
