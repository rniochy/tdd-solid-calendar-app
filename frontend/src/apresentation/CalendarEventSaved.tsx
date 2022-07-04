import React, { LegacyRef, useContext, useEffect, useState } from "react"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { AppContext } from "../App"

const baseUrl = 'http://localhost:5000' 

function CalendarEventSaved({clickDayRef}: props) {
 const [arrayData,setArrayData ] = useState<TEventDataFormat[]>([]) 
 const {value, setValue, setEventObject, eventObject} = useContext(AppContext)
 
 useEffect(()=>{
    (async () =>{
        await fetch(`${baseUrl}/event/getevent`).then(res=> res.json()).then(res=>{
            const {events} = res
            setArrayData(events) 
            }) 
      })()

   },[value])

    async function deleteFunction(id:string){
        await fetch(`${baseUrl}/event/deleteevent/${id}`,{method: 'delete'})
   } 

    const CalendarEvents:React.FC <TEventDataFormat> = ({date, description, id}) => {
        return( 
            <li>
                <section className="containerCalendaEventSaved">
                      <article>
                            <span ><p>{`${date}`.substring(0,10)}</p> <p>{`${description.substring(0, 80)} ...`}</p></span>
                            <div className="spanButton">
                                    <span onClick={async function (){
                                        await   deleteFunction(id)
                                        setValue(arr=> arr-1)
                                    }}>     
                                    <p><MdDelete className="iconButton"/></p>
                                    </span>
                                    <span onClick={function(){
                                        setEventObject({id, date, description})
                                        clickDayRef?.current.focus()
                                            }}><p><BiEdit className="iconButton"/></p>
                                    </span>
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

type props = {
    clickDayRef: LegacyRef<HTMLInputElement> | null
}
export default CalendarEventSaved