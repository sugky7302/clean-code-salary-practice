"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assert = void 0;
class Assert {
    static isTrue(condition, message) {
        if (condition === false)
            throw new Error(message ?? 'Assertion is not true.');
    }
    static isFalse(condition, message) {
        if (condition === true)
            throw new Error(message ?? 'Assertion is not false.');
    }
    static areEqual(a, b, message) {
        if (a !== b)
            throw new Error(message ?? 'Two conditions are not equal.');
    }
    static isNull(a, message) {
        if (a !== null)
            throw new Error(message ?? 'Condition is not null.');
    }
    static isNotNull(a, message) {
        if (a === null)
            throw new Error(message ?? 'Condition is null.');
    }
}
exports.Assert = Assert;
