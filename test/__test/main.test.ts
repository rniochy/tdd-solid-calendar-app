import  {readFile, readFileSync, writeFile, writeFileSync, existsSync} from 'fs'
import {join, resolve } from 'path'
import crypto from 'crypto' 

const PATH_TO_FILE_JSON = join(resolve(), 'src', '__test/events/', 'other.json')

class CalendarApp { 
      constructor (private date_: Date, private description_: string){}

            get date () : Date {
                  return this.date_;
            }
            get description(): string {
                   return this.description_;
            }       
      } 

      interface IEventManegment  {
            addEvent( {date, description}: TEventDataFormat):void
            deleteEvent(id: string) : void
            readEvents() : TEventDataFormat[]
            editEvent(pros:TEventDataFormat): void
      }

      type TEventDataFormat =  {
            id:string,
            date: Date,
            description:string 
      }

       interface IIdGenerator {
              idGerator() : string
       }

      // interface IDataFormat {
      //        idFormat(id:string): string
      //        date(day: number, month: number, year:number): string // day month year -  
      // }
      // class DataFormat  implements IDataFormat{
      //       idFormat(id: string): string {
      //             throw new Error('Method not implemented.');
      //       }
      //       date(day: number, month: number, year:number): string {
      //             return `${day}/${month}/${year}`
      //       }       
      // }
      
      class EventManegment implements IEventManegment, IIdGenerator  {
            idGerator(): string {
                  return Math.random().toString(36).substring(2, 9)
            }
            editEvent({date, description,id}:TEventDataFormat): void {
                  const eventsList: Array<TEventDataFormat> = this.readEvents()     
            }
              
            deleteEvent(id: string): void {             
                  const eventsList: Array<TEventDataFormat> = this.readEvents()
                  const newDataForEventsList = eventsList.filter(events =>  events.id !==  id); 
                  writeFileSync(PATH_TO_FILE_JSON, JSON.stringify(newDataForEventsList ))
            }

            addEvent({date,description }: TEventDataFormat) : void{ 
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
            readEvents(): TEventDataFormat[] {        
                  const value = readFileSync(PATH_TO_FILE_JSON,{encoding:'utf-8'}) 
                  if(value) return JSON.parse(value) 
                  return JSON.parse(value)   
            }  
      }

describe('Should be return event data in Calendar App', ()=> {
     it('should be retur the data event', ()=> {
            const dateToTest = new Date()     
            const cDate = new CalendarApp( dateToTest, "my event to go party");
            expect(cDate.date).toBe(dateToTest)
     })
})
describe('Should be managment an event in EventManegment', ()=> {
      
     it('should be create an event',()=> {
          const createEvent = new EventManegment()
           expect(createEvent.addEvent({id:"",date: new Date(), description:' to at party'})).toBeUndefined()
     })

     it('should be read all event', ()=> {
      type TEventDataFormat =  {
            id:string,
            date: Date,
            description:string 
      }
            const createEvent = new EventManegment()
            expect(createEvent.readEvents()).toBeTruthy()
     })
     it('should be delete a event', ()=> {
          const createEvent = new EventManegment()
           expect(createEvent.deleteEvent("2y7juua")).toBeUndefined();
     })
})