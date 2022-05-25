import EventRepository from "../domain/repository/EventRepository";

export default class EditEvents {
    constructor(private eventRepository:EventRepository){}
    execute({date, description,id}:TEventDataFormat){
         return this.eventRepository.editEvent({date, description,id});
    }
}
type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}