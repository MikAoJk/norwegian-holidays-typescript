'use client';

import React from 'react';


export interface NorwegianHoliday {
    id: number;
    name: string;
    date: Date;
}


export const Holidays = () => {
    const currentYear = new Date().getFullYear();
    const easterDayDate = getEasterDay(currentYear);

    const firstNewYearsDay: NorwegianHoliday = {id: 1, name: "1. nyttårsdag", date: new Date(currentYear, 1, 1)};
    const maundyThursday: NorwegianHoliday = {id: 2,name: "Skjærtorsdag", date: subtractDays(easterDayDate,3)};
    const goodFriday: NorwegianHoliday = {id: 3,name: "Langfredag", date: subtractDays(easterDayDate, 2)};
    const easterDay: NorwegianHoliday = {id: 4,name: "1. påskedag", date: easterDayDate}
    const secoundEasterDay: NorwegianHoliday = {id: 5,name: "2. påskedag", date: addDays(easterDayDate, 1)};
    const laborDay: NorwegianHoliday = {id: 6,name: "Arbeidernes dag", date: new Date(currentYear, 4, 1)};
    const constitutionDay: NorwegianHoliday = {id: 7,name: "Grunnlovsdagen", date: new Date(currentYear, 4, 18)};
    const christsAscension: NorwegianHoliday = {id: 8,
        name: "Kristi Himmelfartsdag",
        date: addDays(easterDayDate, 39)
    };
    const firstdayOfPentecost: NorwegianHoliday = {id: 9,name: "1. pinsedag", date: addDays(easterDayDate, 49)};
    const secounDayOfPentecost: NorwegianHoliday = {id: 10,
        name: "2. pinsedag",
        date: addDays(easterDayDate, 50)
    };
    const firstofChristmas: NorwegianHoliday = {id: 11,name: "1. juledag", date: new Date(currentYear, 11, 25)};
    const secounofChristmas: NorwegianHoliday = {id: 12,name: "2. juledag", date: new Date(currentYear, 11, 26)};


    const norwegianHolidays: NorwegianHoliday[] = [];
    norwegianHolidays.push(firstNewYearsDay)
    norwegianHolidays.push(maundyThursday)
    norwegianHolidays.push(goodFriday)
    norwegianHolidays.push(easterDay)
    norwegianHolidays.push(secoundEasterDay)
    norwegianHolidays.push(laborDay)
    norwegianHolidays.push(constitutionDay)
    norwegianHolidays.push(christsAscension)
    norwegianHolidays.push(firstdayOfPentecost)
    norwegianHolidays.push(secounDayOfPentecost)
    norwegianHolidays.push(firstofChristmas)
    norwegianHolidays.push(secounofChristmas)


    return (
        <div className="m-auto pb-5 ">
            <table>
                <tbody>
                <tr>
                    <th>Holiday name</th>
                    <th>Holiday date</th>
                </tr>
                {norwegianHolidays.map(norwegianHolidays =>
                    <tr key={norwegianHolidays.id}>
                        <td>
                            {norwegianHolidays.name}
                        </td>
                        <td>
                            {norwegianHolidays.date.toISOString().substring(0, 10)}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );

}


const subtractDays = (date: Date, days: number) => {
    const dateOffset = (24*60*60*1000) * days;
    const newDate = new Date();
    newDate.setTime(date.getTime() - dateOffset);
    return newDate
}
const addDays = (date: Date, days: number) => {
    const dateOffset = (24*60*60*1000) * days;
    const newDate = new Date();
    newDate.setTime(date.getTime() + dateOffset);
    return newDate
}


const getEasterDay = (year: number) => {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);

    const month = Math.floor((h + l + 7 * m + 114) / 31) - 1;
    const day = month % 31 + 1;

    return new Date(year, month, day);
}