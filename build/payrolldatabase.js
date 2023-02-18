"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollDatabase = void 0;
class PayrollDatabase {
    static employees = new Map();
    static members = new Map();
    static addEmployee(id, employee) {
        PayrollDatabase.employees.set(id, employee);
    }
    static getEmployee(id) {
        return PayrollDatabase.employees.get(id);
    }
    static deleteEmployee(id) {
        PayrollDatabase.employees.delete(id);
    }
    static getUnionMember(memberId) {
        return PayrollDatabase.members.get(memberId);
    }
    static addUnionMember(memberId, e) {
        PayrollDatabase.members.set(memberId, e);
    }
    static deleteUnionMember(memberId) {
        PayrollDatabase.members.delete(memberId);
    }
}
exports.PayrollDatabase = PayrollDatabase;
