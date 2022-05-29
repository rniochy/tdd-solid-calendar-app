
type THeaderCalendarProps = {
    datetDisplay: number  | undefined,
    previousMonth: ()=> void, 
    nextMonth:()=> void,  
    monthName: string | undefined, 
    yearName?: number 
}

function HeaderCalendar ({datetDisplay,previousMonth, nextMonth,  monthName, yearName }: THeaderCalendarProps ) {
     return (
         <>
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
         </>

     )
}
export default HeaderCalendar