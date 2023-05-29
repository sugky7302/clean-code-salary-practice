import { SalariedClassification } from "../classification/salaried-classiflication";
import { MonthlySchedule } from "../schedule/month-schedule";
import { ChangeClassificationTransaction } from "./change-classification-transation";

export class ChangeSalariedTransaction extends ChangeClassificationTransaction {
    constructor(empid: number, private readonly salary: number) {
        super(empid);
    }
    
    get schedule() {
        return new MonthlySchedule();
    }
    get classification() {
        return new SalariedClassification(this.salary);
    }
}