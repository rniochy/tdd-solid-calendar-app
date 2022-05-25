export default interface EventRepository {
    addEvent(date:Date, description:string):void
    deleteEvent(id: string) : void
    readEvents() : TEventDataFormat[]
    editEvent(pros:TEventDataFormat): void
}

type TEventDataFormat =  {
    id:string,
    date: Date,
    description:string 
}