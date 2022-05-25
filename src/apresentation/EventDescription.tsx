import { LegacyRef } from "react";

type TProps = {
    clickDayRef: LegacyRef<HTMLInputElement> | null
    dataInPut: string
}

const EventDescription:React.FC <TProps> = ({clickDayRef, dataInPut}) => {
     return (
            <section className="form_data">
            <form className="eventDescription" action="#">
                    <fieldset>
                        <legend>Event Descrition</legend>
                            <label>Date   </label><input className={`labelInput ${`labelInputWithText`}`} type="text" value={dataInPut || ""} readOnly/>
                            <br/>
                            <label>Description</label><input ref ={clickDayRef} type="text" placeholder="Describe your event"/> <input  type="submit"  value="Save"/> 
                    </fieldset>
            </form>
        </section>
     );
}
export default EventDescription