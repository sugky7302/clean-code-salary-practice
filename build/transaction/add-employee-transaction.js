"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmployeeTransaction = void 0;
const employee_1 = require("../employee");
const hold_method_1 = require("../method/hold-method");
const payrolldatabase_1 = require("../payrolldatabase");
class AddEmployeeTransaction {
    empid;
    itsName;
    itsAddress;
    constructor(empid, itsName, itsAddress) {
        this.empid = empid;
        this.itsName = itsName;
        this.itsAddress = itsAddress;
    }
    // 執行新增員工的事務
    execute() {
        const e = new employee_1.Employee(this.empid, this.itsName, this.itsAddress, this.makeClassification(), this.makeSchedule(), new hold_method_1.HoldMethod());
        payrolldatabase_1.PayrollDatabase.addEmployee(this.empid, e);
    }
}
exports.AddEmployeeTransaction = AddEmployeeTransaction;
