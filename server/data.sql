CREATE DATABASE forestHealthDB;

CREATE TABLE form (
    formId VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255),
    location VARCHAR(255),
    date VARCHAR(255)
);

CREATE TABLE citizen_scientist (
    userId VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    gender VARCHAR(10),
    dateOfBirth VARCHAR(255)
);

INSERT INTO form (formId, userId, location, date)
VALUES ('0', 'paul@test.com', 'Acacia', 'Sat Sep 16 2023');