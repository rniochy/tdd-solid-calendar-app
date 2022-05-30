import {Request, Response, Router } from "express";
import EventRepository from "../../domain/repository/EventRepository";
import IEventRouter from "./events.router";

export default class EventRoutes implements IEventRouter {
    async eventerRouters(eventRepository: EventRepository): Promise<Router> {
        const router = Router()
        router.post('/createevent', (req: Request,res: Response)=>{
              const {date, description} = req.body
             eventRepository.addEvent(date, description)
              res.status(200).send({})
        })
        router.get('/getevent', (req: Request,res: Response)=>{
              const events = eventRepository.readEvents()
              res.send({events})
        })
        router.put('/editevent', (req: Request,res: Response)=>{
              const events = eventRepository.editEvent(req.body)
              res.status(200).send({events})
        })
        router.delete('/deleteevent', (req: Request,res: Response)=>{
              const events = eventRepository.deleteEvent(req.body.id)
              res.status(200).send({events})
        })
        return router
    }

}