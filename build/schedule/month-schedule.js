"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlySchedule = void 0;
class MonthlySchedule {
    isPayDay(date) {
        return date.getDate() === 31;
    }
}
exports.MonthlySchedule = MonthlySchedule;
