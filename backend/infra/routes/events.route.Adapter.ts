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
              eventRepository.editEvent(req.body)
              res.status(200).send({msg: "edited"})
        })
        router.post('/deleteevent/{id}', (req: Request,res: Response)=>{
              eventRepository.deleteEvent(req.body.id)
              console.log(req.body)
              res.status(200).send({msg: "deleted"})
        })
        return router
    }

}