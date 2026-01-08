/* 
    Aggregate root
*/

import { RepairJob } from "./RepairJob.js";
import { Technician } from "./Technician.js";

export class ServiceCenter {
    private _name: string;
    private _address: string;
    private _technicians: Technician[];
    private _repairHistory: Map<string, RepairJob[]>; // key: technician name, value: list of repair jobs
    
    constructor(name: string, address: string, technicians: Technician[]) {
        if (!name || name.trim().length === 0) {
            throw new Error("Service center name cannot be empty.");
        }
        if (!address || address.trim().length === 0) {
            throw new Error("Service center address cannot be empty.");
        }
        if (technicians.length === 0) {
            throw new Error("Service center must have at least one technician.");
        }

        this._name = name;
        this._address = address;
        this._technicians = technicians;
        this._repairHistory = new Map<string, RepairJob[]>();
        technicians.forEach(tech => {
            this._repairHistory.set(tech.name, []);
        });
    }

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }

    get technicians(): Technician[] {
        return this._technicians;
    }
    
    get repairHistory(): Map<string, RepairJob[]> {
        return this._repairHistory;
    }

    recordRepairJob(repairJob: RepairJob): void {
        const techName = repairJob.technician.name;
        const technicianJobs = this._repairHistory.get(techName);
        if (!technicianJobs) {
            throw new Error(`Technician ${techName} not found in this service center.`);
        }
        
        technicianJobs.push(repairJob);
    }
}
