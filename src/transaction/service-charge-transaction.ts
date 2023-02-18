import { UnionAffiliation } from "../affiliation/union-affiliation";
import { PayrollDatabase } from "../payrolldatabase";
import { ServiceCharge } from "../service-charge";
import { Transaction } from "./transaction";

export class ServiceChargeTransaction implements Transaction {
    constructor(private readonly memberId: number, private readonly date: Date, private readonly charge: number) {}

    execute(): void {
        const e = PayrollDatabase.getUnionMember(this.memberId);

        if (e) {
            const af = e.affiliation;

            if (af instanceof UnionAffiliation) {
                af.addServiceCharge(new ServiceCharge(this.date, this.charge));
            }
            else {
                throw new Error("Tried to add service charge to non-union employee");
            }
        }
    }
}