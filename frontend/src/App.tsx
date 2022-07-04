
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import './App.css'
import Calendar from './apresentation/Calendar'

type TEventDataFormat =  {
  id:string,
  date: Date | string ,
  description:string 
}
interface updatePageValue {
     value: number | string,
     setValue: Dispatch<SetStateAction<number>>
     eventObject: TEventDataFormat,
     setEventObject: Dispatch<React.SetStateAction<TEventDataFormat>>

}

const updatePageInicial:updatePageValue = {
    value: 0,
    setValue:()=>0,
    eventObject: {id: '', date: '', description: ''},
    setEventObject: ()=> undefined
}
export const AppContext = createContext<updatePageValue>(updatePageInicial)

function App() {
  const [value, setValue] = useState<number>(10)
  const [eventObject, setEventObject] = useState<TEventDataFormat>({id: '', date: '', description: ''})

  return (
    <AppContext.Provider  value={{value, setValue, eventObject, setEventObject}}>
        <div className= {`App ${"light-mode"}`}>
          <Calendar/>  
        </div>
    </AppContext.Provider>
  )
}
export default App
