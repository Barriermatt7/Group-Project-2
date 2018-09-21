INSERT INTO runr (date, miles_day, miles_gallon, miles_per_day, total_miles_day, total_miles_week, total_miles_month) VALUES ("0000-00-00", "100.25", "35.11", "70.1", "300", "2000");
INSERT INTO runr (miles_gallon) VALUES ('10.7');
INSERT INTO runr (miles_per_day) VALUES ('30');


SELECT FROM_DAYS(SUM(TO_DAYS(date))) FROM runr;