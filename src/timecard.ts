export class TimeCard {
    constructor(private readonly _date: Date, private readonly _hours: number) { }

    public get hours(): number {
        return this._hours;
    }

    public get date(): Date {
        return this._date;
    }
}