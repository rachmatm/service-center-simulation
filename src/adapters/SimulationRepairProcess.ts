import { Customer } from "../domain/Customer.js";
import { RepairJob } from "../domain/RepairJob.js";
import { ServiceCenter } from "../domain/ServiceCenter.js";
import { Technician } from "../domain/Technician.js";
import { RepairProcess } from "../ports/RepairProcess.js";

export class SimulationRepairProcess implements RepairProcess{
    async execute(
        serviceCenter: ServiceCenter,
        customer: Customer,
        technician: Technician
    ): Promise<void> {
        const job = new RepairJob(customer, technician);
        const averageRepairTime = technician.averageRepairTime;

        await new Promise<void>((resolve) => {
            // Simulate repair process
            console.log(`>> ${technician.name} is repairing ${customer.name}'s phone Customer phone is ${customer.phoneSeries.value} series <<`);

            setTimeout(() => {
                resolve();
            }, averageRepairTime * 1000);
        });

        // complete the repair job
        job.completeRepair();

        // record the repair job in the service center
        serviceCenter.recordRepairJob(job);

        console.log(`\t\t  REPAIRING DONE: ${technician.name} FIXED ${customer.name}'s phone.`);

        console.log(`${technician.name} available for next customer.`);
    }
}   