/**  
 * Entity: representing a technician's details and behavior
 */

export class Technician {
    private _name: string;
    private _averageRepairTime: number; // in seconds

    constructor(name: string, averageRepairTime: number) {
        if (averageRepairTime <= 0) {
            throw new Error("Average repair time must be positive");
        }
        if (!name) {
            throw new Error("Technician name cannot be empty");
        }
        this._name = name;
        this._averageRepairTime = averageRepairTime;    
    }
    get name(): string {
        return this._name;
    }

    get averageRepairTime(): number {
        return this._averageRepairTime;
    }
}