const pool = require("../config/database");

module.exports={
    create: (data, callback) =>{
        pool.query(`INSERT INTO customer(customer_name, customer_age, customer_email,customer_password,customer_gender)
                values(?,?,?,?,?)`,
            [
                data.customer_name,
                data.customer_age,
                data.customer_email,
                data.customer_password,
                data.customer_gender
            ],
            (err, result)=>{
                if(err) {return callback(err)};
                return callback(null, result);
            }
        );
    },
    getCustomers: (gender, callback) => {
    let query = `SELECT id, customer_name, customer_age, customer_email, customer_gender 
                 FROM customer`;
    const queryParams = [];
    if (gender) {
      query += ` WHERE customer_gender = ?`;
      queryParams.push(gender);
    }
    pool.query(query, queryParams, (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
    },
    getCustomerById: (id, callback)=>{
        pool.query(
            `select id,customer_name,customer_age,customer_email,customer_gender from customer where id = ?`,
            [id],
            (err, result, fields)=>{
                if(err) return callback(err);
                return callback(null, result[0]);
            }
        )
    },
    updateCustomer: (data, callback)=>{
        pool.query(
            `Update customer set customer_name=?, customer_age=?, customer_email=?,customer_gender=? where id =?`,
            [
                data.customer_name,
                data.customer_age,
                data.customer_email,
                data.customer_gender,
                data.id
            ],
            (err, result)=>{
                if(err) return callback(err);
                return callback(null, result[0]);
            }
        );
    },
    deleteCustomer: (id, callback)=>{
        pool.query(
            `delete from customer where id = ?`,
            [id],
            (err, result)=>{
                if(err) return callback(err);
                return callback(null, result[0]);
            }
        );
    }
}