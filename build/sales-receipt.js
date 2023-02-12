"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesReceipt = void 0;
class SalesReceipt {
    _date;
    _amount;
    constructor(_date, _amount) {
        this._date = _date;
        this._amount = _amount;
    }
    get date() {
        return this._date;
    }
    get amount() {
        return this._amount;
    }
}
exports.SalesReceipt = SalesReceipt;
