"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class can transform calendar dates between julian and gregorian calendar
 */
class CalendarConverter {
    /**
     * Convert a julian calendar date to a gregorian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @param {number} year
     * @param {number} month
     * @param {number} day
     * @returns {string}
     */
    static fromJulianToGregorian(year, month, day) {
        const td = CalendarConverter.dayDifference(year, month);
        day = day + td;
        // check end of the month
        if (day > this.daysInMonthGregorian(month, year)) {
            month += 1;
            day = day - this.daysInMonthGregorian(month - 1, year);
        }
        // check end of the year
        if (month > 12) {
            month = 1;
            year += 1;
        }
        return `${day} ${month} ${year}`;
    }
    /**
     * Convert a gregorian calendar date to a julian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @param {number} year
     * @param {number} month
     * @param {number} day
     * @returns {string}
     */
    static fromGregorianToJulian(year, month, day) {
        const td = CalendarConverter.dayDifference(year, month);
        day = day - td;
        // check end of the month
        if (day <= 0) {
            month -= 1;
            // we need julian schaltjahresregel
            day = day + this.daysInMonthJulian(month, year);
        }
        // check end of the year
        if (month <= 0) {
            month = 12;
            year -= 1;
        }
        return `${day} ${month} ${year}`;
    }
    /**
     * Calculate the day difference between the two calendar
     * @param {number} year
     * @param {number} month
     * @returns {number}
     */
    static dayDifference(year, month) {
        // check if we are in january or february
        if (month < 3) {
            // substract one year
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
    static daysInMonthGregorian(month, year) {
        return new Date(year, month, 0).getDate();
    }
    /**
     * Get the length of the month for a specific year in gregorian calendar
     * @param month
     * @param year
     * @returns {number}
     */
    static daysInMonthJulian(month, year) {
        // julian schaltjahrregel
        if (month === 2) {
            if (year % 4 === 0) {
                return 29;
            }
        }
        // default month rule
        return new Date(year, month, 0).getDate();
    }
}
exports.default = CalendarConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNIO0lBQ0k7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7UUFDeEUsTUFBTSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUVmLHlCQUF5QjtRQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQzlDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFEO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtZQUNaLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDVixJQUFJLElBQUksQ0FBQyxDQUFDO1NBQ2I7UUFFRCxPQUFPLEdBQUcsR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7UUFDeEUsTUFBTSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxHQUFHLEdBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUVqQix5QkFBeUI7UUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ1YsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLG1DQUFtQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkQ7UUFFRCx3QkFBd0I7UUFDeEIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ1osS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksSUFBSSxDQUFDLENBQUM7U0FDYjtRQUVELE9BQU8sR0FBRyxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDcEQseUNBQXlDO1FBQ3pDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNYLHFCQUFxQjtZQUNyQixJQUFJLElBQUksQ0FBQyxDQUFDO1NBQ2I7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QiwyQkFBMkI7UUFDM0IsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQixpQkFBaUI7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzNELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDeEQseUJBQXlCO1FBQ3pCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNiLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjtRQUNELHFCQUFxQjtRQUNyQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBeEdELG9DQXdHQyJ9