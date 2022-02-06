const mysql = require('mysql'); 
const readlineSync = require('readline-sync');

const db = mysql.createConnection({
    host: 'localhost', 
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'learningsql',
    socketPath: '/tmp/mysql.sock'
}); 


const view_departments = 'View all departments';
const view_roles = 'View all roles';
const view_employees = 'View all employees';
const add_department = 'Add a department';
const add_role = 'Add a role';
const add_employee = 'Add an employee';
const update_role = 'Update an employee role';

var options = [view_departments, view_roles, view_employees, add_department, add_role, add_employee, update_role];

function selectOption() {
	return readlineSync.keyInSelect(options, "What would you like to do?");
}

function callback(answer) {
	//console.info(answer.name);
  	switch(answer) {
  		case 0:
      		viewDepartments();
      		break;
      	case 1:
      		viewRoles();
      		break;
      	case 2:
      		viewEmployees();
      		break;
      	case 3:
      		addDepartment();
      		break;
      	case 4:
      		addRole();
      		break;
      	case 5:
      		addEmployee();
      		break;
      	case 6:
      		updateRole();
      		break;
      	default:
      		console.info("option entered is not available");
      		break;
  	}
}

function viewDepartments() {
	db.connect(function(err) {
		if (err) {
			console.log("error connecting to db");
			throw err;
		}

		console.log("hi again");
	});

	db.query("SELECT * FROM department", function (err, result, fields) {
    	if (err) {
    		console.log("error running sql");
    		throw err;
    	}

    	console.log("hi again");

    	var departments = [];
    	Object.keys(result).forEach(function(key) {
    		var row = result[key];
    		console.log(row);
    		departments.push(row);
    	});

    	var names = [];
		for (var i = 0; i < departments.length; i++) {
			var department = departments[i];
			names.push(department.title);
		}

		var department_index = readlineSync.keyInSelect(names, "Which role would you like to view?");
		var department = departments[department_index];
		console.log(department);
	});
}