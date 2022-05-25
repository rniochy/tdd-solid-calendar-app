import { useState } from "react"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'


type props = {
     date: string
     description: string
}
function CalendarEventSaved() {
 const [arrayFalseData,setArrayFalseData ] = useState<Array<number>>()   
    const CalendarEvents:React.FC <props> = ({date, description}) => {
        return( 
            <li>
                <section className="containerCalendaEventSaved">
                      <article>
                            <span > <p>{`${date}`}</p> <p>{`${description.substring(0, 80)} ...`}</p></span>
                            <div className="spanButton">
                            <span><MdDelete className="iconButton"/> <p>Delete</p> </span><span><BiEdit className="iconButton"/> Edit</span>
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


export default CalendarEventSaved