/*
    Aggregate root
*/
export class ServiceCenter {
    constructor(name, address, technicians) {
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
        this._repairHistory = new Map();
        technicians.forEach(tech => {
            this._repairHistory.set(tech.name, []);
        });
    }
    get name() {
        return this._name;
    }
    get address() {
        return this._address;
    }
    get technicians() {
        return this._technicians;
    }
    get repairHistory() {
        return this._repairHistory;
    }
    recordRepairJob(repairJob) {
        const techName = repairJob.technician.name;
        const technicianJobs = this._repairHistory.get(techName);
        if (!technicianJobs) {
            throw new Error(`Technician ${techName} not found in this service center.`);
        }
        technicianJobs.push(repairJob);
    }
}
//# sourceMappingURL=ServiceCenter.js.map