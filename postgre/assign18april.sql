Create Table Department(
	deptno serial not null,
	deptname varchar(100) not null,
	location varchar(100) not null,
	Capacity integer not null,
	primary key (deptno)
);
Create Table Employee(
	empno serial not null,
	empname varchar(100) not null,
	designation varchar(100) not null,
	salary integer not null,
	deptno integer not null,
	primary key (empno),
	FOREIGN KEY (deptno) REFERENCES Department(deptno)
);
Create Table users(
	username varchar(100),
	password varchar(100),
	primary key(username)
);