 
import { createServer, Server } from "http";
// import * as http from "http";                   // HTTP server
import * as express from "express";
import * as path from "path";                   // Deal with system paths


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

    private config(): void { this.port = process.env.PORT || App.PORT; }


    private listen(): void { 
        this.server.listen(this.port, () => {
            console.log("Server start listening on port %s", this.port);
        });
    }

    public getApp(): express.Application { return this.app; }
}



