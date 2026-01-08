/* 
    Entity: representing a repair job for a customer's phone
*/

import { Customer } from "./Customer.js";
import { Technician } from "./Technician.js";

export class RepairJob {
    private readonly _customer: Customer;
    private readonly _technician: Technician;
    private readonly _startTime: Date;
    private _endTime?: Date;

    constructor(customer: Customer, technician: Technician) {
        this._customer = customer;
        this._technician = technician;
        this._startTime = new Date();
    }

    get customer(): Customer {
        return this._customer;
    }

    get technician(): Technician {
        return this._technician;
    }

    get startTime(): Date {
        return this._startTime;
    }
    
    get endTime(): Date | undefined {
        return this._endTime;
    }

    completeRepair(): void {
        if(this._endTime) {
            throw new Error("Repair job is already completed.");
        }
        this._endTime = new Date();
    }

    isCompleted(): boolean {
        return this._endTime !== undefined;
    }
}

