CREATE DATABASE learningsql;  

CREATE TABLE department (id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) NOT NULL); 

INSERT INTO department (name) VALUES (‘Finance’);  

INSERT INTO department (name) VALUES (‘Engineering’);  

INSERT INTO department (name) VALUES (‘HR’);



CREATE TABLE role (id INTEGER AUTO_INCREMENT PRIMARY KEY, title VARCHAR(30), salary DECIMAL, department_id INT);



ALTER TABLE role ADD FOREIGN KEY (department_id) REFERENCES department(id);  



INSERT INTO role (id, title, salary, department_id) values (1, 'HR MANAGER', 70000, 3);

INSERT INTO role (id, title, salary, department_id) values (2, 'ENGINEERING MANAGER', 770000, 2);

INSERT INTO role (id, title, salary, department_id) values (3, 'CFO', 7730000, 1);





CREATE TABLE employee (id INTEGER AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(30), last_name VARCHAR(30), role_id INT, manager_id INT); 



ALTER TABLE employee ADD FOREIGN KEY (role_id) REFERENCES role(id);  



ALTER TABLE employee ADD FOREIGN KEY (manager_id) REFERENCES employee(id);  



INSERT INTO employee (id, first_name, last_name, role_id) VALUES (1, 'aili', 'ct', 1);

INSERT INTO employee (id, first_name, last_name, role_id) VALUES (2, 'sam', 'raf', 2, 1);