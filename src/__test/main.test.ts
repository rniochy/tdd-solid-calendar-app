     import  {readFile, readFileSync, writeFile} from 'fs'
     import {join, resolve } from 'path'

     

     class CalendarApp { 
            constructor (private date_: string, private description_: string | ''){}

            get date () : string {
                  return this.date_;
            }
            get description(): string {
                   return this.description_;
            }       
      } 

      interface IEventManegment  {
            addEvent(eventData: TEventDataFormat) :Promise <Boolean> 
            createEvent() : boolean
            readEvents() : string 
      }

      type TEventDataFormat =  {
            id:string,
            date: Date,
            description:string
      }
      
      class EventManegment implements IEventManegment  {
            async addEvent  () : Promise<Boolean> {
                await writeFile(join(resolve(), 'src', '__test', 'events/events.json'), 'eventcontent', (err: Error | null)=>{
                        if(err) return false
                  }    )
                  return true;  
                  }
            readEvents() : string {          

                  let value =  readFileSync(join(resolve(), 'src', '__test', 'events/events.json'),{encoding:'utf-8'})

                  return value
            }  
            createEvent() : boolean {
                  return true
            }
      }

describe('Should be return event data in Calendar App', ()=> {
     it('should be retur the data event', ()=> {
          const cDate = new CalendarApp('28042022', "my event to go party");
           expect(cDate.date).toBe('28042022')
     })
})
describe('Should be managment an event in EventManegment', ()=> {
     it('should be create an event', async ()=> {
          const createEvent = new EventManegment()
           expect( await createEvent.addEvent()).toBe(true)
     })
     it('should be read all event', ()=> {
          const createEvent = new EventManegment()
           expect(createEvent.readEvents()).toEqual('eventcontent')
     })
})