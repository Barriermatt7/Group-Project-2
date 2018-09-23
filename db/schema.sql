DROP DATABASE IF EXISTS runr_db;

CREATE DATABASE runr_db;
USE runr_db;

CREATE TABLE runr (
	id int NOT NULL AUTO_INCREMENT,
	date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	miles_day DECIMAL (6,2) NOT NULL,
	miles_gallon DECIMAL (3,2) NOT NULL,
	total_miles_day DECIMAL (6,2) NOT NULL,
	total_miles_week INT (10) NOT NULL, 
	total_miles_month INT (10) NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE driver (
	id INT NOT NULL AUTO_INCREMENT, 
	email VARCHAR (30),
	password VARCHAR (30),
	driver VARCHAR (30) NULL,
	make VARCHAR (20) NULL,
	model VARCHAR (20) NULL,
	avg_miles_gal INT (100) NULL,

	PRIMARY KEY (id)
);