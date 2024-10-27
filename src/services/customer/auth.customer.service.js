import Customer from "../../models/customer.js";

export async function findCustomerByEmail(email) {
  return await Customer.findOne({ email });
}

export async function createNewCustomer(req) {
  const newCustomer = new Customer({
    ...req.body,
  });
  await newCustomer.save();
  return newCustomer;
}
