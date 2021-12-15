import chai = require('chai');
import {describe, it, before} from 'mocha';
import CalendarConverter from '../src/index';
process.env.NODE_ENV = 'test';

describe('Test calendar conversion', () => {
    before(() => {
        chai.should();
    });

    /**
     * The reference results are from
     * https://stevemorse.org/jcal/julian.html
     * https://keisan.casio.com/exec/system/1227757509
     */
    it('Convert from gregorian calendar date to julian calendar date', (done) => {
        CalendarConverter.fromGregorianToJulian({year:2018, month: 8, day: 9}).should.be.eql({ year: 2018, month: 7, day: 27 });
        // this depends on the country. The change of the year was different in different areas. 2017-01-20 may also be right
        CalendarConverter.fromGregorianToJulian({year:2018, month: 2, day: 2}).should.be.eql({ year: 2018, month: 1, day: 20 });
        CalendarConverter.fromGregorianToJulian({year:1300, month:12, day:28}).should.be.eql({ year: 1300, month: 12, day: 20 });
        CalendarConverter.fromGregorianToJulian({year:1300, month: 1, day: 1}).should.be.eql({ year: 1299, month: 12, day: 25 });
        done();
    });

    it('Convert from julian calendar date to gregorian calendar date', (done) => {
        CalendarConverter.fromJulianToGregorian({year:1501, month: 1, day: 1}).should.be.eql({ year: 1501, month: 1, day: 11 });
        // this depends on the country. The change of the year was different in different areas. 2017-01-20 may also be right
        CalendarConverter.fromJulianToGregorian({year:1825, month:10, day:29}).should.be.eql({ year: 1825, month: 11, day: 10 });
        CalendarConverter.fromJulianToGregorian({year:1899, month:12, day:23}).should.be.eql({ year: 1900, month: 1, day: 4 });
        CalendarConverter.fromJulianToGregorian({year:1900, month: 2, day:16}).should.be.eql({ year: 1900, month: 2, day: 28 });
        done();
    });
});
