import { Paycheck } from "../paycheck";
import { SalesReceipt } from "../sales-receipt";
import { PaymentClassification } from "./classification";

export class CommissionedClassification implements PaymentClassification {
    private _salesReceipts = new Map<string, SalesReceipt>();
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

    public addSalesReceipt(sr: SalesReceipt): void {
        this._salesReceipts.set(sr.date.toUTCString(), sr);
    }

    public getSalesReceipt(date: Date): SalesReceipt | undefined {
        return this._salesReceipts.get(date.toUTCString());
    }
}