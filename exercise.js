// Good Luck! You got this 💪🏾

/* ## Functions

 1. Write a function called 'describeCountry' which takes three parameters: `country`,`population` and `capitalCity`. Based on this input, the function returns a string with this format: _'Somaliland has 3.5 million people and its captial city is Hargeisa'_
2. Call the function 3 times with input data for 3 different countries. store the return values in 3 different variables and log them to the console.
3. The world population is 7900 million people. Create a function called `percentageOfWorld1` which recieves a `population` value and reutnrs the percentage of the world population that the given population represents. For example, _China has 1441 million people, so it's about 18.2% of the world population_
   > **NOTE:** To calculate the percentage, divide the given `population` value by 7900 and then multiply by 100
4. Call `percentageOfWorld1` for 3 populations of countries of your choice, store the results into variables, and log them to the console */


// 1.
function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} people and its captial city is ${capitalCity}`
}

// 2.
let somalilandDes = describeCountry ('Somaliland', '3.5 million', 'Hargeisa')
let usDes = describeCountry ('The United States', '330 million', 'Washingtion D.C.')
let ehiopiaDes = describeCountry ('Ethiopia', '115 million', 'Addis Ababa')

console.log (somalilandDes)
console.log (usDes)
console.log (ehiopiaDes)

//3.
function percentageOfWorld1 (population) {
    return (population / 7900 * 100)
}

// 4.
let india = `India is ${percentageOfWorld1 (1380)}% of the world population`
console.log (india)
let subSahara = `Sub-Sahara is ${percentageOfWorld1 (1000)}% of the world population`
console.log (subSahara)
let china = `China is ${percentageOfWorld1 (1441)}% of the world populaton`
console.log (china)

/* ## Introduction to arrays

5. Create an array containing 4 population values of 4 countries of your choice and store it in a varaible called `population`
6. Create an array containing all the neighbouring countries of a country of your choice. Store the array into a varaible called `neighbours`
7. Log to the console whether the array has 4 elements or not (true or false) */

// 5.
let population = [115000000, 59000000, 53000000, 45700000]

// 6.
let neighbours = ['Ethiopia', 'Tanzania', 'Kenya', 'Uganda']

// 7.
console.log (population.length === 4)
console.log (neighbours.length === 4)

/* ## Iteration: for loops

8. Console log one by one the countries inside the `neighbours` array.
9. Console log one by one the countries inside the `neighbours` array but this time in a reverse order. */

// 8.
for (i = 0; i < neighbours.length; i++){
    console.log(neighbours[i])
}

// 9.
for (i = neighbours.length-1; i >= 0; i--){
    console.log (neighbours[i])
}

/* ## Iteration: while loop

10. Do exercise 8 & 9 using while loop */

// 8*.
i = 0
while (i < neighbours.length){
    console.log (neighbours[i])

    i++
}

// 9*.
i = (neighbours.length-1)
while (i >= 0){
    console.log (neighbours[i])

    i--
}