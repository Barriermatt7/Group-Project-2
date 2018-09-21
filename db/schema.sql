CREATE DATABASE runr_db;
USE runr_db;

CREATE TABLE runr
(
	id int NOT NULL AUTO_INCREMENT,
	date int (10),
	miles_day decimal (6,2) NOT NULL,
	miles_gallon decimal (3,2) NOT NULL,
	total_miles_day decimal (6,2) NOT NULL,
	total_miles_week int (10) NOT NULL, 
	total_miles_month int (10) NOT NULL,

	PRIMARY KEY (id)
);