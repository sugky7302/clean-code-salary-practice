import { PayrollDatabase } from "../payrolldatabase";
import { Transaction } from "./transaction";

export class DeleteEmployeeTransaction implements Transaction {
    constructor(private readonly id: number) {}

    public execute() {
        PayrollDatabase.deleteEmployee(this.id);
    }
}