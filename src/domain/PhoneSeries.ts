/** 
 * Entity: Phone Series
 */ 

export class PhoneSeries {
    private readonly _value: string;
    private static readonly VALID_SERIES = [
        "Jaguar",
        "Leopard",
        "Lion",
    ] as const;

    constructor(value: string) {
        if (PhoneSeries.VALID_SERIES.indexOf(value as any) === -1) {
            throw new Error(`Invalid phone series: ${value}`);    
        }
        this._value = value;
    }

    get value(): string {
        return this._value;
    }
}