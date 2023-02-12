import { Paycheck } from "../paycheck";
import { TimeCard } from "../timecard";
import { PaymentClassification } from "./classification";

export class HourlyClassification implements PaymentClassification {
    private _salary: number;
    private _timeCards: {[key: string]: TimeCard} = {};

    constructor(salary: number) {
        this._salary = salary;
    }

    public get salary(): number {
        return this._salary;
    }

    public calculatePay(pc: Paycheck): number {
        return this._salary;
    }

    public addTimeCard(tc: TimeCard): void {
        this._timeCards[tc.date.toDateString()] = tc;
    }

    public getTimeCard(date: Date): TimeCard {
        return this._timeCards[date.toDateString()];
    }
}