//Task 1: Function Declaration

function calculateSalary(baseSalary, bonus, taxRate) {              //declared a function with 3 variables
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)   //utilized the formula to calculate net salary  
    return netSalary.toFixed(2);                                    //returned the output of the function; rounded to 2 decimal places

}


console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1)}`); //logged the output using test data and template literal // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15)}`); // Expected output: "Net Salary: $6950.00"

//Task 2: Function Expression

let calculateDiscount = function(price, discountRate){      //declared a function expression with 2 variables
    let finalPrice = price - (price * discountRate)         //utilized the formula to calculate final price
    return finalPrice.toFixed(2);                           //returned function output

};

console.log(`Final Price: $${calculateDiscount(100, 0.2)}`); //logged the output using test data and template literal // Expected output: "Final Price: $80.00"
console.log(`Final Price: $${calculateDiscount(250, 0.15)}`); // Expected output: "Final Price: $212.50"