export class Assert {
    static isTrue(condition: unknown, message?: string) {
        if (condition === false) throw new Error(message ?? 'Assertion is not true.');
    }

    static isFalse(condition: unknown, message?: string) {
        if (condition === true) throw new Error(message ?? 'Assertion is not false.');
    }

    static areEqual<T>(a: T, b: T, message?: string) {
        if (a !== b) throw new Error(message ?? 'Two conditions are not equal.');
    }

    static isNull<T>(a: T, message?: string) {
        if (a !== null) throw new Error(message ?? 'Condition is not null.');
    }

    static isNotNull<T>(a: T, message?: string) {
        if (a === null) throw new Error(message ?? 'Condition is null.');
    }
}
