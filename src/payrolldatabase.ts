import { Employee } from "./employee";

export class PayrollDatabase {
    private static employees = new Map<number, Employee>();
    private static members = new Map<number, Employee>();

    public static addEmployee(id: number, employee: Employee) {
        PayrollDatabase.employees.set(id, employee);
    }

    public static getEmployee(id: number): Employee | undefined {
        return PayrollDatabase.employees.get(id);
    }

    public static deleteEmployee(id: number) {
        PayrollDatabase.employees.delete(id);
    }

    public static getUnionMember(memberId: number): Employee | undefined {
        return PayrollDatabase.members.get(memberId);
    }

    public static addUnionMember(memberId: number, e: Employee) {
        PayrollDatabase.members.set(memberId, e);
    }

    public static deleteUnionMember(memberId: number) {
        PayrollDatabase.members.delete(memberId);
    }
}