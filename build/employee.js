"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    name;
    classification;
    schedule;
    method;
    constructor(name, classification, schedule, method) {
        this.name = name;
        this.classification = classification;
        this.schedule = schedule;
        this.method = method;
    }
}
exports.Employee = Employee;
