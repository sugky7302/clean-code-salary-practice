"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCardTransaction = void 0;
const hourly_classiflication_1 = require("../classification/hourly-classiflication");
const payrolldatabase_1 = require("../payrolldatabase");
const timecard_1 = require("../timecard");
class TimeCardTransaction {
    date;
    hours;
    empId;
    constructor(date, hours, empId) {
        this.date = date;
        this.hours = hours;
        this.empId = empId;
    }
    execute() {
        const e = payrolldatabase_1.PayrollDatabase.getEmployee(this.empId);
        if (e) {
            const pc = e.classification;
            if (pc) {
                if (pc instanceof hourly_classiflication_1.HourlyClassification) {
                    const hc = pc;
                    hc.addTimeCard(new timecard_1.TimeCard(this.date, this.hours));
                }
                else {
                    throw new Error("Tried to add timecard to non-hourly employee");
                }
            }
            else {
                throw new Error("No classification");
            }
        }
    }
}
exports.TimeCardTransaction = TimeCardTransaction;
