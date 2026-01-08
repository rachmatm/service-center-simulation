/**
 * Entity: Customer with a phone needing repair
 */
export class Customer {
    constructor(name, phoneSeries) {
        if (!name || name.trim().length === 0) {
            throw new Error("Customer name cannot be empty.");
        }
        this._name = name;
        this._phoneSeries = phoneSeries;
    }
    get name() {
        return this._name;
    }
    get phoneSeries() {
        return this._phoneSeries;
    }
    get phoneSeriesName() {
        return this._phoneSeries.value;
    }
}
//# sourceMappingURL=Customer.js.map