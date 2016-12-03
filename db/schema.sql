CREATE DATABASE IF NOT EXISTS hotdogs_db;

USE hotdogs_db;

DROP TABLE IF EXISTS hotdogs;

CREATE TABLE hotdogs
(
	id int NOT NULL AUTO_INCREMENT,
	meal_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	meal_date timestamp NOT NULL,
	PRIMARY KEY (id)
);

-- CREATE TABLE parties
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	party_name varchar(255) NOT NULL,
-- 	party_type varchar(255) NOT NULL,
-- 	party_cost int NOT NULL,
-- 	client_id int NOT NULL,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (client_id) REFERENCES clients(id)
-- );
