import  {readFile, readFileSync, writeFile, writeFileSync, existsSync} from 'fs'
import {join, resolve } from 'path'

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
            deleteEvent(id: Date) : void
            readEvents() : TEventDataFormat[]
            editEvent(pros:TEventDataFormat): void
      }

      type TEventDataFormat =  {
            id:string,
            date: Date,
            description:string 
      }

      interface IDataFormat {
             idFormat: string
             date: string // day month year -  
      }
      class DataFormat {
             
      }
      
      class EventManegment implements IEventManegment  {
            editEvent({date, description,id}:TEventDataFormat): void {
                  const eventsList: Array<TEventDataFormat> = this.readEvents()

                 
            }
              
            deleteEvent(id: Date): void {             
                  const eventsList: Array<TEventDataFormat> = this.readEvents()
                  eventsList.push({id: "4", date: new Date(), description: "some TTevent"})
                  const newDataForEventsList = eventsList.filter(events =>  +events.id !==  5); 
                  writeFileSync(PATH_TO_FILE_JSON, JSON.stringify(newDataForEventsList ))
            }

            addEvent({date,description }: TEventDataFormat) : void{ 
                  const array_with_events = this.readEvents()
                  if(Array.isArray(array_with_events) && array_with_events.length > 0){
                        array_with_events.push({date, description})
                        writeFileSync(PATH_TO_FILE_JSON, JSON.stringify(array_with_events))  
                         return
                  }
                  writeFileSync(PATH_TO_FILE_JSON, JSON.stringify([{date, description}]))  
             }
            readEvents(): TEventDataFormat[] {        
                  const value = readFileSync(PATH_TO_FILE_JSON,{encoding:'utf-8'}) 
                  if(value) return JSON.parse(value) 
                  return []     
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
           expect(createEvent.addEvent({date: new Date(), description:' to at party'})).toBeUndefined()
     })

     it('should be read all event', ()=> {
            const createEvent = new EventManegment()
            expect(createEvent.readEvents()).toBeTruthy()
     })
     it('should be delete a event', ()=> {
          const createEvent = new EventManegment()
           expect(createEvent.deleteEvent(new Date)).toBeUndefined();
     })
})