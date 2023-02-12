"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSalariedEmployee = void 0;
const salaried_classiflication_1 = require("../classification/salaried-classiflication");
const month_schedule_1 = require("../schedule/month-schedule");
const add_employee_transaction_1 = require("./add-employee-transaction");
class AddSalariedEmployee extends add_employee_transaction_1.AddEmployeeTransaction {
    itsSalary;
    constructor(empId, name, address, salary) {
        super(empId, name, address);
        this.itsSalary = salary;
    }
    makeClassification() {
        return new salaried_classiflication_1.SalariedClassification(this.itsSalary);
    }
    makeSchedule() {
        return new month_schedule_1.MonthlySchedule();
    }
}
exports.AddSalariedEmployee = AddSalariedEmployee;
