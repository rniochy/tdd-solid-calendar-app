import  {Router} from 'express'
import EventRepository from '../../domain/repository/EventRepository'

export default interface IEventRouter {
       eventerRouters(eventRepository: EventRepository) : Promise<Router>
}