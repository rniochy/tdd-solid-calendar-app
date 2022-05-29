class Event {

    constructor(private id_:string,private date_: Date, private description_: string){}
     
    get id(){return this.id_;}

    get date() {return this.date_;}

    get description(){return this.description_;}
}
export default Event