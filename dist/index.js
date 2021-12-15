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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQTs7R0FFRztBQUNIO0lBQ0k7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFTO1FBQzNELE1BQU0sRUFBRSxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFZix5QkFBeUI7UUFDekIsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQzNELEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxHQUFHLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkU7UUFFRCx3QkFBd0I7UUFDeEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQ1osS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksSUFBSSxDQUFDLENBQUM7U0FDYjtRQUVELE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQVM7UUFDM0QsTUFBTSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxHQUFHLEdBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUVqQix5QkFBeUI7UUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ1YsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLG1DQUFtQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRTtRQUVELHdCQUF3QjtRQUN4QixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ1gsSUFBSSxJQUFJLENBQUMsQ0FBQztTQUNiO1FBRUQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwRCx5Q0FBeUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gscUJBQXFCO1lBQ3JCLElBQUksSUFBSSxDQUFDLENBQUM7U0FDYjtRQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLDJCQUEyQjtRQUMzQixNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFpQjtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDM0QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUN4RCx5QkFBeUI7UUFDekIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUM7YUFDYjtTQUNKO1FBQ0QscUJBQXFCO1FBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUF2R0Qsb0NBdUdDIn0=