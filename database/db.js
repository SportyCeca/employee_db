import Database from "better-sqlite3";

const db = new Database("./database/db.sqlite");

db.prepare(`CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company STRING
    lastname STRING
    firstname STRING
    position STRING
    salary DOUBLE
    deparment STRING
    gender STRING
    holiday_days INT
    birth_date STRING )`,
).run();

export const getAllEmployees = () => db.prepare("SELECT * FROM employees").all();
export const getEmployeeById = (id) =>
    db.prepare("SELECT * FROM employees WHERE id = ?").get(id);
export const createEmployee(company, lastname, firstname, position, salary, department, gender, holiday_days,birth_date) =>
    db.prepare("INSERT INTO employees (company, lastname, firstname, position, )