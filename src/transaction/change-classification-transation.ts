import { PaymentClassification } from "../classification/classification";
import { Employee } from "../employee";
import { PaymentSchedule } from "../schedule/schedule";
import { ChangeEmployeeTransaction } from "./change-employee-transation";

export abstract class ChangeClassificationTransaction extends ChangeEmployeeTransaction {
    constructor(empid: number) {
        super(empid);
    }

    protected override change(e: Employee): void {
        e.classification = this.classification;
        e.schedule = this.schedule;
    }

    protected abstract get schedule(): PaymentSchedule;
    protected abstract get classification(): PaymentClassification;
}