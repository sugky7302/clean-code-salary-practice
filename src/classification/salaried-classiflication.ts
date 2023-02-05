import { Paycheck } from "../paycheck";
import { PaymentClassification } from "./classification";

export class SalariedClassification implements PaymentClassification {
    private _salary: number;

    constructor(salary: number) {
        this._salary = salary;
    }

    public get salary(): number {
        return this._salary;
    }

    public calculatePay(pc: Paycheck): number {
        return this._salary;
    }
}