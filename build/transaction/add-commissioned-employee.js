"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommissionedEmployee = void 0;
const commissioned_classiflication_1 = require("../classification/commissioned-classiflication");
const biweekly_schedule_1 = require("../schedule/biweekly-schedule");
const add_employee_transaction_1 = require("./add-employee-transaction");
class AddCommissionedEmployee extends add_employee_transaction_1.AddEmployeeTransaction {
    itsSalary;
    itsCommissionRate;
    constructor(empId, name, address, salary, commissionRate) {
        super(empId, name, address);
        this.itsSalary = salary;
        this.itsCommissionRate = commissionRate;
    }
    makeClassification() {
        return new commissioned_classiflication_1.CommissionedClassification(this.itsSalary, this.itsCommissionRate);
    }
    makeSchedule() {
        return new biweekly_schedule_1.BiweeklySchedule();
    }
}
exports.AddCommissionedEmployee = AddCommissionedEmployee;
