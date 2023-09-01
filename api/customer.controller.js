const {
  create,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("./customer.service");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
  createCustomer: (req, res) => {
    const body = req.body;
    const cypherSalt = genSaltSync(10);
    body.customer_password = hashSync(body.customer_password, cypherSalt);
    create(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json(result);
    });
  },
  getCustomerById: (req, res) => {
    const {id} = req.params;
    getCustomerById(id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!result) {
        return res.json({
          success: 0,
          message: `Record not found`,
        });
      }
      return res.json(result);
    });
  },
  getCustomers: (req, res) => {
    const param = req.query;
    getCustomers(param, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json(result);
    });
  },
  updateCustomer: (req, res) => {
    const {id} = req.params
    const body = req.body;
    const cypherSalt = genSaltSync(10);
    body.customer_password = hashSync(body.customer_password, cypherSalt);
    updateCustomer(body, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: `Updated Successfully`,
      });
    });
  },
  deleteCustomer: (req, res) => {
    const {id} = req.params
    deleteCustomer(id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!result) {
        return res.json({
          success: 0,
          message: `Records not Found for id ${id}`,
        });
      }
      return res.json({
        success: 1,
        message: `customer data deleted succefully`,
      });
    });
  }
};
