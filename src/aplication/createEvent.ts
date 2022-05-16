import EventRepository from '../domain/repository/EventRepository'

class CreateEvent {

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