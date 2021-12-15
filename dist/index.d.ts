interface IDate {
    year: number;
    month: number;
    day: number;
}
/**
 * This class can transform calendar dates between julian and gregorian calendar
 */
export default class CalendarConverter {
    /**
     * Convert a julian calendar date to a gregorian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @param {number} year
     * @param {number} month
     * @param {number} day
     * @returns {string}
     */
    static fromJulianToGregorian({ year, month, day }: IDate): IDate;
    /**
     * Convert a gregorian calendar date to a julian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @param {number} year
     * @param {number} month
     * @param {number} day
     * @returns {string}
     */
    static fromGregorianToJulian({ year, month, day }: IDate): IDate;
    /**
     * Calculate the day difference between the two calendar
     * @param {number} year
     * @param {number} month
     * @returns {number}
     */
    private static dayDifference;
    /**
     * Get the length of the month for a specific year in gregorian calendar
     * @param month
     * @param year
     * @returns {number}
     */
    private static daysInMonthGregorian;
    /**
     * Get the length of the month for a specific year in gregorian calendar
     * @param month
     * @param year
     * @returns {number}
     */
    private static daysInMonthJulian;
}
export {};
