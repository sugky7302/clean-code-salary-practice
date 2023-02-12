"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyClassification = void 0;
class HourlyClassification {
    _salary;
    _timeCards = {};
    constructor(salary) {
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    calculatePay(pc) {
        return this._salary;
    }
    addTimeCard(tc) {
        this._timeCards[tc.date.toDateString()] = tc;
    }
    getTimeCard(date) {
        return this._timeCards[date.toDateString()];
    }
}
exports.HourlyClassification = HourlyClassification;
