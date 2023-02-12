"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollDatabase = void 0;
class PayrollDatabase {
    static employees = new Map();
    static addEmployee(id, employee) {
        PayrollDatabase.employees.set(id, employee);
    }
    static getEmployee(id) {
        return PayrollDatabase.employees.get(id);
    }
    static deleteEmployee(id) {
        PayrollDatabase.employees.delete(id);
    }
}
exports.PayrollDatabase = PayrollDatabase;
