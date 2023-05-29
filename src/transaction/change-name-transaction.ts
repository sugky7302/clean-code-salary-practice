import { Employee } from "../employee";
import { ChangeEmployeeTransaction } from "./change-employee-transation";

export class ChangeNameTransaction extends ChangeEmployeeTransaction {
    constructor(empid: number, private readonly newName: string) {
        super(empid);
    }

    protected change(e: Employee): void {
        e.name = this.newName;
    }
}