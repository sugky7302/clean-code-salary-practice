import { UnionAffiliation } from "./affiliation/union-affiliation";
import { Assert } from "./assert";
import { CommissionedClassification } from "./classification/commissioned-classiflication";
import { HourlyClassification } from "./classification/hourly-classiflication";
import { SalariedClassification } from "./classification/salaried-classiflication";
import { Employee } from "./employee";
import { HoldMethod } from "./method/hold-method";
import { PayrollDatabase } from "./payrolldatabase";
import { MonthlySchedule } from "./schedule/month-schedule";
import { AddCommissionedEmployee } from "./transaction/add-commissioned-employee";
import { AddHourlyEmployee } from "./transaction/add-hourly-employee";
import { AddSalariedEmployee } from "./transaction/add-salaried-employee";
import { DeleteEmployeeTransaction } from "./transaction/delete-employee";
import { SalesReceiptTransaction } from "./transaction/sales-receipt-transaction";
import { ServiceChargeTransaction } from "./transaction/service-charge-transaction";
import { TimeCardTransaction } from "./transaction/timecard-transaction";

export class PayTest {
    constructor(){
        this.TestAddSalariedEmployee();
        this.TestDeleteEmployee();
        this.TestTimeCardTransaction();
        this.TestSalesReceiptTransaction();
        this.TestAddServiceCharge();
    }

    public TestAddSalariedEmployee() {
        const empId = 1;
        const t = new AddSalariedEmployee(empId, "Bob", "Home", 1000.00);
        t.execute();

        const e = PayrollDatabase.getEmployee(empId);
        Assert.areEqual("Bob", e?.name);

        const pc = e?.classification;
        Assert.isTrue(pc instanceof SalariedClassification);

        const sc = pc as SalariedClassification;
        Assert.areEqual(1000.00, sc.salary);
        const ps = e?.schedule;
        Assert.isTrue(ps instanceof MonthlySchedule);

        const pm = e?.method;
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

    public TestTimeCardTransaction() {
        const empId = 5;
        const t = new AddHourlyEmployee(empId, "Bill", "Home", 15.25);
        t.execute();

        // 這邊會新增一筆時間卡
        const tct = new TimeCardTransaction(new Date(2005, 7, 31), 8.0, empId);
        tct.execute();

        const e = PayrollDatabase.getEmployee(empId);
        Assert.isNotNull(e);

        const pc = e?.classification;
        Assert.isTrue(pc instanceof HourlyClassification);
        const hc = pc as HourlyClassification;

        const tc = hc.getTimeCard(new Date(2005, 7, 31));
        Assert.isNotNull(tc);
        Assert.areEqual(8.0, tc.hours);
    }

    public TestSalesReceiptTransaction() {
        const empId = 6;
        const t = new AddCommissionedEmployee(empId, "Bill", "Home", 2500, 3.2);
        t.execute();

        // 這裡會新增一筆銷售收據
        const srt = new SalesReceiptTransaction(new Date(2005, 7, 31), 1200, empId);
        srt.execute();

        const e = PayrollDatabase.getEmployee(empId);
        Assert.isNotNull(e);

        const pc = e?.classification;
        Assert.isTrue(pc instanceof CommissionedClassification);
        const cc = pc as CommissionedClassification;

        const sr = cc.getSalesReceipt(new Date(2005, 7, 31));
        Assert.isNotNull(sr);
        Assert.areEqual(1200, sr?.amount);
    }

    public TestAddServiceCharge() {
        const empId = 8;
        const t = new AddHourlyEmployee(empId, "Bill", "Home", 15.25);
        t.execute();

        const e = PayrollDatabase.getEmployee(empId) as Employee;
        Assert.isNotNull(e);

        const af = new UnionAffiliation();
        e.affiliation = af;

        const memberId = 86;
        PayrollDatabase.addUnionMember(memberId, e);
        
        const sct = new ServiceChargeTransaction(memberId, new Date(2005, 8, 8), 12.95);
        sct.execute();

        const sc = af.getServiceCharge(new Date(2005, 8, 8));
        Assert.isNotNull(sc);
        Assert.areEqual(12.95, sc?.charge);
    }
}