/* 
    Start Repair Simulation CLI Application
*/

import { Customer } from "../domain/Customer.js";
import { ServiceCenter } from "../domain/ServiceCenter.js";
import { Technician } from "../domain/Technician.js";
import { RepairProcess } from "../ports/RepairProcess.js";

export class StartRepairSimulationCLI {
    private _customers: Customer[];
    private _serviceCenter: ServiceCenter;
    private _repairProcess: RepairProcess

    constructor(
        customers: Customer[],
        serviceCenter: ServiceCenter,
        repairProcess: RepairProcess
    ) {
        this._customers = customers;
        this._serviceCenter = serviceCenter;
        this._repairProcess = repairProcess;
    }

    async execute(): Promise<void> {
        console.log('Customer on queue:');
        console.table(this._customers.map(c => ({ name: c.name, phoneSeries: c.phoneSeriesName })));
        console.log('\n');
        console.log(`${this._serviceCenter.name} start operating today:`);

        const customers = this._customers;
        let customerIndex = 0;

        // Process customer recursively for each technician
        const processCustomer = async (technician: Technician): Promise<void> => {
            if (customerIndex >= customers.length) {
                return; // No more customers
            }

            // Get next customer
            const customer = customers[customerIndex];
            customerIndex++;

            await this._repairProcess.execute(
                this._serviceCenter,
                customer,
                technician
            );

            // Recursively process next customer
            return processCustomer(technician);
        }

        // Start concurrent processing for all technicians
        await Promise.all(
            this._serviceCenter.technicians.map(technician => processCustomer(technician))
        );  
    };
}