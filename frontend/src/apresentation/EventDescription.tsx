import React, { LegacyRef, useState, useContext } from "react";
import { AppContext } from "../App";


const baseUrl = 'http://localhost:5000'
const EventDescription:React.FC <TProps> = ({clickDayRef, dataInPut}) => {
    const [description, setDescription] = useState<string>()
    const {setValue, eventObject, setEventObject} = useContext(AppContext)
    
     async function inputHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(eventObject.id){
            console.log(eventObject)
            await fetch(`${baseUrl}/event/editevent/`,{method: 'put' , headers : {"Content-type": "application/json"}, body: JSON.stringify({id: eventObject.id, date: eventObject.date, description})})
            eventObject.id = ''
            setDescription('')
            eventObject.description = ''
            setValue(v=> v-1)
        } else {
            await fetch(`${baseUrl}/event/createevent`,{method: 'post', body: JSON.stringify({date: dataInPut, description}),headers: {"Content-Type": "application/json"} })
            setValue(v=> v-1)
        }
     }
     function descriptionHandler(e: React.ChangeEvent<HTMLInputElement>){
        setDescription(e.target.value)
     }
     return (
            <section className="form_data">
                <form onSubmit={inputHandler} className="eventDescription" action="#">
                        <fieldset>
                            <legend>Event Descrition</legend>
                                <label>Date</label>
                                <input name="date" className={`labelInput ${`labelInputWithText`}`} type="text" 
                                    value={dataInPut || ""+eventObject.date } readOnly/>
                                <br/>
                                <label>Description</label>
                                <input  value={description || eventObject.description} 
                                    onChange={descriptionHandler} name="desciption" ref ={clickDayRef} type="text" 
                                    placeholder="Describe your event"/> <input  type="submit"  value="Save"/> 
                        </fieldset>
                </form>
        </section>
     );
}

type TProps = {
    clickDayRef: LegacyRef<HTMLInputElement> | null
    dataInPut: string
}
export default EventDescription 