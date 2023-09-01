const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("./customer.controller");
const router = require("express").Router();

router.post("/", createCustomer);
router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);


module.exports = router;
