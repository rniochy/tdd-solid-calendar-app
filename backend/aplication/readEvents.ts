import EventRepository from '../domain/repository/EventRepository'

export default class ReadEvent {
    constructor(private eventRepository:EventRepository ){}   
    execute(){
         return this.eventRepository.readEvents();
     } 
}


