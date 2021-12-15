"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calendar_1 = require("./calendar");
/**
 * This class can transform calendar dates between julian and gregorian calendar
 */
class CalendarConverter {
    /**
     * Convert a julian calendar date to a gregorian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @returns {string}
     */
    static fromJulianToGregorian(date) {
        const td = CalendarConverter.dayDifference(date.year, date.month);
        return calendar_1.Calendar.Gregorian.addDays(date, td);
    }
    /**
     * Convert a gregorian calendar date to a julian calendar date
     * calculation based on https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender
     * @returns {string}
     * @param date
     */
    static fromGregorianToJulian(date) {
        const td = CalendarConverter.dayDifference(date.year, date.month);
        return calendar_1.Calendar.Julian.addDays(date, -td);
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
exports.default = CalendarConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFHcEM7O0dBRUc7QUFDSCxNQUFxQixpQkFBaUI7SUFDbEM7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFtQjtRQUNuRCxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsT0FBTyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFtQjtRQUNuRCxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsT0FBTyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwRCx5Q0FBeUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsb0JBQW9CO1lBQ3BCLElBQUksSUFBSSxDQUFDLENBQUM7U0FDYjtRQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLDJCQUEyQjtRQUMzQixNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFpQjtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUExQ0Qsb0NBMENDIn0=