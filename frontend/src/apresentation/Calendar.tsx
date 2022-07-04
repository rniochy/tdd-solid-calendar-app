import React, {DetailedReactHTMLElement, HTMLAttributes, useEffect, useState, useRef} from "react";
import CalendarData from "./CalendarData";
import CalendarEventSaved from "./CalendarEventSaved";
import EventDescription from "./EventDescription";
import HeaderCalendar from "./HeaderCalendar";
import {BiSun} from 'react-icons/bi'
import {BiMoon} from 'react-icons/bi'
import './calendar.css'

 const  Calendar: React.FC = () => {
    const [dayList, setDayList] = useState<DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>>();
    const [monthName, setmonthName] = useState<string>()
    const [yearName, setYearName] = useState<number>()
    const [datetDisplay, setDatetDisplay] = useState<number>()
    const [date, setDate] = useState<Date>(new Date())
    const [month, setMonth] = useState<number>(date.getMonth()+1)
    const [dataInPut, setDataInPut] = useState<string>("")
    const [year, setYear] = useState<number>(date.getFullYear())
    const [currentDay, setCurrentDay] = useState<number>(date.getDate())
    const monthNames:Array<string> = ['January', 'February', 'March',  'April', 'May',
        'June', 'july', 'August',  'September', 'October', 'November', 'December']

     useEffect(()=> {
          calendar()
     }, []);

    const clickDayCalendar = useRef<HTMLInputElement | null >(null)

    const nextMonth = (): void =>{
        if(month === 12) {
             setMonth(1)
             setYear(year +1)
        } else {
             setMonth(month +1)
        }
        calendar()
    }
    const previousMonth = (): void=>{
        if(month === 1){
            setMonth(12)
            setYear(year -1)
        } else {
            setMonth(month -1)
        }
        calendar()
    }
    const handlerClickEvent = (e: React.MouseEvent<HTMLUListElement>): void => {
        clickDayCalendar.current?.focus()
        setDataInPut(`${e.currentTarget.getAttribute('value')} /${month} /${year}` )
    }
    function handlerOnClickChangeData(e: React.MouseEvent<HTMLLIElement> ): void {
            switch(e.currentTarget.getAttribute('value')){
                case '1' :  
                setMonth(date.getMonth()+1)
                setYear(date.getFullYear())
                calendar() 
                break;
                case '2' : 
                    previousMonth()
                break;
                case '3' :  setYear(year -1)
                calendar()
                break;
                case '4' :
                    if(month < 3 || month === 0){
                        setMonth(12 - (3 - month))
                        setYear(year -1)
                    } else {

                        setMonth(month -3)
                    }
                    calendar()
                    break;
                    case '5' :  
                        if(month < 6 || month === 0){
                            setMonth(12 - (6 - month))
                            setYear(year -1)
                        } else {

                            setMonth(month -6)
                        }
                        calendar()
                break;
                case '6' :  
                    year > 0  && setYear(year -100)
                    calendar()
                break;
                default: ''
            }
     }
    const calendar = (): void => {
        let amountDaysInMonth:number = new Date(year, month, 0).getDate()
        let amountDaysAtWeek:number = new Date(year, month-1, 1).getDay()
         
        setmonthName(monthNames[month-1])
        setYearName(year)
        setDatetDisplay(currentDay)

        let gaps;
        if(amountDaysAtWeek === 0){
             gaps = 6
        } else {
             gaps = amountDaysAtWeek -1
        }
        const daysArr = []
        for(let day = -gaps + 1; day <= amountDaysInMonth; day++){
            let days = React.createElement('li', {}, day)
        
             if(day <= 0){
                days = React.createElement('li', {key:day}, "")
                daysArr.push(days)
             } else if (day === currentDay && month === date.getMonth()+1 && year === date.getFullYear() ){
                days = React.createElement('li', {value: day, key:day,  className: 'active', onClick:handlerClickEvent}, day)
                daysArr.push(days)        
             } else {
                days = React.createElement('li', {value: day, key:day,  onClick:handlerClickEvent}, day)
                daysArr.push(days)      
             }

        }   setDayList(React.createElement('ul', {className: "days_of_week"}, daysArr))
    }

    return ( 
    <> 
            <div className="changeThemeContainer">
                <i className="changeTheme"><BiSun/></i>
                <i className="changeTheme"><BiMoon/></i>
            </div>
            <div className="container">
                <aside>
                    <ul>
                        <li  value= '1' onClick={handlerOnClickChangeData}>Atual Date</li>
                        <li  value= '2' onClick={handlerOnClickChangeData} >Past Month</li>
                        <li  value= '3' onClick={handlerOnClickChangeData} >Past Year</li>
                        <li  value= '4' onClick={handlerOnClickChangeData} >Past  3 Months</li>
                        <li  value= '5' onClick={handlerOnClickChangeData} >Past 6 Months</li>
                        <li  value= '6' onClick={handlerOnClickChangeData} >Past Century</li>
                    </ul>
                </aside>
                <div className="calendarContainer">
                    <HeaderCalendar datetDisplay = {datetDisplay} previousMonth ={previousMonth} nextMonth={nextMonth}  monthName={monthName} yearName={yearName} />
                    <CalendarData dayList ={dayList}/>
                </div>
                <aside className="eventList">
                    <ul>
                        <dl>Events
                            <ul>
                                 <CalendarEventSaved clickDayRef={clickDayCalendar}/>
                            </ul>
                        </dl>
                    </ul>
                </aside>
                    <EventDescription dataInPut= {dataInPut} clickDayRef={clickDayCalendar} />
            </div>
    </>
    );
     
}

export default Calendar;