"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCard = void 0;
class TimeCard {
    _date;
    _hours;
    constructor(_date, _hours) {
        this._date = _date;
        this._hours = _hours;
    }
    get hours() {
        return this._hours;
    }
    get date() {
        return this._date;
    }
}
exports.TimeCard = TimeCard;
