--Insert Medicine data
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('Headeach','Calpol','Very Effective',2,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('Pain','Abc','Very Good',5,2000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('A','A1','Very Effective',2,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('B','B1','Very Effective',9,1000);

insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('C','C1','Very Effective',12,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('D','D1','Very Effective',89,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('E','E1','Very Effective',67,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('F','F1','Very Effective',34,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('G','G1','Very Effective',45,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('H','H1','Very Effective',56,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('I','I1','Very Effective',67,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('J','J1','Very Effective',65,1000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('K','K1','Very Effective',3,1000);

insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('L','L1','Not Effective',8,5000);
insert into Medicine (MedicineCategory,MedicineName,MedicineDescription,MedicinePrice,Stocks)values ('M','M1','Not Effective',82,50400);
select * from medicine;

--Insert Customer data
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Huma','h@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('John','j@gmail.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Mon','m@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Jack','jjj@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Rocky','r@gmail.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Meena','hm@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Tina','th@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Zack','za@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Sheeba','se@gmail.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Uzema','uze@hotmail.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Naushin','nou@outlook.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Suzene','suz@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Shirin','ssh@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Zuber','hzs@yahoo.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Nayla','hs@gmail.com','aaa',999999999);
insert into Customer (CustomerName,CustomerEmail,CustomerPassword,CustomerPhone) values ('Shabnam','rani@yahoo.com','aaa',999999999);
select * from Customer;

--Insert Doctor
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H1','Ears Doctor','h1@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H2','Opthomologist','h2@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H3','OPD','h3@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H4','Heart','h4@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H5','Surgeon','h5@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H6','Ears Doctor','h6@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H7','Ears Doctor','h7@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H8','OPD','h8@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H9','Ent','h9@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H10','Dentist','h10@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H11','Opthomilogist','h11@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H12','Ears Doctor','h12@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H13','Ears Doctor','h13@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H14','Ears Doctor','h14@outlook.com','pp');
insert into Doctor(DoctorName,DoctorsType,DoctorEmail,DoctorPassword) values ('H15','Ears Doctor','h15@outlook.com','pp');
update Doctor set DoctorName = 'v2' where DoctorId = 2;
delete from Doctor where doctorid = 2;
select * from Doctor;


--Insert prescription
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (1,1,'ABc');

insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (2,3,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (4,2,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (6,6,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (7,2,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (8,1,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (9,15,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (10,4,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (11,8,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (12,10,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (13,12,'ABc');
insert into Prescription (DoctorId,CustomerId,PrescriptionDesc) values (14,13,'ABc');

select * from Prescription;

--Insert into Bill
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (1,1,4000,'2022-02-10');

insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (2,2,6000,'2021-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (3,3,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (4,4,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (5,5,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (6,6,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (7,7,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (8,8,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (9,9,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (10,11,4000,'2022-02-10');
insert into Bill(CustomerId,PrescriptionId,Amount,BillDate) values (12,12,4000,'2022-02-10');


--Insert into Bill_medicines
insert into Bill_Medicines(BillId,MedicineId) values (1,2);

insert into Bill_Medicines(BillId,MedicineId) values (2,3);
insert into Bill_Medicines(BillId,MedicineId) values (3,4);
insert into Bill_Medicines(BillId,MedicineId) values (4,5);
insert into Bill_Medicines(BillId,MedicineId) values (5,6);
insert into Bill_Medicines(BillId,MedicineId) values (6,7);
insert into Bill_Medicines(BillId,MedicineId) values (7,8);

--Insert into Orders
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-09-8','Done',101,2);

insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-03-2','Done',102,3);
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-09-8','Done',103,4);
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-09-8','Done',104,5);
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-09-8','Done',105,6);
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-07-8','Done',106,7);
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-06-8','Done',107,8);
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-02-8','Done',108,9);
insert into Orders (OrderDate,OrderStatus,InvoiceNo,MedicineId) values ('2020-04-8','Done',109,10);


--Insert into DailyReceivable

insert into DailyReceivable (BillId,CustomerId) values (1,2);
insert into DailyReceivable (BillId,CustomerId) values (2,3);
insert into DailyReceivable (BillId,CustomerId) values (3,4);
insert into DailyReceivable (BillId,CustomerId) values (4,5);
insert into DailyReceivable (BillId,CustomerId) values (5,6);
insert into DailyReceivable (BillId,CustomerId) values (6,7);
insert into DailyReceivable (BillId,CustomerId) values (7,8);
insert into DailyReceivable (BillId,CustomerId) values (8,9);
insert into DailyReceivable (BillId,CustomerId) values (9,10);

--Insert into Prescription_Medicines

insert into Prescription_Medicines (PrescriptionId,MedicineId) values (1,2); 
insert into Prescription_Medicines (PrescriptionId,MedicineId) values (2,3); 
insert into Prescription_Medicines (PrescriptionId,MedicineId) values (3,4); 
insert into Prescription_Medicines (PrescriptionId,MedicineId) values (4,5); 
insert into Prescription_Medicines (PrescriptionId,MedicineId) values (5,6); 
insert into Prescription_Medicines (PrescriptionId,MedicineId) values (6,7); 
insert into Prescription_Medicines (PrescriptionId,MedicineId) values (7,8); 
