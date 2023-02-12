import { Paycheck } from "../paycheck";
import { PaymentClassification } from "./classification";

export class CommissionedClassification implements PaymentClassification {
    constructor(private _salary: number, private _commissionRate: number) {}

    public get salary(): number {
        return this._salary;
    }

    public get commissionRate(): number {
        return this._commissionRate;
    }

    public calculatePay(pc: Paycheck): number {
        return this._salary;
    }
}