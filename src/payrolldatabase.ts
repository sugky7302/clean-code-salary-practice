import { Employee } from "./employee";

export class PayrollDatabase {
    private static employees = new Map<number, Employee>();

    public static addEmployee(id: number, employee: Employee) {
        PayrollDatabase.employees.set(id, employee);
    }

    public static getEmployee(id: number): Employee | undefined {
        return PayrollDatabase.employees.get(id);
    }

    public static deleteEmployee(id: number) {
        PayrollDatabase.employees.delete(id);
    }
}