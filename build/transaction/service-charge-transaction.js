"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceChargeTransaction = void 0;
const union_affiliation_1 = require("../affiliation/union-affiliation");
const payrolldatabase_1 = require("../payrolldatabase");
const service_charge_1 = require("../service-charge");
class ServiceChargeTransaction {
    memberId;
    date;
    charge;
    constructor(memberId, date, charge) {
        this.memberId = memberId;
        this.date = date;
        this.charge = charge;
    }
    execute() {
        const e = payrolldatabase_1.PayrollDatabase.getUnionMember(this.memberId);
        if (e) {
            const af = e.affiliation;
            if (af instanceof union_affiliation_1.UnionAffiliation) {
                af.addServiceCharge(new service_charge_1.ServiceCharge(this.date, this.charge));
            }
            else {
                throw new Error("Tried to add service charge to non-union employee");
            }
        }
    }
}
exports.ServiceChargeTransaction = ServiceChargeTransaction;
