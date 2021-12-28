## Julian-Gregorian

Converts calendar dates between the julian and gregorian calendar. It implements the calculation model from [wikipedia](https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender)

## Usage

```javascript
import CalendarConverter from "julian-gregorian";
console.log(
    CalendarConverter.fromGregorianToJulian({ year: 2018, month: 8, day: 9 })
); // -> { year: 2018, month: 7, day: 27 }
console.log(
    CalendarConverter.fromJulianToGregorian({ year: 1501, month: 1, day: 1 })
); // -> { year: 1501, month: 1, day: 11 }
```

## API

### CalendarConverter.fromGregorianToJulian({ year, month, day })

Converts a Gregorian calendar date into a Julian calendar date

### CalendarConverter.fromGregorianToJulian({ year, month, day })

Converts a Julian calendar date into a Gregorian calendar date

## License

MIT

## Author

tobinski
