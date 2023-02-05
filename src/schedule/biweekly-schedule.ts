import { PaymentSchedule } from "./schedule";

export class BiweeklySchedule implements PaymentSchedule {
    //! 沒辦法確認是否為每兩週的第二個星期五
    isPayDay(date: Date): boolean {
        return date.getDay() === 5;
    }
}