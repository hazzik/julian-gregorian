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
        CalendarConverter.fromGregorianToJulian(2018,8,9).should.be.eq('2018-7-27');
        // this depends on the country. The change of the year was different in different areas. 2017-01-20 may also be rigjt
        CalendarConverter.fromGregorianToJulian(2018,2,2).should.be.eq('2018-1-20');
        CalendarConverter.fromGregorianToJulian(1300,12,28).should.be.eq('1300-12-20');
        CalendarConverter.fromGregorianToJulian(1300,1,1).should.be.eq('1299-12-25');
        done();
    });

    it('Convert from julian calendar date to gregorian calendar date', (done) => {
        CalendarConverter.fromJulianToGregorian(1501,1,1).should.be.eq('1501-1-11');
        // this depends on the country. The change of the year was different in different areas. 2017-01-20 may also be rigjt
        CalendarConverter.fromJulianToGregorian(1825,10,29).should.be.eq('1825-11-10');
        CalendarConverter.fromJulianToGregorian(1899,12,23).should.be.eq('1900-1-4');
        CalendarConverter.fromJulianToGregorian(1900,2,16).should.be.eq('1900-2-28');
        done();
    });
});
