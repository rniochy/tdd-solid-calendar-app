import { LegacyRef } from "react";

type TProps = {
    clickDayRef: LegacyRef<HTMLInputElement> | null
}

const EventDescription:React.FC <TProps> = ({clickDayRef}) => {
     return (
            <section className="form_data">
            <form className="eventDescription" action="#">
                    <fieldset>
                        <legend>Event Descrition</legend>
                        <input ref ={clickDayRef} type="text" placeholder="Describe your event"/> <input  type="submit"  value="Save"/> 
                    </fieldset>
            </form>
        </section>
     );
}
export default EventDescription