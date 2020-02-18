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
    static fromJulianToGregorian({ year, month, day }) {
        const td = CalendarConverter.dayDifference(year, month);
        day = day + td;
        // check end of the month
        if (day > CalendarConverter.daysInMonthGregorian(month, year)) {
            month += 1;
            day = day - CalendarConverter.daysInMonthGregorian(month - 1, year);
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
    static fromGregorianToJulian({ year, month, day }) {
        const td = CalendarConverter.dayDifference(year, month);
        day = day - td;
        // check end of the month
        if (day <= 0) {
            month -= 1;
            // we need julian schaltjahresregel
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNIO0lBQ0k7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFpRDtRQUNuRyxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWYseUJBQXlCO1FBQ3pCLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRTtZQUMzRCxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ1gsR0FBRyxHQUFHLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtZQUNaLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDVixJQUFJLElBQUksQ0FBQyxDQUFDO1NBQ2I7UUFFRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFpRDtRQUNuRyxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEdBQUcsR0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWpCLHlCQUF5QjtRQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDVixLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ1gsbUNBQW1DO1lBQ25DLEdBQUcsR0FBRyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDWCxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQ2I7UUFFRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BELHlDQUF5QztRQUN6QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxxQkFBcUI7WUFDckIsSUFBSSxJQUFJLENBQUMsQ0FBQztTQUNiO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsMkJBQTJCO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakIsaUJBQWlCO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUMzRCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQ3hELHlCQUF5QjtRQUN6QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDYixJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQzthQUNiO1NBQ0o7UUFDRCxxQkFBcUI7UUFDckIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLENBQUM7Q0FDSjtBQXZHRCxvQ0F1R0MifQ==