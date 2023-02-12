import { HourlyClassification } from "../classification/hourly-classiflication";
import { PayrollDatabase } from "../payrolldatabase";
import { TimeCard } from "../timecard";
import { Transaction } from "./transaction";

export class TimeCardTransaction implements Transaction {
    constructor(private readonly date: Date, private readonly hours: number, private readonly empId: number) { }
    public execute(): void {
        const e = PayrollDatabase.getEmployee(this.empId);

        if (e) {
            const pc = e.classification;
            if (pc) {
                if (pc instanceof HourlyClassification) {
                    const hc = pc as HourlyClassification;
                    hc.addTimeCard(new TimeCard(this.date, this.hours));
                } else {
                    throw new Error("Tried to add timecard to non-hourly employee");
                }
            } else {
                throw new Error("No classification");
            }
        }
    }
}