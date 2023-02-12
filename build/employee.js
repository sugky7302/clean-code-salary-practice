"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    empid;
    name;
    address;
    classification;
    schedule;
    method;
    constructor(empid, name, address, classification, schedule, method) {
        this.empid = empid;
        this.name = name;
        this.address = address;
        this.classification = classification;
        this.schedule = schedule;
        this.method = method;
    }
}
exports.Employee = Employee;
