import { ServiceCharge } from "../service-charge";

export interface Affiliation {
    addServiceCharge(charge: ServiceCharge): void;
    getServiceCharge(date: Date): ServiceCharge;
}