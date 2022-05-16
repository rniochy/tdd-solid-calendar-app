import { useState } from "react"

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
                             <span> <p>{`${date}`}</p> <p>{`${description.substring(0, 10)} ...`}</p></span><span className="spanButton"><button>delete</button> <button>edit</button> </span>
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
               
          </>
  );
}


export default CalendarEventSaved