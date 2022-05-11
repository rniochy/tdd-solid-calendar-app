import React, {DetailedReactHTMLElement, HTMLAttributes, useEffect, useState } from "react";

 const  Calendar: React.FC = () => {
    const [dayList, setDayList] = useState<DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>>();
    const [monthName, setmonthName] = useState<string>()
    const [yearName, setYearName] = useState<number>()
    const [datetDisplay, setDatetDisplay] = useState<number>()
    const [date, setDate] = useState<Date>(new Date())
    const [month, setMonth] = useState<number>(date.getMonth()+1)
    const [year, setYear] = useState<number>(date.getFullYear())
    const [days, setDays] = useState<number>()
    const [currentDay, setCurrentDay] = useState<number>(date.getFullYear())
  
    const monthNames:Array<string> = ['January', 'February', 'March', 
     'April', 'May', 'June', 'july', 'August', 
     'September', 'October', 'November', 'December']

     useEffect(()=> {
          calendar()
     }, []);

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
                days = React.createElement('li', {}, "")
                daysArr.push(days)
             } else if (day === currentDay && month === date.getMonth() +1 && year === date.getFullYear() ){
                days = React.createElement('li', {className: 'active'}, day )
                daysArr.push(days)        
             } else {
                days = React.createElement('li', {className: 'active'}, day )
                daysArr.push(days)      
             }

        }  setDayList(React.createElement('ul', {className: "days"}, daysArr))
    }

    return ( 
    <>
        <div className="calendarBody">
            <section className="month">
                <p className="datedisplay">{datetDisplay}</p>
                <ul>
                    <li onClick={previousMonth} className="prev">&#10094;</li>
                    <li onClick={nextMonth} className="next">&#10095;</li>
                    <span style={{fontSize:"18px"}} className="month-name">{monthName}</span>
                    <br/>
                    <span className='year' style={{fontSize:"15px"}}>{ yearName}</span>
                    <li className="monthTitle"></li>
                </ul>
            </section>
            <section className="calendarData">
                <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>
                
                       {dayList}
            </section>
        </div>
    </>
    );
     
}

export default Calendar;