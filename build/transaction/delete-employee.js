"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmployeeTransaction = void 0;
const payrolldatabase_1 = require("../payrolldatabase");
class DeleteEmployeeTransaction {
    id;
    constructor(id) {
        this.id = id;
    }
    execute() {
        payrolldatabase_1.PayrollDatabase.deleteEmployee(this.id);
    }
}
exports.DeleteEmployeeTransaction = DeleteEmployeeTransaction;
