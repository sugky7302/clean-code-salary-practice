import { PaymentSchedule } from "./schedule";

export class WeeklySchedule implements PaymentSchedule {
    isPayDay(date: Date): boolean {
        return date.getDay() === 5;
    }
}