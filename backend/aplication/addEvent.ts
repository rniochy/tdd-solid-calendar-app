import EventRepository from '../domain/repository/EventRepository'


export default class AddEvent {
    constructor(private eventRepository:EventRepository ){}   
    execute(description: string, date:Date){
           this.eventRepository.addEvent(date,description);
     } 
}


type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}