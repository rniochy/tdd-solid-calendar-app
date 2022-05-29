import EventRouter from "./infra/controller/event.controller";
import ExpressAdapter from "./infra/http/expressAdapter";
import LocalStorageRepository from "./infra/repository/localstorage/localStorageRepository";

const Http = new ExpressAdapter()

new  EventRouter(Http, new LocalStorageRepository())

Http.listen(3001);