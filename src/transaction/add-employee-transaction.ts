import { PaymentClassification } from "../classification/classification";
import { Employee } from "../employee";
import { HoldMethod } from "../method/hold-method";
import { PayrollDatabase } from "../payrolldatabase";
import { PaymentSchedule } from "../schedule/schedule";
import { Transaction } from "./transaction";

export abstract class AddEmployeeTransaction implements Transaction {
    constructor(protected readonly empid: number,
        protected readonly itsAddress: string,
        protected readonly itsName: string) {
    }

    protected abstract makeClassification(): PaymentClassification;
    protected abstract makeSchedule(): PaymentSchedule;

    // 執行新增員工的事務
    public execute(): void {
        const e = new Employee(this.empid, this.itsName, this.itsAddress, this.makeClassification(), this.makeSchedule(), new HoldMethod());
        PayrollDatabase.addEmployee(this.empid, e);
    }
}