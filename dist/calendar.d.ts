import { ICalendarDate } from "./calendarDate";
export declare abstract class Calendar {
    static Julian: {
        isLeapYear(year: number): boolean;
        daysInMonth(year: number, month: number): number;
        addDays(date: ICalendarDate, days: number): ICalendarDate;
    };
    static Gregorian: {
        isLeapYear(year: number): boolean;
        daysInMonth(year: number, month: number): number;
        addDays(date: ICalendarDate, days: number): ICalendarDate;
    };
    abstract isLeapYear(year: number): boolean;
    daysInMonth(year: number, month: number): number;
    addDays(date: ICalendarDate, days: number): ICalendarDate;
}
