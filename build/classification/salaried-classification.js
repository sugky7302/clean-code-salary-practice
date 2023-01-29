"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalariedClassification = void 0;
class SalariedClassification {
    _salary;
    constructor(salary) {
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    calculatePay(pc) {
        return this._salary;
    }
}
exports.SalariedClassification = SalariedClassification;
