import { Employee } from "./employee";

export class PayrollDatabase {
    private static employees: {[key: number]: Employee} = {};

    public static addEmployee(id: number, employee: Employee) {
        PayrollDatabase.employees[id] = employee;
    }

    public static getEmployee(id: number): Employee {
        return PayrollDatabase.employees[id];
    }

    public static deleteEmployee(id: number) {
        delete PayrollDatabase.employees[id];
    }
}