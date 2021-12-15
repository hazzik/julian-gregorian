import { ICalendarDate } from "./calendarDate";
/**
 * This class can transform calendar dates between julian and gregorian calendar
 */
export default class CalendarConverter {
    /**
     * Convert a julian calendar date to a gregorian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @returns {string}
     */
    static fromJulianToGregorian(date: ICalendarDate): ICalendarDate;
    /**
     * Convert a gregorian calendar date to a julian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @returns {string}
     * @param date
     */
    static fromGregorianToJulian(date: ICalendarDate): ICalendarDate;
    /**
     * Calculate the day difference between the two calendar
     * @param {number} year
     * @param {number} month
     * @returns {number}
     */
    private static dayDifference;
}
