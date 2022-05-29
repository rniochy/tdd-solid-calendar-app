import AddEvent from '../../src/aplication/addEvent'
import DeleteEvent from '../../src/aplication/deleteEvent'
import EditEvents from '../../src/aplication/editEvent'
import ReadEvent from '../../src/aplication/readEvents'
import LocalStorageRepository from '../../src/infra/repository/localstorage/localStorageRepository'


describe('Should be manegment events', ()=>{
     it('should create a event', ()=>{
          const eventAdd = new AddEvent(new LocalStorageRepository())
         expect(eventAdd.execute("Going to school later", new Date())).toBeUndefined()
     })
     it('should be create a delete', ()=>{
          const deleteEvent = new DeleteEvent(new LocalStorageRepository())
         expect(deleteEvent.execute("g250l7e")).toBeUndefined()
     })
     it('should be read a event', ()=>{
          const readEvent = new ReadEvent(new LocalStorageRepository())
          type TEventDataFormat =  {
               id:string,
               date: Date,
               description:string 
         }
         expect(readEvent.execute()).toBe(Array)
     })
     it('should be edit a event', ()=>{
          const editEvents = new EditEvents(new LocalStorageRepository())
         expect(editEvents.execute({date: new Date(), description: "goint to job", id:"voul434"})).toBeUndefined()
     })

})