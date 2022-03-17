import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container } from 'react-bootstrap';

function MyCalendar() {
    const allMonthValues = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // State for date selected by user
    const [selectedDate, setSelectedDate] = useState();

    // State for text above calander
    const [calendarText, setCalendarText] = useState(`No Date is selected`);

    // Function to update selected date and calander text
    const handleDateChange = (value) => {
        setSelectedDate(value);
        setCalendarText(`The selected Date is ${value.toDateString()}`);
    };

    // Function to handle selected Year change
    const handleYearChange = (value) => {
        const yearValue = value.getFullYear();
        setCalendarText(`${yearValue} Year  is selected`);
    };

    // Function to handle selected Month change
    const handleMonthChange = (value) => {
        const monthValue = allMonthValues[value.getMonth()];
        setCalendarText(`${monthValue} Month  is selected`);
    };
    return (
        <Container>
            <Calendar
                onClickMonth={handleMonthChange}
                onClickYear={handleYearChange}
                onChange={handleDateChange}
                value={selectedDate}
            />
        </Container>
    );
}

export default Calendar;
