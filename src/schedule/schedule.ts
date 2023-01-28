export interface PaymentSchedule {
    isPayDay(date: Date): boolean;
}