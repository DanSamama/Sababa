/* Author : JAA */
/* ITC 2016 */
/* Create the SQL database for the SABABA project */

/* create the database */
CREATE DATABASE sababa_db;

/* create the table */
DROP TABLE sababa_tbl;
CREATE TABLE sababa_tbl(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	helper TINYINT NOT NULL,
	email VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) not null,
	phone VARCHAR(20) NOT NULL,
	french TINYINT NOT NULL,
	english TINYINT NOT NULL,
	bank TINYINT NOT NULL,
	insurance TINYINT NOT NULL,
	bills TINYINT NOT NULL,
	cell_phone TINYINT NOT NULL,
	visa TINYINT NOT NULL,
	mondays TINYINT NOT NULL,
	tuesdays TINYINT NOT NULL,
	wednesdays TINYINT NOT NULL,
	thursdays TINYINT NOT NULL,
	fridays TINYINT NOT NULL,
	saturdays TINYINT NOT NULL,
	sundays TINYINT NOT NULL,
	rating TINYINT NOT NULL);

SHOW TABLES ;
USE sababa_tbl;

/*********************************** fill in data **************************************/
/* NULL is here because the id is auto implemented */

/* the guys that need help */
INSERT INTO sababa_tbl (NULL, 0, 'test@gmail.com', 'pwd1', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 0, 'test@gmail.com', 'pwd2', 'Ely', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4),
		       (NULL, 0, 'test@gmail.com', 'pwd3', 'Nathalie', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 0, 'test@gmail.com', 'pwd4', 'Daniel', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4),
		       (NULL, 0, 'test@gmail.com', 'pwd5', 'Shlomo', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 0, 'test@gmail.com', 'pwd6', 'Moshe', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 0, 'test@gmail.com', 'pwd7', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3),
		       (NULL, 0, 'test@gmail.com', 'pwd8', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 0, 'test@gmail.com', 'pwd9', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4),
		       (NULL, 0, 'test@gmail.com', 'pwd0', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5);

/* the helpers */
INSERT INTO sababa_tbl (NULL, 1, 'test@gmail.com', 'pwd10', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 1, 'test@gmail.com', 'pwd11', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4),
		       (NULL, 1, 'test@gmail.com', 'pwd12', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 1, 'test@gmail.com', 'pwd13', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3),
		       (NULL, 1, 'test@gmail.com', 'pwd14', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2),
		       (NULL, 1, 'test@gmail.com', 'pwd15', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3),
		       (NULL, 1, 'test@gmail.com', 'pwd16', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4),
		       (NULL, 1, 'test@gmail.com', 'pwd17', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 1, 'test@gmail.com', 'pwd19', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5),
		       (NULL, 1, 'test@gmail.com', 'pwd20', 'Jeremy', 'ATIA', '+972 54239891', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5);




/******************************* Examples of Queries *****************************/

/* show the content of the table */
SELECT * FROM sababa_tbl;

/* count the number of rows */
SELECT COUNT(*) 
FROM sababa_tbl


/* update values in the database : change the languages for an user */
UPDATE sababa_tbl
SET french = 0, english = 1
WHERE email = 'test@gmail.com';

/* if you need more details : http://www.newthinktank.com/2014/08/mysql-video-tutorial/ */
