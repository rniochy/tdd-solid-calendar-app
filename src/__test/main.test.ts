class CalendarApp { 
     
      constructor (private date_: string ){
             
      }

      set date (date: string){
            this.date_ = date;
      }

      get date () : string {
            return this.date_;
      } 
       
} 

describe('Should be return event data', ()=> {
     it('should be create an event', ()=> {
          const cDate = new CalendarApp('28042022');
           expect(cDate.date).toBe('28042022')
     })
})