/**
 * Entity: Customer with a phone needing repair
 */
import { PhoneSeries } from "./PhoneSeries.js";
export declare class Customer {
    private _name;
    private _phoneSeries;
    constructor(name: string, phoneSeries: PhoneSeries);
    get name(): string;
    get phoneSeries(): PhoneSeries;
    get phoneSeriesName(): string;
}
