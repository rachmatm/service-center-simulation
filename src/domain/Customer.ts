/**  
 * Entity: Customer with a phone needing repair  
 */

import { PhoneSeries } from "./PhoneSeries.js";

export class Customer {
    private _name: string;
    private _phoneSeries: PhoneSeries;
  
    constructor(name: string, phoneSeries: PhoneSeries) {
        if (!name || name.trim().length === 0) {
            throw new Error("Customer name cannot be empty.");
        }
        this._name = name;
        this._phoneSeries = phoneSeries;
    }

    get name(): string {
        return this._name;
    }

    get phoneSeries(): PhoneSeries {
        return this._phoneSeries;   
    }

    get phoneSeriesName(): string {
        return this._phoneSeries.value;
    }        
}