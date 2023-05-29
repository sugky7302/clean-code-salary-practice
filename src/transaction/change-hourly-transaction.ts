import { HourlyClassification } from "../classification/hourly-classiflication";
import { WeeklySchedule } from "../schedule/weekly-schedule";
import { ChangeClassificationTransaction } from "./change-classification-transation";

export class ChangeHourlyTransaction extends ChangeClassificationTransaction {
    constructor(empid: number, private readonly hourlyRate: number) {
        super(empid);
    }
    
    get schedule() {
        return new WeeklySchedule();
    }
    get classification() {
        return new HourlyClassification(this.hourlyRate);
    }
}