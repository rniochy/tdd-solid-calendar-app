     import  {readFile, readFileSync, writeFile, writeFileSync, existsSync} from 'fs'
     import {join, resolve } from 'path'

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
            addEvent(eventData: TEventDataFormat):void
            createEvent() : boolean
            readEvents() : string
      }

      type TEventDataFormat =  {
            id:string,
            date: Date,
            description:string 
      }
      const PATH_TO_FILE_JSON = join(resolve(), 'src', '__test/events/', 'other.json')
      class EventManegment implements IEventManegment  {
            addEvent({id, date,description }: TEventDataFormat) : void{    
                   writeFileSync(PATH_TO_FILE_JSON, JSON.stringify([{id, date, description}]))  
             }
            readEvents(): string{        
                  const name=  readFileSync(PATH_TO_FILE_JSON,{encoding:'utf-8'}) 
                  return name       
            }  
            createEvent() : boolean {
                  return true
            }
      }

describe('Should be return event data in Calendar App', ()=> {
     it('should be retur the data event', ()=> {
          const cDate = new CalendarApp( new Date, "my event to go party");
           expect(cDate.date).toBe('28042022')
     })
})
describe('Should be managment an event in EventManegment', ()=> {
     it('should be create an event', async ()=> {
          const createEvent = new EventManegment()
           expect(await createEvent.addEvent({id: '2', date: new Date(), description:'Time to at party'})).toBeUndefined()
     })
     it('should be read all event', ()=> {
          const createEvent = new EventManegment()
           const value = JSON.stringify([{id: '2', date: new Date(), description:'Time to at party'}])
           expect(createEvent.readEvents()).toEqual(value)
     })
})