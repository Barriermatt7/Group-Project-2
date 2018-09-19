CREATE DATABASE runr_db;
USE runr_db;

CREATE TABLE runr
(
	id int NOT NULL AUTO_INCREMENT,
	dates int (10),
	miles_day int (10) NOT NULL,
	miles_gallon int (10) NOT NULL,
	total_miles__day int (10) NOT NULL,
	total_miles_week int (10) NOT NULL, 
	total_miles_month int (10) NOT NULL,

	PRIMARY KEY (id)
);