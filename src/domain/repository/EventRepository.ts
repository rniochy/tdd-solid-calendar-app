export default interface EventRepository {
    addEvent( {date, description}: TEventDataFormat):void
    deleteEvent(id: string) : void
    readEvents() : TEventDataFormat[]
    editEvent(pros:TEventDataFormat): void
}

type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}