import { ICalendarDate } from "./calendarDate";

export abstract class Calendar {
    public static Julian = new (class extends Calendar {
        public isLeapYear(year: number): boolean {
            return year % 4 === 0;
        }
    })();

    public static Gregorian = new (class extends Calendar {
        public isLeapYear(year: number): boolean {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
    })();

    public abstract isLeapYear(year: number): boolean;

    public daysInMonth(year: number, month: number): number {
        if (month === 2) {
            return this.isLeapYear(year) ? 29 : 28;
        }

        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
    }

    public addDays(date: ICalendarDate, days: number): ICalendarDate {
        let newDay = date.day + days;
        let newMonth = date.month;
        let newYear = date.year;

        if (newDay <= 0) {
            newMonth -= 1;
            if (newMonth <= 0) {
                newMonth = 12;
                newYear -= 1;
            }
            newDay = newDay + this.daysInMonth(newYear, newMonth);
        } else {
            const daysInMonth = this.daysInMonth(newYear, newMonth);
            if (newDay > daysInMonth) {
                newDay = newDay - daysInMonth;
                newMonth += 1;
                if (newMonth > 12) {
                    newMonth = 1;
                    newYear += 1;
                }
            }
        }

        return { year: newYear, month: newMonth, day: newDay };
    }
}
