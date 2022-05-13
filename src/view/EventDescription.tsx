import { LegacyRef } from "react";

type TProps = {
    clickDayCalendar: LegacyRef<HTMLInputElement> | undefined
}

const EventDescription:React.FC <TProps> = ({clickDayCalendar}) => {
     return (
            <section className="form_data">
            <form className="eventDescription" action="#">
                    <fieldset>
                        <legend>Event Descrition</legend>
                        <input ref ={clickDayCalendar} type="text" placeholder="Describe your event"/> <input  type="submit"  value="Save"/> 
                    </fieldset>
            </form>
        </section>
     );
}
export default EventDescription