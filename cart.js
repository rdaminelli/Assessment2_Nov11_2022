///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    cartTotal = (cartTotal * (1 + tax)) - couponValue;
    return cartTotal
}
console.log(calcFinalPrice(12, 1.5, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    name: to identify the costumer. This is a string data type because it's a name, and as a string it could be ordered alphabetically, for example.
    e-mail: to contact the costumer, e.g.: let them know about special offers. This is a string data type because it's an email, and as a string it could be ordered alphabetically, for example.
    phone: to contact the costumer, e.g.: give a personalized experience when they call. This will be a string data type, because these numbers are not to be used in calculations. Using phone numbers as strings make the data clear and unambiguous.   
    most common order: costumers like to repeat orders, having it handy may speed up the ordering process. This is a string data type, and as such, string methods can be used. 
    tags: this can be any information related to the costumer, including their preferences, e.g.: "vegan", "lactose intolerant". This should be an array data type, this way the informaion about a costumer can be stored as a list. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

var costumer1 = {
    name: 'Homer Simpson',
    email: 'chunkylover53@aol.com',
    phone: '555-7246',
    commmonOrder: 'Hot pink dounut with sprinkles',
    tags: ['process food only', 'Wants to reach 300lbs to qualify for disability.']
}

console.log(costumer1);