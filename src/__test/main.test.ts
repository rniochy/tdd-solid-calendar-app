     import * as fs from 'fs'
     import path from 'path'
     class CalendarApp { 
            constructor (private date_: string ){}

            get date () : string {
                  return this.date_;
            }       
      } 

      interface ICreateEvent {
            createEvent() : boolean
            readEvents() : void  
      }
      
      class EventManegment implements ICreateEvent {
            async addEvent  () : Promise<Boolean> {
                await fs.writeFile('event.json', 'eventcontent', (err: Error | null)=>{
                        if(err) return false
                  }    )
                  return true;  
                  }
            readEvents() : void {
                   
            }  
            createEvent() : boolean {
                  return true
            }
      }

describe('Should be return event data in Calendar App', ()=> {
     it('should be retur the data event', ()=> {
          const cDate = new CalendarApp('28042022');
           expect(cDate.date).toBe('28042022')
     })
})
describe('Should be create an event in EventManegment', ()=> {
     it('should be create an event', async ()=> {
          const createEvent = new EventManegment()
           expect( await createEvent.addEvent()).toBe(true)
     })
})