import { Assert } from "./assert";
import { SalariedClassification } from "./classification/salaried-classiflication";
import { HoldMethod } from "./method/hold-method";
import { PayrollDatabase } from "./payrolldatabase";
import { MonthlySchedule } from "./schedule/month-schedule";
import { AddCommissionedEmployee } from "./transaction/add-commissioned-employee";
import { AddSalariedEmployee } from "./transaction/add-salaried-employee";
import { DeleteEmployeeTransaction } from "./transaction/delete-employee";

export class PayTest {
    constructor(){
        this.TestAddSalariedEmployee();
    }

    public TestAddSalariedEmployee() {
        const empId = 1;
        const t = new AddSalariedEmployee(empId, "Bob", "Home", 1000.00);
        t.execute();

        const e = PayrollDatabase.getEmployee(empId);
        Assert.areEqual("Bob", e.name);

        const pc = e.classification;
        Assert.isTrue(pc instanceof SalariedClassification);

        const sc = pc as SalariedClassification;
        Assert.areEqual(1000.00, sc.salary);
        const ps = e.schedule;
        Assert.isTrue(ps instanceof MonthlySchedule);

        const pm = e.method;
        Assert.isTrue(pm instanceof HoldMethod);
    }

    /**
     * 先新增一個員工，再刪除該員工
     * 測試是否刪除成功
     */
    public TestDeleteEmployee() {
        const empId = 4;
        const t = new AddCommissionedEmployee(empId, "Bill", "Home", 2500, 3.2);
        t.execute();

        let e = PayrollDatabase.getEmployee(empId);
        Assert.isNotNull(e);

        const dt = new DeleteEmployeeTransaction(empId);
        dt.execute();
    
        e = PayrollDatabase.getEmployee(empId);
        Assert.isNull(e);
    }
}