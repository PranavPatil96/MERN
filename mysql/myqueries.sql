use medicalstoredb;
-- 1. print customer name by doctor name
select CustomerName, DoctorName
from Customer
inner join Doctor
on Customer.DoctorId = Doctor.DoctorId;

-- 2. Print Count of Customer by Each Doctor Name
select Count(CustomerId) as TotalCustomer, DoctorName
from Customer
inner join Doctor
on Customer.DoctorId = Doctor.DoctorId
group by DoctorName;

-- 3. Print Prescription Details by Each Customer
select CustomerName, PrescriptionDesc
from Customer
inner join prescription
on Customer.DoctorId = Prescription.DoctorId;

-- 4. Print Prescription Details by Each Doctor Name
select PrescriptionDesc,DoctorName
from Prescription
inner join Doctor
on Doctor.DoctorId=Prescription.PrescriptionId;

-- 5. Print List of Medicines Per Customer Name
select MedicineName,CustomerName
from prescription
inner join medicine
on prescription.Medication = medicine.MedicineId
inner join Customer
on prescription.CustomerId = customer.CustomerId;

-- 6. Print Receivables between 2 Date
select sum(Amount)
from DailyReceivable
inner join Bill
on Bill.BillId = DailyReceivable.BillId
where Bill.BillDate between '2022-09-23' and '2022-09-25';

-- 7. Print List of Medicines Ordered between 2 Dates
select MedicineName,OrderDate
from Orders
inner join Medicine
on Medicine.MedicineId = Orders.MedicineId
where Orders.OrderDate between '2004-09-23' and '2005-09-25';

-- 8. Print Count of Order placed for each medicine between 2 Dates
select Count(MedicineName)
from Orders
inner join Medicine
on Medicine.MedicineId = Orders.MedicineId
where Orders.OrderDate between '2004-09-23' and '2005-09-25';