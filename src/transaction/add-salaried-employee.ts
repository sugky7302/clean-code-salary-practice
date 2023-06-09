import { PaymentClassification } from "../classification/classification";
import { SalariedClassification } from "../classification/salaried-classiflication";
import { MonthlySchedule } from "../schedule/month-schedule";
import { PaymentSchedule } from "../schedule/schedule";
import { AddEmployeeTransaction } from "./add-employee-transaction";

export class AddSalariedEmployee extends AddEmployeeTransaction {
    private itsSalary: number;
    constructor(empId: number, name: string, address: string, salary: number) {
        super(empId, name, address);
        this.itsSalary = salary;
    }
    public makeClassification(): PaymentClassification {
        return new SalariedClassification(this.itsSalary);
    }
    public makeSchedule(): PaymentSchedule {
        return new MonthlySchedule();
    }
}