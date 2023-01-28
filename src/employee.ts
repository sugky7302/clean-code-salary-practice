import { PaymentClassification } from "./classification/classification";
import { PaymentMethod } from "./method/method";
import { PaymentSchedule } from "./schedule/schedule";

export interface Employee {
    _name: string;
    classification: PaymentClassification;
    schedule: PaymentSchedule;
    method: PaymentMethod;
    getName(): string;
}