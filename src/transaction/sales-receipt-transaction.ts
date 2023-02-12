import { CommissionedClassification } from "../classification/commissioned-classiflication";
import { PayrollDatabase } from "../payrolldatabase";
import { SalesReceipt } from "../sales-receipt";
import { Transaction } from "./transaction";

export class SalesReceiptTransaction implements Transaction {
    constructor(private date: Date, private amount: number, private empId: number) { }

    public execute(): void {
        const e = PayrollDatabase.getEmployee(this.empId);

        if (e) {
            const pc = e.classification;

            if (pc instanceof CommissionedClassification) {
                const cc = pc as CommissionedClassification;
                cc.addSalesReceipt(new SalesReceipt(this.date, this.amount));
            } else {
                throw new Error("Tried to add sales receipt to non-commissioned employee");
            }
        }
    }
}