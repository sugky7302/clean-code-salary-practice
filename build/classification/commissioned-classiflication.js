"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionedClassification = void 0;
class CommissionedClassification {
    _salary;
    _commissionRate;
    constructor(_salary, _commissionRate) {
        this._salary = _salary;
        this._commissionRate = _commissionRate;
    }
    get salary() {
        return this._salary;
    }
    get commissionRate() {
        return this._commissionRate;
    }
    calculatePay(pc) {
        return this._salary;
    }
}
exports.CommissionedClassification = CommissionedClassification;
