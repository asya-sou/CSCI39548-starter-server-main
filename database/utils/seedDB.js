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

	const dummy_student = await Student.create({
			firstname: "Joe",
      		lastname: "Shmo",
			email: "joe@shmo.com"
	});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;