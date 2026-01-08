import { Customer } from "../domain/Customer.js";
import { ServiceCenter } from "../domain/ServiceCenter.js";
import { Technician } from "../domain/Technician.js";
import { RepairProcess } from "../ports/RepairProcess.js";
export declare class SimulationRepairProcess implements RepairProcess {
    execute(serviceCenter: ServiceCenter, customer: Customer, technician: Technician): Promise<void>;
}
