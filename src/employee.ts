import { Affiliation } from "./affiliation/affiliation";
import { PaymentClassification } from "./classification/classification";
import { PaymentMethod } from "./method/method";
import { PaymentSchedule } from "./schedule/schedule";

export class Employee {
    affiliation!: Affiliation;
    constructor(public readonly empid: number, public readonly name: string, public readonly address: string, public classification: PaymentClassification, public schedule: PaymentSchedule, public method: PaymentMethod) {}
}