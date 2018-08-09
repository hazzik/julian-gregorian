## Julian-Gregorian
Converts calendar dates between the julian and gregorian calendar. It implements the calculation model from [wikipedia](https://de.wikipedia.org/wiki/Umrechnung_zwischen_julianischem_und_gregorianischem_Kalender)
## Usage
```javascript
import CalendarConverter from 'julian-gregorian';

  console.log(CalendarConverter.fromGregorianToJulian(2018,8,9));  // -> ''2018-7-27''
  console.log(CalendarConverter.fromJulianToGregorian(1501,1,1));  // -> ''1501-1-11''
```

## API
### CalendarConverter.fromGregorianToJulian(year, month, day)
Converts a gregorian calendar date into a string representation of the julian calendar
### CalendarConverter.fromGregorianToJulian(year, month, day)
Converts a julian calendar date into a string represantation of the gregorian calendar

## license

MIT

## author

tobinski

