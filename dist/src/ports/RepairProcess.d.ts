import { Customer } from "../domain/Customer.js";
import { ServiceCenter } from "../domain/ServiceCenter.js";
import { Technician } from "../domain/Technician.js";
export interface RepairProcess {
    execute(serviceCenter: ServiceCenter, customer: Customer, technician: Technician): Promise<void>;
}
