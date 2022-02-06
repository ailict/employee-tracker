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

function viewRoles() {
	var roles = db.query(`SELECT * FROM role;`);
	var titles = [];
	for (var i = 0; i < roles.length; i++) {
		var role = roles[i];
		titles.push(role.title);
	}

	var role_index = readlineSync.keyInSelect(titles, "Which role would you like to view?");
	var role = roles[role_index];
	console.log("id = " + role.id + ", title = " + role.title + ", salary = " + role.salary, + ", department_id = ", role.department_id);
}

function viewEmployees() {
	var employees = db.query(`SELECT * FROM employee;`);
	var names = [];
	for (var i = 0; i < employees.length; i++) {
		var employee = employees[i];
		names.push(employee.name);
	}

	var employee_index = readlineSync.keyInSelect(names, "Which employee would you like to view?");
	var employee = employees[employee_index];
	console.log("id = " + employee.id + ", first_name = " + employee.first_name + ", last_name = " + employee.last_name, + ", role_id = ", employee.role_id);
}

function addDepartment() {
	var name = readlineSync.question('What is the name of the deparment?');

	db.query(`INSERT INTO department (name) VALUES (?);`, name);
}

function addRole() {
	var title = readlineSync.question('What is the title of the role?');
	var salary = readlinSync.question('What is the salary of the role (in dollars)?')
	var department_id = readlinSync.question('What is the department_id of the role?')


	db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`, title, salary, department_id);
}

function addEmployee() {
	var first_name = readlineSync.question('What is the first name of the employee?');
	var last_name = readlineSync.question('What is the last name of the employee?');
	var role_id = readlineSync.question('What is the role ID of the employee?');
	var manager_id = readlineSync.question('What is the employee ID of the manager?');

	db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`, first_name, last_name, role_id, manager_id);
}