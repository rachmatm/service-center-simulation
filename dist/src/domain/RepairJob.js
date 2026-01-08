/*
    Entity: representing a repair job for a customer's phone
*/
export class RepairJob {
    constructor(customer, technician) {
        this._customer = customer;
        this._technician = technician;
        this._startTime = new Date();
    }
    get customer() {
        return this._customer;
    }
    get technician() {
        return this._technician;
    }
    get startTime() {
        return this._startTime;
    }
    get endTime() {
        return this._endTime;
    }
    completeRepair() {
        if (this._endTime) {
            throw new Error("Repair job is already completed.");
        }
        this._endTime = new Date();
    }
    isCompleted() {
        return this._endTime !== undefined;
    }
}
//# sourceMappingURL=RepairJob.js.map