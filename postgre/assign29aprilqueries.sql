select * from roles;
select * from users;
select * from UsersInRole;
-- Create a Roles and UsersInRole Table in Database
Create table Roles(
roleName varchar(100),
	permissions varchar(500),
	primary key(roleName)
);
Create table UsersInRole(
	userName varchar(100),
	roleName varchar(100),
	Foreign key(userName) references users(username),
	Foreign key(roleName) references Roles(roleName)
);
insert into users values ('appadmin','pwd1234');
insert into roles values ('admin','Create,Read,Update,Delete');