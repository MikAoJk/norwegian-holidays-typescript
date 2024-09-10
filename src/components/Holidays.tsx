'use client';

import React, {useState} from 'react';
import DropDown from "@/components/Dropdown";


export interface NorwegianHoliday {
    id: number;
    name: string;
    date: Date;
}


export const Holidays = () => {
    const currentYear = new Date().getFullYear();

    const [selectYear, setSelectYear] = useState<number>(currentYear);
    const years = () => {
        return [currentYear - 1, currentYear, currentYear + 1];
    };

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const easterDayDate = getEasterDay(selectYear);

    const firstNewYearsDay: NorwegianHoliday = {id: 1, name: "1. nyttårsdag", date: new Date(selectYear, 0, 2)};
    const palmsunday: NorwegianHoliday = {id: 2, name: "Palmesøndag", date: subtractDays(easterDayDate, 7)};
    const maundyThursday: NorwegianHoliday = {id: 3, name: "Skjærtorsdag", date: subtractDays(easterDayDate, 3)};
    const goodFriday: NorwegianHoliday = {id: 4, name: "Langfredag", date: subtractDays(easterDayDate, 2)};
    const easterDay: NorwegianHoliday = {id: 5, name: "1. påskedag", date: easterDayDate}
    const secoundEasterDay: NorwegianHoliday = {id: 6, name: "2. påskedag", date: addDays(easterDayDate, 1)};
    const laborDay: NorwegianHoliday = {id: 7, name: "Arbeidernes dag", date: new Date(selectYear, 4, 2)};
    const constitutionDay: NorwegianHoliday = {id: 8, name: "Grunnlovsdagen", date: new Date(selectYear, 4, 18)};
    const christsAscension: NorwegianHoliday = {
        id: 9,
        name: "Kristi Himmelfartsdag",
        date: addDays(easterDayDate, 39)
    };
    const firstdayOfPentecost: NorwegianHoliday = {id: 10, name: "1. pinsedag", date: addDays(easterDayDate, 49)};
    const secounDayOfPentecost: NorwegianHoliday = {
        id: 11,
        name: "2. pinsedag",
        date: addDays(easterDayDate, 50)
    };
    const firstofChristmas: NorwegianHoliday = {id: 12, name: "1. juledag", date: new Date(selectYear, 11, 25)};
    const secounofChristmas: NorwegianHoliday = {id: 13, name: "2. juledag", date: new Date(selectYear, 11, 26)};


    const norwegianHolidays: NorwegianHoliday[] = [];
    norwegianHolidays.push(firstNewYearsDay)
    norwegianHolidays.push(palmsunday)
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

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    const yearSelection = (year: number): void => {
        setSelectYear(year);
    };

    return (
        <div className="relative overflow-x-auto">
            <a className="mr-2">Year</a>
            <button
                className={showDropDown ? "active" : "mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6"}
                onClick={(): void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                    dismissHandler(e)
                }

            >
                {!showDropDown && (<div>{selectYear}</div>)}
                {showDropDown && (
                    <DropDown
                        years={years()}
                        showDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}
                        yearSelection={yearSelection}
                    />
                )}
            </button>
            <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-m uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">Holiday name</th>
                    <th scope="col" className="px-6 py-3">Holiday date(YYYY-mm-dd)</th>
                </tr>
                </thead>
                <tbody>
                {norwegianHolidays.map(norwegianHolidays =>
                    <tr className="border-b dark:border-gray-700" key={norwegianHolidays.id}>
                        <td className="px-6 py-4">
                            {norwegianHolidays.name}
                        </td>
                        <td className="px-6 py-4">
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
    const dateOffset = (24 * 60 * 60 * 1000) * days;
    const newDate = new Date();
    newDate.setTime(date.getTime() - dateOffset);
    return newDate
}
const addDays = (date: Date, days: number) => {
    const dateOffset = (24 * 60 * 60 * 1000) * days;
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

    const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
    const day = (((h + l - 7 * m + 114) % 31) + 1) + 1;

    return new Date(year, month, day);
}
