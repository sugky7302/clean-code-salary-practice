"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollDatabase = void 0;
class PayrollDatabase {
    static employees = {};
    static addEmployee(id, employee) {
        PayrollDatabase.employees[id] = employee;
    }
    static getEmployee(id) {
        return PayrollDatabase.employees[id];
    }
}
exports.PayrollDatabase = PayrollDatabase;
