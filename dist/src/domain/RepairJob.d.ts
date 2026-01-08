import { Customer } from "./Customer.js";
import { Technician } from "./Technician.js";
export declare class RepairJob {
    private readonly _customer;
    private readonly _technician;
    private readonly _startTime;
    private _endTime?;
    constructor(customer: Customer, technician: Technician);
    get customer(): Customer;
    get technician(): Technician;
    get startTime(): Date;
    get endTime(): Date | undefined;
    completeRepair(): void;
    isCompleted(): boolean;
}
