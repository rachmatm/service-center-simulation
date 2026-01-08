import { resolve } from "node:dns";
import { Customer } from "../domain/Customer.js";
import { RepairJob } from "../domain/RepairJob.js";
import { ServiceCenter } from "../domain/ServiceCenter.js";
import { Technician } from "../domain/Technician.js";
import { RepairProcess } from "../ports/RepairProcess.js";

export class RepairProcessSimulation implements RepairProcess {
    async start(
        serviceCenter: ServiceCenter,
        customer: Customer,
        technician: Technician
    ): Promise<void> {
        const job = new RepairJob(customer, technician);
        const averageRepairTime = technician.averageRepairTime;

        await new Promise<void>((resolve) => {
            // Simulate repair process
            setTimeout(() => {
                resolve();
            }, averageRepairTime * 1000);
        });

        await this.complete(
            serviceCenter,
            customer,
            technician
        );
    }

    async complete(
        serviceCenter: ServiceCenter,
        customer: Customer,
        technician: Technician
    ): Promise<void> {
        const job = new RepairJob(customer, technician);

        new Promise<void>((resolve) => {
            // complete the repair job
            job.completeRepair();
            // record the repair job in the service center
            serviceCenter.recordRepairJob(job);
            resolve();
        })
    }
}   