import { RepairJob } from "./RepairJob.js";
import { Technician } from "./Technician.js";
export declare class ServiceCenter {
    private _name;
    private _address;
    private _technicians;
    private _repairHistory;
    constructor(name: string, address: string, technicians: Technician[]);
    get name(): string;
    get address(): string;
    get technicians(): Technician[];
    get repairHistory(): Map<string, RepairJob[]>;
    recordRepairJob(repairJob: RepairJob): void;
}
