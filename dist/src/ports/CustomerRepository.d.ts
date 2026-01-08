import { Customer } from "../domain/Customer.js";
export interface CustomerRepository {
    getWaitingInQueueCustomers(maxCustomers: number): Customer[];
}
