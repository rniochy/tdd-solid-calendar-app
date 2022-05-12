import React, {DetailedReactHTMLElement, HTMLAttributes, useEffect, useState } from "react";
import './calendar.css'

 const  Calendar: React.FC = () => {
    const [dayList, setDayList] = useState<DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>>();
    const [monthName, setmonthName] = useState<string>()
    const [yearName, setYearName] = useState<number>()
    const [datetDisplay, setDatetDisplay] = useState<number>()
    const [date, setDate] = useState<Date>(new Date())
    const [month, setMonth] = useState<number>(date.getMonth()+1)
    const [year, setYear] = useState<number>(date.getFullYear())
    const [days, setDays] = useState<number>()
    const [currentDay, setCurrentDay] = useState<number>(date.getDate())
  
    const monthNames:Array<string> = ['January', 'February', 'March',  'April', 'May',
        'June', 'july', 'August',  'September', 'October', 'November', 'December']

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
    const handlerClickEvent = (e: React.MouseEvent<HTMLUListElement>): void => {
        console.log(e)
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
            <div className="container">
                <aside>
                    <ul>
                        <li>Atual Date</li>
                        <li>Past Month</li>
                        <li>Past Year</li>
                        <li>Past  3 Months</li>
                        <li>Past 6 Months</li>
                        <li>Past Century</li>
                    </ul>
                </aside>
                <div className="calendarContainer">
                            <p className="datedisplay">{datetDisplay}</p>   
                    <section className="data_month_and_year">
                        <ul>
                            <article className="prevMothnext">
                                <li onClick={previousMonth} className="prev">&#10094;</li>
                                <li className="monthTitle"><span style={{fontSize:"18px"}} className="month-name">{monthName}</span></li>  
                                <li onClick={nextMonth} className="next">&#10095;</li>
                            </article>
                        </ul>
                                <span className='year'>{ yearName}</span>
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
                <aside className="eventList">
                    <ul>
                        <dl>Events
                            <ul>
                                <li>Atual Date</li>
                                <li>Past Month</li>
                                <li>Past Year</li>
                                <li>Atual Date</li>
                                <li>Atual Date</li>
                            </ul>
                        </dl>
                    </ul>
                </aside>
                    <section className="form_data">
                        <form className="eventDescription" action="#">
                                <fieldset>
                                    <legend>Event Descrition</legend>
                                    <input  type="text" placeholder="Describe your event"/> <input  type="submit"  value="Save"/> 
                                </fieldset>
                        </form>
                    </section>
            </div>
    </>
    );
     
}

export default Calendar;