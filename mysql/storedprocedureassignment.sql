DELIMITER //
create procedure getBill()
Begin
	select CustomerName,MedicineName,Amount
from prescription
inner join Medicine
on prescription.Medication = medicine.MedicineId
inner join Customer
on prescription.CustomerId = Customer.customerId
inner join bill
on bill.PrescriptionId = prescription.PrescriptionId;
End //
DELIMITER ;

-- Call the Stored Proc
Call getBill();
-- To drop getBill procedure.
drop procedure getBill;
