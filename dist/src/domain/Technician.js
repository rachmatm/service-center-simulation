/**
 * Entity: representing a technician's details and behavior
 */
export class Technician {
    constructor(name, averageRepairTime) {
        if (averageRepairTime <= 0) {
            throw new Error("Average repair time must be positive");
        }
        if (!name) {
            throw new Error("Technician name cannot be empty");
        }
        this._name = name;
        this._averageRepairTime = averageRepairTime;
    }
    get name() {
        return this._name;
    }
    get averageRepairTime() {
        return this._averageRepairTime;
    }
}
//# sourceMappingURL=Technician.js.map