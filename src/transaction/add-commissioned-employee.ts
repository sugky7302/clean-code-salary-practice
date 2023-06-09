import { PaymentClassification } from "../classification/classification";
import { CommissionedClassification } from "../classification/commissioned-classiflication";
import { BiweeklySchedule } from "../schedule/biweekly-schedule";
import { PaymentSchedule } from "../schedule/schedule";
import { AddEmployeeTransaction } from "./add-employee-transaction";

export class AddCommissionedEmployee extends AddEmployeeTransaction {
    private itsSalary: number;
    private itsCommissionRate: number;
    constructor(empId: number, name: string, address: string, salary: number, commissionRate: number) {
        super(empId, name, address);
        this.itsSalary = salary;
        this.itsCommissionRate = commissionRate;
    }
    public makeClassification(): PaymentClassification {
        return new CommissionedClassification(this.itsSalary, this.itsCommissionRate);
    }
    public makeSchedule(): PaymentSchedule {
        return new BiweeklySchedule();
    }
}