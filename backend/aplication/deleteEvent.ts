import EventRepository from '../domain/repository/EventRepository'

export default class DeleteEvent {
    constructor(private eventRepository:EventRepository ){ }   
    execute(id: string){
        this.eventRepository.deleteEvent(id);     
    } 
}