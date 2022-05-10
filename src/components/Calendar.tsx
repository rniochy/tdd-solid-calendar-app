import React from "react";

 const  Calendar = () => {

    return ( 
    <>
        <div className="calendarBody">
            <section className="month">
                <p className="display"></p>
                <ul>
                    <li className="prev">&#10094;</li>
                    <li className="next">&#10095;</li>
                    <span style={{fontSize:"18px"}} className="month-name"></span>
                    <br/>
                    <span className='year' style={{fontSize:"15px"}}></span>
                </ul>
            </section>

            
        </div>
    </>
    );
     
}

export default Calendar;