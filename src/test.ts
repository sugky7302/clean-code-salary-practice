import { Assert } from "./assert";
import { SalariedClassification } from "./classification/salaried-classification";
import { HoldMethod } from "./method/hold-method";
import { PayrollDatabase } from "./payrolldatabase";
import { MonthlySchedule } from "./schedule/month-schedule";
import { AddSalariedEmployee } from "./transaction/add-salaried-employee";

export class PayTest {
    constructor(){
        console.log("PayTest constructor");
    }

    public TestAddSalariedEmployee() {
        const empId = 1;
        const t = new AddSalariedEmployee(empId, "Bob", "Home", 1000.00);
        t.execute();

        const e = PayrollDatabase.getEmployee(empId);
        Assert.areEqual("Bob", e.getName());

        const pc = e.classification;
        Assert.isTrue(pc instanceof SalariedClassification);

        const sc = pc as SalariedClassification;
        Assert.areEqual(1000.00, sc.salary);
        const ps = e.schedule;
        Assert.isTrue(ps instanceof MonthlySchedule);

        const pm = e.method;
        Assert.isTrue(pm instanceof HoldMethod);
    }
}