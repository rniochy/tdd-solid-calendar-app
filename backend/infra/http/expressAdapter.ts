import express  from "express";
import Http from "./http";
import cors from 'cors'

export default class ExpressAdapter implements Http {
    app: any
    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.app.use(cors())
    }
    on(uri?: string, callback?: Function): void {
        this.app["use"](uri, callback);
    }
    listen(port: number): void {
        this.app.listen(port)
        console.log("the app is running at "+port)
    }

}