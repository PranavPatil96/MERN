--Create Medicine Table
Create Table Medicine(
	MedicineId smallint NOT NULL,
	MedicineCategory varchar(100) NOT NULL,
	MedicineName varchar(100) NOT NULL,
	MedicineDescription varchar(100) NOT NULL,
	MedicinePrice integer NOT NULL,
	PRIMARY KEY (MedicineId)	
);
--ADD COLUMN STOCKS
Alter TABLE Medicine ADD COLUMN Stocks smallint NOT NULL;

--Create Table Customer
Create Table Customer(
	CustomerId smallint NOT NULL,
	CustomerName varchar(100) NOT NULL,
	CustomerEmail varchar(100) NOT NULL,
	CustomerPassword varchar(100) NOT NULL,
	CustomerPhone bigint NOT NULL,
	PRIMARY KEY (CustomerId)
);
--Create Doctors
Create Table Doctor(
	DoctorId smallint NOT NULL,
	DoctorName varchar(100) NOT NULL,
	DoctorsType varchar(100) NOT NULL,
	DoctorEmail varchar(100) NOT NULL,
	DoctorPassword varchar(100) NOT NULL,
	PRIMARY KEY (DoctorId)
);
--Create Precription
Create Table Prescription(
	PrescriptionId smallint NOT NULL,
	DoctorId smallint NOT NULL,
	CustomerId smallint NOT NULL,
	PrescriptionDesc varchar(200) NOT NULL,
	PRIMARY KEY (PrescriptionId),
	FOREIGN KEY (DoctorId) REFERENCES Doctor(DoctorId),
	FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);

--Create Bill
Create Table Bill(
	BillId smallint NOT NULL,
	CustomerId smallint NOT NULL,
	PrescriptionId smallint NOT NULL,
	Amount integer NOT NULL,
	BillDate date NOT NULL,
	PRIMARY KEY (BillId),
	FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId),
	FOREIGN KEY (PrescriptionId) REFERENCES Prescription(PrescriptionId)
);

--Create Many-Many realtionship with Bill & Medicine
Create Table Bill_Medicines(
	id smallint NOT NULL,
	BillId smallint NOT NULL,
	MedicineId smallint NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (BillId) REFERENCES Bill(BillId),
	FOREIGN KEY (MedicineId) REFERENCES Medicine(MedicineId)	
);

--Create Order Table
Create Table Orders(
	OrderId smallint NOT NULL,
	OrderDate date NOT NULL,
	OrderStatus varchar NOT NULL,
	InvoiceNo integer NOT NULL,
	MedicineId smallint NOT NULL,
	PRIMARY KEY (OrderId),
	FOREIGN KEY (MedicineId) REFERENCES Medicine(MedicineId)	
);

--Create DailyReceivable
Create Table DailyReceivable(
	DailyReceivableId smallint NOT NULL,
	BillId smallint NOT NULL,
	CustomerId smallint NOT NULL,
	Primary Key (DailyReceivableId),
	FOREIGN KEY (BillId) REFERENCES Bill(BillId),
	FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId)
);

--Create Prescription_Medicines 
Create Table Prescription_Medicines(
	id smallint NOT NULL,
	PrescriptionId smallint NOT NULL,
	MedicineId smallint NOT NULL,
	Primary Key (id),
	FOREIGN KEY (PrescriptionId) REFERENCES Prescription(PrescriptionId),
	FOREIGN KEY (MedicineId) REFERENCES Medicine(MedicineId)
);