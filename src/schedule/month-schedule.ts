import { PaymentSchedule } from "./schedule";

export class MonthlySchedule implements PaymentSchedule {
    isPayDay(date: Date): boolean {
        return date.getDate() === 31;
    }
}