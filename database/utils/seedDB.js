const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "123 Zoom BB Str, CUNY, NY 12345",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		address: "123 Not Happening Ave, Welness Check, MO 54321",
		description: "This is a school in MA."
	});
	const dummy_campus3 = await Campus.create({
		name: "Yale",
		address: "123 Not Happening Ave, Welness Check, PA 11111",
		description: "This is a school in PA."
	});

	const dummy_student = await Student.create({
			firstName: "Joe",
      		lastName: "Shmo",
			email: "joe@shmo.com"
	});

	const dummy_student2 = await Student.create({
		firstName: "Momo",
		lastName: "Soughou",
		email: "momo@soughou.com",
	});

	const dummy_student3 = await Student.create({
		firstName: "Kisa",
		lastName: "Soughou",
		email: "kisa@soughou.com",
		gpa: 4.0
	});

	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus3);
	await dummy_student3.setCampus(dummy_campus2);


	
}

module.exports = seedDB;