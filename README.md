# starter-server

Backend Server for the final project for CSCI 39548 for CRUD application for Student-Campus management system </br>
Starter/Skeleton code source: https://github.com/mtlynch3/starter-server (@mtlynch3)

To start:

`npm run dev`

Download Postgres and Postman. 

Requirements: 
(Sequelize)
- [ ] `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text

- [ ] `students` model with the following information:
  - [ ] firstName - not empty or null
  - [ ] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [ ] imageUrl - with a default value
  - [ ] gpa - decimal between 0.0 and 4.0

- [ ] Students may be associated with at most one campus
- [ ] Campuses may be associated with many students

(Express and Sequelize)
- [ ] a route to serve up all students
- [ ] a route to serve up all campuses
- [ ] a route to serve up a single campus (based on its id), _including that campuses' students_
- [ ] a route to serve up a single student (based on their id), _including that student's campus_
- [ ] a route to add a new campus
- [ ] a route to add a new student
- [ ] a route to remove a campus (based on its id)
- [ ] a route to remove a student (based on their id)

