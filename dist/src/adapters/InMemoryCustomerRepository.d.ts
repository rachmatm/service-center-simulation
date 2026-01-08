import { Customer } from "../domain/Customer.js";
import { CustomerRepository } from "../ports/CustomerRepository.js";
export declare class InMemoryCustomerRepository implements CustomerRepository {
    getWaitingInQueueCustomers(maxCustomers: number): Customer[];
}
