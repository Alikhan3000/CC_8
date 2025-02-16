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

//Task 3: Arrow Function

let calculateServiceFee = (amount, serviceType) => {        //declared an arrow function with 2 variables
    let fee = 0;                                            //declared a variable to store the function output

    if (serviceType === "Premium") {                        //used if else statement to assign the right fee percentage based on the category; 
        fee = 0.15 * amount;                                //once the category is known fee percentage is multiplied by the amount to get the final price
        
    } else if (serviceType === "Standard"){
        fee = 0.10 * amount;

    }else{fee = 0.05 * amount};

    return fee.toFixed(2);                                  //returned function output; rounded to 2 decimals
};

console.log(`Service Fee: $${calculateServiceFee(200, "Premium")}`); //logged the function using test data // Expected output: "Service Fee: $30.00"
console.log(`Service Fee: $${calculateServiceFee(500, "Standard")}`); // Expected output: "Service Fee: $50.00"


//Task 4: Parameters and Arguments

function calculateRentalCost(days, carType, insurance = false){        //declared a function with 1 numerical, 1 string, 1 boolean variables
    let rate = 0;                                                       //declared a variable to identify the price rate depending on the car category 

    if (carType === "Economy") {rate = 40}                              //used if else statement to assing the right price rate depending on the car category
    else if(carType === "Standard") {rate = 60}
    else if(carType === "Luxury") {rate = 100};

    let carDailyCost = days * rate;                         
    //the rate is multiplied by the number of days and if they choose to have insurance (insurance = true) there is an extra $20 charge per day
    if (insurance){carDailyCost += 20 * days};
    

    return `Total Rental Cost: $${carDailyCost.toFixed(2)}`;    //returned the output using template literals and toFixed to round the output to 2 decimal places

};

console.log(calculateRentalCost(3, "Economy", true)); // logged the output using test data // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"


//Task 5: Returning Values


function calculateLoanPayment(principal, rate, time) {          //declared a function with 3 variables
    let totalPayment = principal + (principal * rate * time);   //used the given formula to calculate the total loan payment

    return `Total payment: $${totalPayment.toFixed(2)}`;        //returned the function output using template literal; rounded the output to 2 decimal places

};

console.log(calculateLoanPayment(1000, 0.05, 2));//logged the output using test data // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

//Task 6: Higher-Order Functions

let transactions = [200, 1500, 3200, 800, 2500]; //declared an array with 5 numbers

function filterLargeTransactions(transactions, filterFunction){     //declared higher-order function that uses transactions array and uses filterFunction as an argument
    return transactions.filter(filterFunction);                     
};

console.log(filterLargeTransactions(transactions, amount => amount > 1000));    //logged the function output, which is a function that filters transactions < 1000
// Expected output: [1500, 3200, 2500])

//Task 7: Closures

function createCartTracker(){           //declared a function that returns another function 
    cartValue = 0;                      //declared a variable to store the initial and running total
    return function(purchaseNew){       //this function adds new purchases to the running total and returns the total
        cartValue += purchaseNew;
        return cartValue; 

}};

let cart = createCartTracker();                //logged the variables using template literal
console.log(`Cart Total Value: $${cart(20)}`); // Expected output: "Total Cart Value: $20"
console.log(`Cart Total Value: $${cart(35)}`); // Expected output: "Total Cart Value: $55"


//Task 8: Recursion in JavaScript

function calculateSavings(years, amount){           //declared a recursive function that calls itself until years = 10, starting from the given number of years
    if (years >= 10) {return amount.toFixed(2);}

    return calculateSavings (years + 1, amount * 1.05)  ////it is a compound interest, which means that every year the number of years is increases by 1 and interest applies to the amount, which alrealy includes the interest from the previous year

};

console.log(`Projected Savings: $${calculateSavings(8, 1000)}`);  //logged the function output; the function runs 2 times in this case since it starts from year 8 to 10  // Expected output: "Projected Savings: $1102.50"
console.log(`Projected Savings: $${calculateSavings(5, 5000)}`);  //logged the function output; the function runs 5 times in this case since it starts from year 5 to 10   // Expected output: "Projected Savings: $6381.41"
// Expected output: "Projected Savings: $1102.50"
// Expected output: "Projected Savings: $6381.41"