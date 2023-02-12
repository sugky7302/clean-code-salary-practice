# 薪水支付案例研究
自己實踐 clean code 的薪水支付系統，把實作內容對照書本，找出自己的盲點。以下會按照研究順序訂定標題。

## 第一步：與客戶商量規格
- 有些員工是時薪工。會按照他們的員工紀錄中時薪欄位的欄位值來對他們進行支付。他們每天會提交工作出缺勤卡，其中記錄了日期及工作小時數。如果他們每天工作超過 8 個小時，那麼超過的部分就會按照正常時薪的 1.5 倍進行支付。**每週五對他們進行支付。**
- 有些員工的薪水以月薪進行支付。**每個月的最後一個工作日對他們進行支付。**在他們的員工紀錄有一個月薪欄位。
- 同時，對於一些領月薪的員工，會根據他們的銷售情況，支付給他們一定數額的佣金。他們會提交銷售單據，其中記錄了銷售的日期和數量。在他們的員工紀錄中有一個佣金抽成率欄位。**每隔一週的週五對他們進行支付。**
- 員工可以選擇支付方式。可以選擇把支票郵寄到們指定的郵政地址；也可以把支票保存在出納人員那裡，隨時支取；或者要求將薪水直接存入他們指定的銀行帳戶。
- 一些員工加入了工會。在他們的員工紀錄中有一個每週會費欄位。這些會費必須從他們的薪水中扣除。工會有時也會針對單個工會成員徵收服務費。工會每週會提交這些服務費用，服務費用必須從對應的員工的下個月薪水總額中扣除。
- 薪水支付應用程式每個工作日運行一次，並在當天為相關的員工進行支付。系統會被告知員工的支付日期，這樣它就會計算從員工上次支付日到規定的本次支付日這段期間應支付的金額。

## 第二步：依據規格分析使用案例
透過建立**使用案例**，找出系統的使用者會執行的操作種類。填充案例時不需要陷入過多的細節，只需要能夠「實現程式碼」的細節即可。
- 新增員工
```
使用 AddEmp 事務來新增員工。此事務包含員工的名字、支付方式會用到的地址以及唯一的員工編號。根據工作性質分成 3 類：

1. AddEmp <EmpID> "<name>" "<address>" Hourly <時薪>
2. AddEmp <EmpID> "<name>" "<address>" Salary <月薪>
3. AddEmp <EmpID> "<name>" "<address>" Commission <月薪> <佣金抽成率>

員工紀錄會根據對應的欄位值建立。

---異常處理---
(1) 參數出現錯誤：列印錯誤訊息，但不進行處理。

```
- 刪除員工
```
使用 DelEmp 事務來刪除員工。當執行此事務時，會刪除對應的員工紀錄。

DelEmp <EmpID>

---異常處理---
(1) 無效或未知的員工編號：列印錯誤訊息，但不進行處理。
```
- 登記出缺勤卡
```
使用 TimeCard 事務建立一條新的出缺勤紀錄，並且與此紀錄和對應的員工紀錄關聯起來。

TimeCard <EmpID> <date> <hours>

---異常處理---
(1) 所選擇的員工不是時薪工：列印錯誤訊息，但不進行處理。
(2) 參數錯誤：列印錯誤訊息，但不進行處理。
```
- 登記銷售單據
```
使用 SalesReceipt 事務建立一條新的銷售單據紀錄，並且與此紀錄和對應的員工紀錄關聯起來。

SalesReceipt <EmpID> <date> <銷售額>

---異常處理---
(1) 所選擇的員工不是應該支付佣金的：列印錯誤訊息，但不進行處理。
(2) 參數錯誤：列印錯誤訊息，但不進行處理。
```
- 登記服務費用
```
使用 ServiceCharge 事務建立一條新的服務費用紀錄，並且與此紀錄和對應的員工紀錄關聯起來。

ServiceCharge <工會成員編號> <費用>

這裡不能經由員工編號去存取工會成員，為了避免過於隨意就決定採用哪種方式來完成，所以推遲這個決策到最後。

---異常處理---
(1) 不存在的工會成員：列印錯誤訊息，但不進行處理。
(2) 參數錯誤：列印錯誤訊息，但不進行處理。
```
- 更改支付方式（書本設計為**更改員工明細**，使用範圍較廣）
```
使用 ChgEmp 事務更改員工紀錄的其中一條資訊。

1. ChgEmp <EmpID> Name <name> 更改員工名稱
2. ChgEmp <EmpID> Address <address> 更改員工地址
3. ChgEmp <EmpID> Hourly <hourlyRate> 更改為時薪制
4. ChgEmp <EmpID> Salaried <salary> 更改為固定月薪制
5. ChgEmp <EmpID> Commissioned <salary> <rate> 更改為佣金制
6. ChgEmp <EmpID> Hold 持有支票
7. ChgEmp <EmpID> Direct <bank> <account> 直接存款
8. ChgEmp <EmpID> Mail <address> 郵寄支票
9. ChgEmp <EmpID> Member <memberID> Dues <rate> 使員工加入工會
10. ChgEmp <EmpID> NoMember 從公會中去除員工

---異常處理---
(1) 不存在的工會成員：列印錯誤訊息，但不進行處理。
(2) 不存在的員工：列印錯誤訊息，但不進行處理。
(2) 參數錯誤：列印錯誤訊息，但不進行處理。
```
- 今日運行薪水支付系統
```
執行 Payday 事務時，系統會找到所有該在指定日期進行支付的員工。接著系統會確定他們應扣的款項，並根據他們選擇的支付方式進行支付。一個顯示了所有員工的支付情況的帳務查詢報告會被列印出來。

Payday <date>
```

## 第三步：畫出 UML 圖
### 核心模型
@import "uml-output/main/main.png"

### 薪水支付
@import "uml-output/payment/payment.png"
@import "uml-output/payment/hourlypayment.png"
@import "uml-output/payment/commissionpayment.png"

### 薪水支付時間表
若支付時間表和支付策略有關聯，會出現任一側改變時，另一側要重新測試的問題，這違反了單一職責原則(SRP)及開放封閉原則(OCP)。因此，我把它提到 Employee 類別裏面，只暴露 isPayday() 去檢測是不是交付日。
@import "uml-output/payment-schedule/paymentschedule.png"
@import "uml-output/payment-schedule/schedule.png"

### 事務介面
@import "uml-output/transaction/transaction.png"

### 新增員工事務
我們透過事務把支付時間表和支付種類關聯起來。這麼設計的原因是因為事務是人為設計的、附加的，我們可以輕易更改，保證未來我們在保持核心模型不變的情況下更改關聯關係。
@import "uml-output/transaction/AddEmployeeTransaction.png"
@import "uml-output/transaction/AddEmployeeProgress.png"

### 刪除員工事務
@import "uml-output/transaction/DeleteEmployeeTransaction.png"
@import "uml-output/transaction/DeleteEmployeeProgress.png"

## 登記出缺勤卡事務
@import "uml-output/transaction/TimeCardTransaction.png"
@import "uml-output/transaction/TimeCardProgress.png"