const postgres = require('../database').postgres;

/** EmployeeModel model */
class EmployeeModel {

    // emp_id, name, phone, firm_id, hod, role_id, salary, inct_factor, img_url

    /** create employee function */
    static createEmployee(name, phone, firm_id, hod, role_id, salary, inct_factor, img_url) {
        return postgres.query(
            `INSERT INTO employees (name, phone, firm_id, hod, role_id, salary, inct_factor, img_url) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
             RETURNING emp_id`,
            [name, phone, firm_id, hod, role_id, salary, inct_factor, img_url]
        );
    }

    /** search employee with phone function */
    static searchEmployeeByPhone(phone) {
        return postgres.query(
            `SELECT emp_id FROM employees WHERE phone=$1`,
            [phone]
        );
    }

}



module.exports = EmployeeModel;