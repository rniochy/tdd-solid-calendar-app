import ReadEvent from '../aplication/readEvents'
import LocalStorageRepository from '../infra/repository/localstorage/localStorageRepository'
import { useEffect, useState } from "react"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

type props = {
     date: string
     description: string
}
function CalendarEventSaved() {
 const [arrayData,setArrayData ] = useState<TEventDataFormat[]>()   

   useEffect(()=>{
       const readEvents = new ReadEvent(new LocalStorageRepository())
       setArrayData(readEvents.execute()) 

   })

   console.log(arrayData)
    const CalendarEvents:React.FC <props> = ({date, description}) => {
        return( 
            <li>
                <section className="containerCalendaEventSaved">
                      <article>
                            <span > <p>{`${date}`}</p> <p>{`${description.substring(0, 80)} ...`}</p></span>
                            <div className="spanButton">
                             
                            <span><p><MdDelete className="iconButton"/></p> </span><span><p><BiEdit className="iconButton"/></p></span>
                            </div>      
                      </article>
                </section>
            </li>
        );

    }
  return (
          <>
{/*  */}
           {/* {    arrayFalseData?.forEach(elem=>{ <h1></h1>}) */}
               <CalendarEvents date={"05 15 2022"} description={"to party tonight"}/>
               <CalendarEvents date={"05 15 2022"} description={"to party tonight"}/>
               <CalendarEvents date={"05 15 2022"} description={"to party tonight"}/>
               <CalendarEvents date={"05 15 2022"} description={"to party tonight"}/>
               <CalendarEvents date={"05 15 2022"} description={"to party tonight"}/>
               <CalendarEvents date={"05 15 2022"} description={"to party tonight"}/>
               <CalendarEvents date={"05 15 2022"} description={"to party tonight"}/>
               
          </>
  );
}

type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}
export default CalendarEventSaved