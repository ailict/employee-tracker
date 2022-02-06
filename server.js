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
