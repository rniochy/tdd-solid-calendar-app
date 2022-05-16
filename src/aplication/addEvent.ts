import EventRepository from '../domain/repository/EventRepository'

class AddEvent {

    constructor(private eventRepository:EventRepository ){

    }   
    execute({description, date}: TEventDataFormat){
         
     } 
}


type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}