/**
 * Entity: Phone Series
 */
export class PhoneSeries {
    constructor(value) {
        if (PhoneSeries.VALID_SERIES.indexOf(value) === -1) {
            throw new Error(`Invalid phone series: ${value}`);
        }
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
PhoneSeries.VALID_SERIES = [
    "Jaguar",
    "Leopard",
    "Lion",
];
//# sourceMappingURL=PhoneSeries.js.map