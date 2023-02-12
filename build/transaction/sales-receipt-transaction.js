"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesReceiptTransaction = void 0;
const commissioned_classiflication_1 = require("../classification/commissioned-classiflication");
const payrolldatabase_1 = require("../payrolldatabase");
const sales_receipt_1 = require("../sales-receipt");
class SalesReceiptTransaction {
    date;
    amount;
    empId;
    constructor(date, amount, empId) {
        this.date = date;
        this.amount = amount;
        this.empId = empId;
    }
    execute() {
        const e = payrolldatabase_1.PayrollDatabase.getEmployee(this.empId);
        if (e) {
            const pc = e.classification;
            if (pc instanceof commissioned_classiflication_1.CommissionedClassification) {
                const cc = pc;
                cc.addSalesReceipt(new sales_receipt_1.SalesReceipt(this.date, this.amount));
            }
            else {
                throw new Error("Tried to add sales receipt to non-commissioned employee");
            }
        }
    }
}
exports.SalesReceiptTransaction = SalesReceiptTransaction;
