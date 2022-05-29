import EventRoutes from "../routes/events.route.Adapter";
import EventRepository from "../../domain/repository/EventRepository";
import Http from "../http/http";

export default class EventRouter{
     constructor(private http: Http, private eventRepository:EventRepository ){
        (async()=>{
            const eventroute = new EventRoutes();
            this.http.on('/event', await eventroute.eventerRouters(eventRepository));   
        })()

     }
}