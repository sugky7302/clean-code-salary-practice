import { Employee } from "../employee";
import { PayrollDatabase } from "../payrolldatabase";
import { Transaction } from "./transaction";

export abstract class ChangeEmployeeTransaction implements Transaction {
    constructor(protected readonly empid: number) {}

    public execute(): void {
        const e = PayrollDatabase.getEmployee(this.empid);

        if (e) {
            this.change(e);
            } else {
                throw new Error("No such employee.");
            }
    }

    protected abstract change(e: Employee): void
}