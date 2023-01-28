import { Paycheck } from "../paycheck";

export interface PaymentClassification {
    calculatePay(pc: Paycheck): number;
}