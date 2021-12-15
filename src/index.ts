import {Calendar} from "./calendar";
import {ICalendarDate} from "./calendarDate";

/**
 * This class can transform calendar dates between julian and gregorian calendar
 */
export default class CalendarConverter {
    /**
     * Convert a julian calendar date to a gregorian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @returns {string}
     */
    public static fromJulianToGregorian(date: ICalendarDate): ICalendarDate {
        const td = CalendarConverter.dayDifference(date.year, date.month);
        return Calendar.Gregorian.addDays(date, td);
    }

    /**
     * Convert a gregorian calendar date to a julian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @returns {string}
     * @param date
     */
    public static fromGregorianToJulian(date: ICalendarDate): ICalendarDate {
        const td = CalendarConverter.dayDifference(date.year, date.month);
        return Calendar.Julian.addDays(date, -td);
    }

    /**
     * Calculate the day difference between the two calendar
     * @param {number} year
     * @param {number} month
     * @returns {number}
     */
    private static dayDifference(year: number, month: number): number {
        // check if we are in january or february
        if (month < 3) {
            // subtract one year
            year -= 1;
        }

        const jh = Math.floor(year / 100);
        const a = Math.floor(jh / 4);
        // the rest of the division
        const b = jh % 4;
        // day difference
        return 3 * a + b - 2;
    }
}
