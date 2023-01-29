"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayTest = void 0;
const assert_1 = require("./assert");
const salaried_classification_1 = require("./classification/salaried-classification");
const hold_method_1 = require("./method/hold-method");
const payrolldatabase_1 = require("./payrolldatabase");
const month_schedule_1 = require("./schedule/month-schedule");
const add_salaried_employee_1 = require("./transaction/add-salaried-employee");
class PayTest {
    constructor() {
        this.TestAddSalariedEmployee();
    }
    TestAddSalariedEmployee() {
        const empId = 1;
        const t = new add_salaried_employee_1.AddSalariedEmployee(empId, "Bob", "Home", 1000.00);
        t.execute();
        const e = payrolldatabase_1.PayrollDatabase.getEmployee(empId);
        assert_1.Assert.areEqual("Bob", e.name);
        const pc = e.classification;
        assert_1.Assert.isTrue(pc instanceof salaried_classification_1.SalariedClassification);
        const sc = pc;
        assert_1.Assert.areEqual(1000.00, sc.salary);
        const ps = e.schedule;
        assert_1.Assert.isTrue(ps instanceof month_schedule_1.MonthlySchedule);
        const pm = e.method;
        assert_1.Assert.isTrue(pm instanceof hold_method_1.HoldMethod);
    }
}
exports.PayTest = PayTest;
