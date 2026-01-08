import { Customer } from "../domain/Customer.js";
import { PhoneSeries } from "../domain/PhoneSeries.js";
import { CustomerRepository } from "../ports/CustomerRepository.js";

export class InMemoryCustomerRepository implements CustomerRepository {
    getWaitingInQueueCustomers(maxCustomers: number): Customer[] {
        const customers: Customer[] = [];
        // Dummy data for demonstration purposes
        for (let i = 1; i <= maxCustomers; i++) {
            const randomSeries = ((): PhoneSeries => {
                const series = ["Jaguar", "Leopard", "Lion"];
                const randomIndex = Math.floor(i % series.length);
                return new PhoneSeries(series[randomIndex]);
            })();

            customers.push(new Customer(`Customer ${i}`, randomSeries));
        }
        return customers;
    }
}