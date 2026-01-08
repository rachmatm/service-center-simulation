import { Customer } from "../domain/Customer.js";
import { PhoneSeries } from "../domain/PhoneSeries.js";
export class InMemoryCustomerRepository {
    getWaitingInQueueCustomers(maxCustomers) {
        const customers = [];
        // Dummy data for demonstration purposes
        for (let i = 1; i <= maxCustomers; i++) {
            const randomSeries = (() => {
                const series = ["Jaguar", "Leopard", "Lion"];
                const randomIndex = Math.floor(i % series.length);
                return new PhoneSeries(series[randomIndex]);
            })();
            customers.push(new Customer(`Customer ${i}`, randomSeries));
        }
        return customers;
    }
}
//# sourceMappingURL=InMemoryCustomerRepository.js.map