import { Transaction } from "./transaction";

export class AddEmployeeTransaction implements Transaction {
    constructor(protected empid: number,
        protected itsAddress: string,
        protected itsName: string) {
    }

    public execute(): void {
    }
}