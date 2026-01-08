/**
 * Entity: representing a technician's details and behavior
 */
export declare class Technician {
    private _name;
    private _averageRepairTime;
    constructor(name: string, averageRepairTime: number);
    get name(): string;
    get averageRepairTime(): number;
}
