"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayTest = void 0;
const assert_1 = require("./assert");
const commissioned_classiflication_1 = require("./classification/commissioned-classiflication");
const hourly_classiflication_1 = require("./classification/hourly-classiflication");
const salaried_classiflication_1 = require("./classification/salaried-classiflication");
const hold_method_1 = require("./method/hold-method");
const payrolldatabase_1 = require("./payrolldatabase");
const month_schedule_1 = require("./schedule/month-schedule");
const add_commissioned_employee_1 = require("./transaction/add-commissioned-employee");
const add_hourly_employee_1 = require("./transaction/add-hourly-employee");
const add_salaried_employee_1 = require("./transaction/add-salaried-employee");
const delete_employee_1 = require("./transaction/delete-employee");
const sales_receipt_transaction_1 = require("./transaction/sales-receipt-transaction");
const timecard_transaction_1 = require("./transaction/timecard-transaction");
class PayTest {
    constructor() {
        this.TestAddSalariedEmployee();
        this.TestDeleteEmployee();
        this.TestTimeCardTransaction();
        this.TestSalesReceiptTransaction();
    }
    TestAddSalariedEmployee() {
        const empId = 1;
        const t = new add_salaried_employee_1.AddSalariedEmployee(empId, "Bob", "Home", 1000.00);
        t.execute();
        const e = payrolldatabase_1.PayrollDatabase.getEmployee(empId);
        assert_1.Assert.areEqual("Bob", e?.name);
        const pc = e?.classification;
        assert_1.Assert.isTrue(pc instanceof salaried_classiflication_1.SalariedClassification);
        const sc = pc;
        assert_1.Assert.areEqual(1000.00, sc.salary);
        const ps = e?.schedule;
        assert_1.Assert.isTrue(ps instanceof month_schedule_1.MonthlySchedule);
        const pm = e?.method;
        assert_1.Assert.isTrue(pm instanceof hold_method_1.HoldMethod);
    }
    /**
     * 先新增一個員工，再刪除該員工
     * 測試是否刪除成功
     */
    TestDeleteEmployee() {
        const empId = 4;
        const t = new add_commissioned_employee_1.AddCommissionedEmployee(empId, "Bill", "Home", 2500, 3.2);
        t.execute();
        let e = payrolldatabase_1.PayrollDatabase.getEmployee(empId);
        assert_1.Assert.isNotNull(e);
        const dt = new delete_employee_1.DeleteEmployeeTransaction(empId);
        dt.execute();
        e = payrolldatabase_1.PayrollDatabase.getEmployee(empId);
        assert_1.Assert.isNull(e);
    }
    TestTimeCardTransaction() {
        const empId = 5;
        const t = new add_hourly_employee_1.AddHourlyEmployee(empId, "Bill", "Home", 15.25);
        t.execute();
        // 這邊會新增一筆時間卡
        const tct = new timecard_transaction_1.TimeCardTransaction(new Date(2005, 7, 31), 8.0, empId);
        tct.execute();
        const e = payrolldatabase_1.PayrollDatabase.getEmployee(empId);
        assert_1.Assert.isNotNull(e);
        const pc = e?.classification;
        assert_1.Assert.isTrue(pc instanceof hourly_classiflication_1.HourlyClassification);
        const hc = pc;
        const tc = hc.getTimeCard(new Date(2005, 7, 31));
        assert_1.Assert.isNotNull(tc);
        assert_1.Assert.areEqual(8.0, tc.hours);
    }
    TestSalesReceiptTransaction() {
        const empId = 6;
        const t = new add_commissioned_employee_1.AddCommissionedEmployee(empId, "Bill", "Home", 2500, 3.2);
        t.execute();
        // 這裡會新增一筆銷售收據
        const srt = new sales_receipt_transaction_1.SalesReceiptTransaction(new Date(2005, 7, 31), 1200, empId);
        srt.execute();
        const e = payrolldatabase_1.PayrollDatabase.getEmployee(empId);
        assert_1.Assert.isNotNull(e);
        const pc = e?.classification;
        assert_1.Assert.isTrue(pc instanceof commissioned_classiflication_1.CommissionedClassification);
        const cc = pc;
        const sr = cc.getSalesReceipt(new Date(2005, 7, 31));
        assert_1.Assert.isNotNull(sr);
        assert_1.Assert.areEqual(1200, sr?.amount);
    }
}
exports.PayTest = PayTest;
