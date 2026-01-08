// APPLICATION STARTUP

import { InMemoryCustomerRepository } from "./src/adapters/InMemoryCustomerRepository.js";
import { SimulationRepairProcess } from "./src/adapters/SimulationRepairProcess.js";
import { StartRepairSimulationCLI } from "./src/application/StartRepairSimulationCLI.js";
import { ServiceCenter } from "./src/domain/ServiceCenter.js";
import { Technician } from "./src/domain/Technician.js";

const customerRepository = new InMemoryCustomerRepository;
const repairProcess = new SimulationRepairProcess;

async function main(){
    // Create Domain Entities - Customers
    const customers = customerRepository.getWaitingInQueueCustomers(10);

    // Create Domain Entities - Technicians
    const dalton = new Technician('Dalton', 15); // 15 seconds (10 minutes average)
    const wapol = new Technician('Wapol', 25); // 25 seconds (20 minutes average)
    const technicians = [dalton, wapol];

    // Create Domain Entities - Service Center
    const serviceCenter = new ServiceCenter(
        "First Service Center", 
        "Long Ring Long Land Street", 
        technicians
    );

    // Start Repair Process
    new StartRepairSimulationCLI(
        customers,
        serviceCenter,
        repairProcess
    ).execute();
}

// Start the application
main().catch(err => console.error('Application error:', err));