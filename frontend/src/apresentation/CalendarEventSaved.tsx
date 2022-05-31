import React, { MouseEventHandler, useEffect, useState } from "react"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const baseUrl = 'http://localhost:5000'
function CalendarEventSaved() {
 const [arrayData,setArrayData ] = useState<TEventDataFormat[]>([])   

   useEffect(()=>{
       fetch(`${baseUrl}/event/getevent`).then(res=> res.json()).then(res=>{
       const {events} = res
       setArrayData(events) 
    })
   },[])

    const CalendarEvents:React.FC <TEventDataFormat> = ({date, description, id}) => {
        return( 
            <li>
                <section className="containerCalendaEventSaved">
                      <article>
                            <span ><p>{`${date}`.substring(0,10)}</p> <p>{`${description.substring(0, 80)} ...`}</p></span>
                            <div className="spanButton">
                            <span onClick={async function (){
                                    fetch(`${baseUrl}/event/deleteevent`,{method: 'post',body: id})
                            }}>     
                            <p><MdDelete className="iconButton"/></p>
                            
                             </span><span><p><BiEdit className="iconButton"/></p></span>
                            </div>      
                      </article>
                </section>
            </li>
        );
    }
  return (
          <>
                {
                     arrayData.map((value)=> <CalendarEvents key={value.id} id={value.id}
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