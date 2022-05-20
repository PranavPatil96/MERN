-- Medical Store Database
-- 1. Create Customer table.
use medicalstoredb;
Create Table Medicine(
	MedicineId int NOT NULL auto_increment ,
	MedicineCategory varchar(100) NOT NULL,
	MedicineName varchar(100) NOT NULL,
	MedicineDescription varchar(100) NOT NULL,
	MedicinePrice int NOT NULL,
    MedicineQuan int NOT NULL,
	PRIMARY KEY (MedicineId)	
);

-- 2. Create Doctor
Create Table Doctor(
	DoctorId int NOT NULL auto_increment,
	DoctorName varchar(100) NOT NULL,
	DoctorsType varchar(100) NOT NULL,
	DoctorEmail varchar(100) NOT NULL,
	PRIMARY KEY (DoctorId)
);

-- 3. Create Customer
Create Table Customer(
	CustomerId int NOT NULL auto_increment,
	CustomerName varchar(100) NOT NULL,
	CustomerEmail varchar(100) NOT NULL,
	CustomerPhone bigint NOT NULL,
    DoctorId int NOT NULL,
	PRIMARY KEY (CustomerId),
    Constraint FK_DoctorId
    foreign key (DoctorId) references Doctor(DoctorId)
);

-- 4. Create Precription
Create Table Prescription(
	PrescriptionId int NOT NULL auto_increment,
	DoctorId int NOT NULL,
	CustomerId int NOT NULL,
	PrescriptionDesc varchar(200) NOT NULL,
	PRIMARY KEY (PrescriptionId),
    -- constraint FK_DoctorId
	FOREIGN KEY (DoctorId) REFERENCES Doctor(DoctorId),
    -- constraint FK_CustomerId
	FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);
-- ALter table Prescription
alter table Prescription add column Medication int not null;
alter table Prescription add foreign key (Medication) references Medicine(MedicineId); 
-- Altered
-- 5. Craete Bill Table
Create Table Bill(
	BillId int NOT NULL auto_increment,
	CustomerId int NOT NULL,
	PrescriptionId int NOT NULL,
	Amount int NOT NULL,
	BillDate datetime NOT NULL,
	PRIMARY KEY (BillId),
	FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId),
	FOREIGN KEY (PrescriptionId) REFERENCES Prescription(PrescriptionId)
);
-- 6. Create Bill_Medicines
Create Table Bill_Medicines(
	id int NOT NULL auto_increment,
	BillId int NOT NULL,
	MedicineId int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (BillId) REFERENCES Bill(BillId),
	FOREIGN KEY (MedicineId) REFERENCES Medicine(MedicineId)	
);

-- 7. Craete Order Table
Create Table Orders(
	OrderId int NOT NULL auto_increment,
	OrderDate datetime NOT NULL,
	OrderStatus varchar(100) NOT NULL,
	InvoiceNo integer NOT NULL,
	MedicineId int NOT NULL,
	PRIMARY KEY (OrderId),
	FOREIGN KEY (MedicineId) REFERENCES Medicine(MedicineId)	
);

-- 8. Create Daily_Recievalble
Create Table DailyReceivable(
	DailyReceivableId int NOT NULL auto_increment,
	BillId int NOT NULL,
	CustomerId int NOT NULL,
	Primary Key (DailyReceivableId),
	FOREIGN KEY (BillId) REFERENCES Bill(BillId),
	FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);

-- 9 . 
Create Table Prescription_Medicines(
	id int NOT NULL auto_increment,
	PrescriptionId int NOT NULL,
	MedicineId int NOT NULL,
	Primary Key (id),
	FOREIGN KEY (PrescriptionId) REFERENCES Prescription(PrescriptionId),
	FOREIGN KEY (MedicineId) REFERENCES Medicine(MedicineId)
);

-- 

