/*
    Start Repair Simulation CLI Application
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class StartRepairSimulationCLI {
    constructor(customers, serviceCenter, repairProcess) {
        this._customers = customers;
        this._serviceCenter = serviceCenter;
        this._repairProcess = repairProcess;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Customer on queue:');
            console.table(this._customers.map(c => ({ name: c.name, phoneSeries: c.phoneSeriesName })));
            console.log('\n');
            console.log(`${this._serviceCenter.name} start operating today:`);
            const customers = this._customers;
            let customerIndex = 0;
            // Process customer recursively for each technician
            const processCustomer = (technician) => __awaiter(this, void 0, void 0, function* () {
                if (customerIndex >= customers.length) {
                    return; // No more customers
                }
                // Get next customer
                const customer = customers[customerIndex];
                customerIndex++;
                yield this._repairProcess.execute(this._serviceCenter, customer, technician);
                // Recursively process next customer
                return processCustomer(technician);
            });
            // Start concurrent processing for all technicians
            yield Promise.all(this._serviceCenter.technicians.map(technician => processCustomer(technician)));
        });
    }
    ;
}
//# sourceMappingURL=StartRepairSimulationCLI.js.map