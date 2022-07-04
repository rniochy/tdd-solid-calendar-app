import express  from "express";
import Http from "./http";
import cors from 'cors';
import dotenv from 'dotenv'

export default class ExpressAdapter implements Http {
    app: any
    constructor(){
        this.app = express()
        dotenv.config()
        this.app.use(express.json())
        this.app.use(cors())
    }
    on(uri?: string, callback?: Function): void {
        this.app["use"](uri, callback);
    }
    listen(port: any): void {
        this.app.listen(port)
        console.log("the app is running at "+port)
    }

}