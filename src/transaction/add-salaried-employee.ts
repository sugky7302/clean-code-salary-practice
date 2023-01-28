import { PaymentClassification } from "../classification/classification";
import { SalariedClassification } from "../classification/salaried-classification";
import { MonthlySchedule } from "../schedule/month-schedule";
import { PaymentSchedule } from "../schedule/schedule";
import { AddEmployeeTransaction } from "./add-employee-transaction";

export class AddSalariedEmployee extends AddEmployeeTransaction {
    private itsSalary: number;
    constructor(empId: number, name: string, address: string, salary: number) {
        super(empId, name, address);
        this.itsSalary = salary;
    }
    public get classification(): PaymentClassification {
        return new SalariedClassification(this.itsSalary);
    }
    public get schedule(): PaymentSchedule {
        return new MonthlySchedule();
    }
}