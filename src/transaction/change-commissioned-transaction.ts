import { CommissionedClassification } from "../classification/commissioned-classiflication";
import { BiweeklySchedule } from "../schedule/biweekly-schedule";
import { ChangeClassificationTransaction } from "./change-classification-transation";

export class ChangeCommissionedTransaction extends ChangeClassificationTransaction {
    constructor(empid: number, private readonly salary: number, private readonly commissionRate: number) {
        super(empid);
    }
    
    get schedule() {
        return new BiweeklySchedule();
    }
    get classification() {
        return new CommissionedClassification(this.salary, this.commissionRate);
    }
}