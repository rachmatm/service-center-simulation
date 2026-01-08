var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { RepairJob } from "../domain/RepairJob.js";
export class SimulationRepairProcess {
    execute(serviceCenter, customer, technician) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = new RepairJob(customer, technician);
            const averageRepairTime = technician.averageRepairTime;
            yield new Promise((resolve) => {
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
        });
    }
}
//# sourceMappingURL=SimulationRepairProcess.js.map