import { PaymentClassification } from "./classification/classification";
import { PaymentMethod } from "./method/method";
import { PaymentSchedule } from "./schedule/schedule";

export class Employee {
    constructor(public readonly name: string, public classification: PaymentClassification, public schedule: PaymentSchedule, public method: PaymentMethod) {}
}