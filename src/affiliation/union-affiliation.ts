import { ServiceCharge } from "../service-charge";
import { Affiliation } from "./affiliation";

export class UnionAffiliation implements Affiliation {
    private _serviceCharges: { [key: string]: ServiceCharge } = {};
    addServiceCharge(charge: ServiceCharge): void {
        this._serviceCharges[charge.date.toISOString().slice(0, 10)] = charge;
    }

    getServiceCharge(date: Date): ServiceCharge {
        return this._serviceCharges[date.toISOString().slice(0, 10)];
    }
}