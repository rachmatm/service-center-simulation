import { Customer } from "../domain/Customer.js";
import { ServiceCenter } from "../domain/ServiceCenter.js";
import { RepairProcess } from "../ports/RepairProcess.js";
export declare class ExecuteRepairProcess {
    private _customers;
    private _serviceCenter;
    private _repairProcess;
    constructor(customers: Customer[], serviceCenter: ServiceCenter, repairProcess: RepairProcess);
    execute(): Promise<void>;
}
