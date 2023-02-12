"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiweeklySchedule = void 0;
class BiweeklySchedule {
    //! 沒辦法確認是否為每兩週的第二個星期五
    isPayDay(date) {
        return date.getDay() === 5;
    }
}
exports.BiweeklySchedule = BiweeklySchedule;
