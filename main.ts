// Car Purchase Program

const BASE_PRICE = 25000;
const FLOOR_MATS = 500;
const NAV_SYSTEM = 1000;
const HEATED_SEATS = 500;
const EXTENDED_WARRANTY = 2500;

let totalCost = BASE_PRICE;

console.log("Base Price                                      25000.00");

// Ask for each feature
const mats = prompt("Would you like floor mats? (yes/no)");
if (mats?.toLowerCase() === "yes") {
  totalCost += FLOOR_MATS;
  console.log("Floor mats                                     500.00");
}

const nav = prompt("Would you like a navigation system? (yes/no)");
if (nav?.toLowerCase() === "yes") {
  totalCost += NAV_SYSTEM;
  console.log("Navigation system                           1000.00");
}

const seats = prompt("Would you like heated leather seats? (yes/no)");
if (seats?.toLowerCase() === "yes") {
  totalCost += HEATED_SEATS;
  console.log("Heated leather seats                          500.00");
}

const warranty = prompt("Would you like the 5-year extended warranty? (yes/no)");
if (warranty?.toLowerCase() === "yes") {
  totalCost += EXTENDED_WARRANTY;
  console.log("5-Year extended warranty                    2500.00");
}

// Calculate 13% tax
const tax = totalCost * 0.13;

// Output tax + final cost
console.log("13% Taxes                                   " + tax.toFixed(2));
console.log("Final cost of car                           " + (totalCost + tax).toFixed(2));