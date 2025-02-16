//Task 1: Function Declaration

function calculateSalary(baseSalary, bonus, taxRate) {              //declared a function with 3 variables
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)   //utilized the formula to calculate net salary  
    return netSalary.toFixed(2);                                    //returned the output of the function; rounded to 2 decimal places

}


console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1)}`); //logged the output using test data and template literal // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15)}`); // Expected output: "Net Salary: $6950.00"