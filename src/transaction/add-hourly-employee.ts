import { PaymentClassification } from "../classification/classification";
import { HourlyClassification } from "../classification/hourly-classiflication";
import { PaymentSchedule } from "../schedule/schedule";
import { WeeklySchedule } from "../schedule/weekly-schedule";
import { AddEmployeeTransaction } from "./add-employee-transaction";

export class AddHourlyEmployee extends AddEmployeeTransaction {
    private itsSalary: number;
    constructor(empId: number, name: string, address: string, salary: number) {
        super(empId, name, address);
        this.itsSalary = salary;
    }
    public makeClassification(): PaymentClassification {
        return new HourlyClassification(this.itsSalary);
    }
    public makeSchedule(): PaymentSchedule {
        return new WeeklySchedule();
    }
}