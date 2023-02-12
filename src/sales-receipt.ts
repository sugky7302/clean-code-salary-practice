export class SalesReceipt {
    constructor(private readonly _date: Date, private readonly _amount: number) {}

    public get date(): Date {
        return this._date;
    }

    public get amount(): number {
        return this._amount;
    }
}