import {writeFileSync, readFileSync} from 'fs'
import {join, resolve } from 'path'
import EventRepository from "../../../domain/repository/EventRepository";


const PATH_TO_FILE_JSON = join(resolve(), '..', '/data', '/storedData.json');
// const PATH_TO_FILE_JSON = `${path.resolve}/data/storedData.json `;

export default class LocalStorageRepository implements EventRepository , IIdGenerator{
    addEvent(date:Date, description:string): void {
        const id:string = this.idGerator(); 
        const eventToSave = {id, date, description}
        const array_with_events = this.readEvents()

        if(Array.isArray(array_with_events) && array_with_events.length > 0){
            array_with_events.push(eventToSave)
            writeFileSync(PATH_TO_FILE_JSON, JSON.stringify(array_with_events))  
            return
        }
        writeFileSync(PATH_TO_FILE_JSON, JSON.stringify([eventToSave])) 
    }
    deleteEvent(id: string): void {
        const eventsList: Array<TEventDataFormat> = this.readEvents();
        const newDataForEventsList = eventsList.filter(events =>  events.id !==  id); 
        writeFileSync(PATH_TO_FILE_JSON, JSON.stringify(newDataForEventsList));
    }
    readEvents(): TEventDataFormat[] {
        const value = readFileSync(PATH_TO_FILE_JSON,{encoding:'utf-8'});
        if(value) return JSON.parse(value);
        return [];
    }
    editEvent({date, description,id}:TEventDataFormat): void {
        console.log(date, description,id)
        const eventsList: Array<TEventDataFormat> = this.readEvents()  
        const upDateArray = eventsList.filter(event => event.id !== id)   
        const valueToEdit = eventsList.filter(event => event.id === id)
        valueToEdit.forEach(value => {
               description ? value.description = description : ''
               date ? value.date = date : ''
        })   
        upDateArray.push({id: id, description: valueToEdit[0].description, date: valueToEdit[0].date})
            writeFileSync(PATH_TO_FILE_JSON, JSON.stringify(upDateArray))
            return
    }

    idGerator(): string {
        return Math.random().toString(36).substring(2, 9)
  }
}

type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}

interface IIdGenerator {
    idGerator() : string
}