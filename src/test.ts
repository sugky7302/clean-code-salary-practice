import { Assert } from "./assert";

export class PayTest {
    constructor(){
        console.log("PayTest constructor");
    }

    public TestAddSalariedEmployee() {
        const empId = 1;
        const t = new AddSalariedEmployee(empId, "Bob", "Home", 1000.00);
        t.execute();

        const e = PayrollDatabase.GetEmployee(empId);
        Assert.areEqual("Bob", e.GetName());

        const pc = e.Classification;
        Assert.isTrue(pc instanceof SalariedClassification);

        const sc = pc as SalaryClassification;
        Assert.areEqual(1000.00, sc.Salary);
        const ps = e.Schedule;
        Assert.isTrue(ps instanceof MonthlySchedule);

        const pm = e.Method;
        Assert.isTrue(pm instanceof HoldMethod);
    }
}