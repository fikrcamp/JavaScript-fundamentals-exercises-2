// Good Luck! You got this 💪🏾
// Write your code here.



// 1. Write a function called 'describeCountry' which takes three parameters: `country`,`population` and `capitalCity`. Based on this input, the function returns a string with this format: _'Somaliland has 3.5 million people and its captial city is Hargeisa'_

function describeCountry(country,population,capitalCity){
    return (` ${country} has ${population} million people and its capital city is ${capitalCity}`)
    
}
console.log(describeCountry("Somaliland","3.5","Hargeisa"))

// 2. Call the function 3 times with input data for 3 different countries. store the return values in 3 different variables and log them to the console.

console.log(describeCountry("Djibouti","1","Djibouti"))
console.log(describeCountry("Ethopia","117","Addis Ababa"))
console.log(describeCountry("Egypt","101.48","Cairo"))



// 3. The world population is 7900 million people. Create a function called `percentageOfWorld1` which recieves a `population` value and reutnrs the percentage of the world population that the given population represents. For example, _China has 1441 million people, so it's about 18.2% of the world population_
//    > **NOTE:** To calculate the percentage, divide the given `population` value by 7900 and then multiply by 100

function percentageOfWorld1 (population){
    return(population/7900*100)
}

console.log(percentageOfWorld1(1441))

// 4. Call `percentageOfWorld1` for 3 populations of countries of your choice, store the results into variables, and log them to the console

console.log(percentageOfWorld1(1))
console.log(percentageOfWorld1(117))
console.log(percentageOfWorld1(101.48))




// 7. Log to the console whether the array has 4 elements or not (true or false)
let myArray = [1,2,3,4]
console. log (myArray.length === 4)


// 5. Create an array containing 4 population values of 4 countries of your choice and store it in a varaible called `population`
let populations = [3.5, 117, 101.48];



// 6. Create an array containing all the neighbouring countries of a country of your choice. Store the array into a varaible called `neighbours`

let neighbours = ["Ethopia" , "Djibouti" , "Somalia"];


// 8. Console log one by one the countries inside the `neighbours` array.


console.log (neighbours[0])
console.log (neighbours[1])
console.log (neighbours[2])



// 9. Console log one by one the countries inside the `neighbours` array but this time in a reverse order.

console.log (neighbours[2])
console.log (neighbours[1])
console.log (neighbours[0])

// 10. Do exercise 8 & 9 using while loop


//initialization in variable
i=0;
while (i<3) {

    console.log(neighbours[i])  
    i++
}


//initialization in variable
i = 2;
while(i>=0){

     console.log(neighbours[i])  
     i--
}