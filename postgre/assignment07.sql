--Assignment 07/04
--1. Print Customers by Doctor Name
select CustomerName,DoctorName
from Prescription
inner join Customer
on Customer.CustomerId=Prescription.PrescriptionId
inner join Doctor
on Doctor.doctorId=Prescription.PrescriptionId;

--2. Print Count of Customer by Each Doctor N
select Count(CustomerName) as TotalCustomer,DoctorName
from Prescription
inner join Customer
on Customer.CustomerId=Prescription.PrescriptionId
inner join Doctor
on Doctor.doctorId=Prescription.PrescriptionId group by Doctorname;

--3. Print Prescription Details by Each Customer
select PrescriptionDesc,CustomerName 
from Prescription
inner join Customer
on Customer.CustomerId=Prescription.PrescriptionId;

--4. Print Prescription Details by Each Doctor Name
select PrescriptionDesc,DoctorName 
from Prescription
inner join Doctor
on Doctor.DoctorId=Prescription.PrescriptionId;

--5. Print List of Medicines Per Customer Name
select MedicineName, CustomerName
from Bill_Medicines
inner join Medicine
on Medicine.MedicineId = Bill_Medicines.id
inner join Customer
on Customer.CustomerId = Medicine.MedicineId;

--6. Print Receivables between 2 Dates
select sum(Amount)
from DailyReceivable
inner join Bill
on Bill.BillId = DailyReceivable.BillId
where Bill.BillDate between '2020-09-01' and '2021-09-09';

--7. Print List of Medicines Ordered between 2 Dates
select MedicineName
from Orders
inner join Medicine
on Medicine.MedicineId = Orders.OrderId
where Orders.OrderDate between '2020-09-01' and '2021-09-09';

--8. Print Count of Order placed for each medicine between 2 Dates
select Count(MedicineName)
from Orders
inner join Medicine
on Medicine.MedicineId = Orders.OrderId
where Orders.OrderDate between '2020-09-01' and '2021-09-09';

--9. Create a Stored Procedure to Generate Detailed bill for a Customer
--This will use Customer Table, Preseciption Table, Bill and Item_Wise_Bill Table
Create PROCEDURE sp_GenerateBill(
	p_CustomerName varchar(100),
	p_Amount integer,
	p_BillId smallint,
	p_PrescriptionId smallint,
	p_PrescriptionDesc varchar(100),
	p_MedicineId smallint,
	p_MedicineName varchar(100),
	p_MedicinePrice integer
)
LANGUAGE plpgsql
AS $$
Begin 
	--set p_Amount =  (p_Amount * p_MedicinePrice);
	--select p_CustomerName from Customer;
ENd;
$$
call sp_GenerateBill('Huma',12,19,19,'take medicine',19,'Calpol',8);


select * from prescription;


alter table drop 