export default interface Http {
    on(uri?:string, callback?: Function) : void
    listen(port: number) : void
}