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
    public static fromJulianToGregorian({ year, month, day }: IDate): IDate {
        const td = CalendarConverter.dayDifference(year, month);
        day = day + td;

        // check end of the month
        let daysInMonth = CalendarConverter.daysInMonthGregorian(month, year);
        if (day > daysInMonth) {
            month += 1;
            day -= daysInMonth;
        }

        // check end of the year
        if (month > 12) {
            month = 1;
            year += 1;
        }

        return { year, month, day };
    }

    /**
     * Convert a gregorian calendar date to a julian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @param {number} year
     * @param {number} month
     * @param {number} day
     * @returns {string}
     */
    public static fromGregorianToJulian({ year, month, day }: IDate): IDate {
        const td = CalendarConverter.dayDifference(year, month);
        day =   day - td;

        // check end of the month
        if (day <= 0) {
            month -= 1;
            // we need julian leap year
            day = day + CalendarConverter.daysInMonthJulian(month, year);
        }

        // check end of the year
        if (month <= 0) {
            month = 12;
            year -= 1;
        }

        return { year, month, day };
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

    /**
     * Get the length of the month for a specific year in gregorian calendar
     * @param month
     * @param year
     * @returns {number}
     */
    private static daysInMonthGregorian(month: number, year: number): number {
        return new Date(year, month, 0).getDate();
    }

    /**
     * Get the length of the month for a specific year in gregorian calendar
     * @param month
     * @param year
     * @returns {number}
     */
    private static daysInMonthJulian(month: number, year: number): number {
        // julian leap year
        if (month === 2 && year % 4 === 0) {
            return 29;
        }
        
        // default month rule
        return new Date(year, month, 0).getDate();
    }
}
