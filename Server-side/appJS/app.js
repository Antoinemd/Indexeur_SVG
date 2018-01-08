"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
// import * as http from "http";                   // HTTP server
const express = require("express");
class App {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
    }
    createApp() { this.app = express(); }
    createServer() { this.server = http_1.createServer(this.app); }
    config() { this.port = process.env.PORT || App.PORT; }
    listen() {
        this.server.listen(this.port, () => {
            console.log("Server start listening on port %s", this.port);
        });
    }
    getApp() { return this.app; }
}
App.PORT = 8000;
exports.App = App;
