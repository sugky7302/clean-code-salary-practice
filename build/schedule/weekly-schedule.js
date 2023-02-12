"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklySchedule = void 0;
class WeeklySchedule {
    isPayDay(date) {
        return date.getDay() === 5;
    }
}
exports.WeeklySchedule = WeeklySchedule;
