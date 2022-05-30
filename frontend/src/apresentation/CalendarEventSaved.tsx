import React, { MouseEventHandler, useEffect, useState } from "react"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

type props = {
     date: Date
     description: string
}
function CalendarEventSaved() {
 const [arrayData,setArrayData ] = useState<TEventDataFormat[]>([])   

   useEffect(()=>{
       fetch('http://localhost:3001/event/getevent').then(res=> res.json()).then(res=>{
       const {events} = res
       setArrayData(events)
    })
   },[])

    function deleteEvent(e: React.MouseEvent<HTMLParagraphElement>) {
        console.log(e.currentTarget.enterKeyHint)
    
   }

    const CalendarEvents:React.FC <props> = ({date, description}) => {
        return( 
            <li>
                <section className="containerCalendaEventSaved">
                      <article>
                            <span ><p>{`${date}`.substring(0,10)}</p> <p>{`${description.substring(0, 80)} ...`}</p></span>
                            <div className="spanButton">
                            <span><p onClick={deleteEvent}><MdDelete className="iconButton"/></p> </span><span><p><BiEdit className="iconButton"/></p></span>
                            </div>      
                      </article>
                </section>
            </li>
        );
    }
  return (
          <>
                {
                     arrayData.map((value, index)=> <CalendarEvents key={value.id} 
                        date={value.date} 
                        description={value.description} />
                    )
                }
          </>
  );
}

type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}
export default CalendarEventSaved