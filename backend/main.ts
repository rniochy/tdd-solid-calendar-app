import EventRouter from "./infra/controller/event.controller";
import ExpressAdapter from "./infra/http/expressAdapter";
import LocalStorageRepository from "./infra/repository/localstorage/localStorageRepository";

const Http = new ExpressAdapter()
const port =5000 

new  EventRouter(Http, new LocalStorageRepository())

console.log(process.env.PORT )

Http.listen(port)