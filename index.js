// Declare customerName in global scope
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare bestCustomer globally
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicit global variable (not best practice)
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "someone else";

// Function attempting to change leastFavoriteCustomer (this will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob"; // Expected to fail because it's a constant
}
