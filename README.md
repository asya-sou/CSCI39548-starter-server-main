# starter-server

Backend Server for the final project for CSCI 39548 for CRUD application for Student-Campus management system </br>
Starter/Skeleton code source: https://github.com/mtlynch3/starter-server (@mtlynch3)

To start:

`npm run dev`

Download Postgres and Postman. 

Requirements: 
(Sequelize)
- [X] `campuses` model with the following information:
  - [X] name - not empty or null
  - [X] imageUrl - with a default value
  - [X] address - not empty or null
  - [X] description - extremely large text

- [X] `students` model with the following information:
  - [X] firstName - not empty or null
  - [X] lastName - not empty or null
  - [X] email - not empty or null; must be a valid email
  - [X] imageUrl - with a default value
  - [X] gpa - decimal between 0.0 and 4.0

- [X] Students may be associated with at most one campus
- [x] Campuses may be associated with many students

(Express and Sequelize)
- [X] a route to serve up all students
- [X] a route to serve up all campuses
- [X] a route to serve up a single campus (based on its id), _including that campuses' students_
- [X] a route to serve up a single student (based on their id), _including that student's campus_
- [X] a route to add a new campus
- [X] a route to add a new student
- [X] a route to remove a campus (based on its id)
- [X] a route to remove a student (based on their id)

