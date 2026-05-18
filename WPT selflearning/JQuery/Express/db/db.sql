CREATE DATABASE college_db;
USE college_db;

CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100),
    duration VARCHAR(50),
    fees INT
);
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100),
    email VARCHAR(100),
    course_id INT,
    FOREIGN KEY(course_id) REFERENCES courses(id)
);