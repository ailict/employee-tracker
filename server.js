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