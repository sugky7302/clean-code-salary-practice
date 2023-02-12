"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHourlyEmployee = void 0;
const hourly_classiflication_1 = require("../classification/hourly-classiflication");
const weekly_schedule_1 = require("../schedule/weekly-schedule");
const add_employee_transaction_1 = require("./add-employee-transaction");
class AddHourlyEmployee extends add_employee_transaction_1.AddEmployeeTransaction {
    itsSalary;
    constructor(empId, name, address, salary) {
        super(empId, name, address);
        this.itsSalary = salary;
    }
    makeClassification() {
        return new hourly_classiflication_1.HourlyClassification(this.itsSalary);
    }
    makeSchedule() {
        return new weekly_schedule_1.WeeklySchedule();
    }
}
exports.AddHourlyEmployee = AddHourlyEmployee;
