"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionAffiliation = void 0;
class UnionAffiliation {
    _serviceCharges = {};
    addServiceCharge(charge) {
        this._serviceCharges[charge.date.toISOString().slice(0, 10)] = charge;
    }
    getServiceCharge(date) {
        return this._serviceCharges[date.toISOString().slice(0, 10)];
    }
}
exports.UnionAffiliation = UnionAffiliation;
