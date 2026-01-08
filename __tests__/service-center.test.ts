import { describe, expect, test } from '@jest/globals';
import { Customer } from '../src/domain/Customer.js';

describe('Adapter - InMemoryCustomerRepository', () => {
    test('should retrieve a list of waiting customers in the queue', () => {
        // Arrange
        const { InMemoryCustomerRepository } = require('../src/adapters/InMemoryCustomerRepository');
        const { Customer } = require('../src/domain/Customer');
        const repository = new InMemoryCustomerRepository();
        const maxCustomers = 5;
        
        // Act
        const customers = repository.getWaitingInQueueCustomers(maxCustomers);
        // Assert
        expect(customers).toBeInstanceOf(Array);
        expect(customers.length).toBeLessThanOrEqual(maxCustomers);
        expect(customers[0].name).toBe('Customer 1');
        expect(customers[4].name).toBe('Customer 5');
        customers.forEach((customer: Customer) => {
            expect(customer).toHaveProperty('name');
            expect(customer).toHaveProperty('phoneSeries');
            expect(typeof customer.name).toBe('string');
            expect(typeof customer.phoneSeries).toBe('object');
            expect(typeof customer.phoneSeries.value).toBe('string');
            expect(['Jaguar', 'Leopard', 'Lion']).toContain(customer.phoneSeries.value);
        });

    });
});