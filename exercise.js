// Good Luck! You got this 💪🏾
// Write your code here.

// Answer 1

function describeCountry(country,population,capitalCity) {
    return country + " " + "has " + population + " " + "people and its Captial City is" + " " + capitalCity;
}

let Country = describeCountry('Somaliland', '3.5 million'  , 'Hargeisa' );
console.log (Country)


// Answer 2

let Country1= describeCountry ('Ethiopia','80 million','Addis Ababa');
let country2= describeCountry ('kenya','60 million','Nairobi');
let country3= describeCountry ('Somalia','10 million','Mogadisho')

console.log(Country1);
console.log(country2);
console.log(country3);

// Answer 3 & 4

function percentageOfWorld1(population) {
    return (population/7900)*100
}

let usaPopl = percentageOfWorld1(332)
let indiaPopl = percentageOfWorld1(1406)
let sudanPopl = percentageOfWorld1(43)

console.log(`USA is about ${usaPopl}% of the worlds population` )
console.log(`India is about ${indiaPopl}% of the worlds population` )
console.log(`Sudan is about ${sudanPopl}% of the worlds population` )


// Answer 5 

let population = [1441,486,232,111]

// Answer 6 & 7
let neighbours = ["Somalia","Djibouti","Ethiopia"]



console.log(neighbours.length)

console.log( neighbours.length==4);

// Answer 8



for(i=0;i<neighbours.length;i++){
    console.log(neighbours[i])
}

// Answer 9

for(i<neighbours.length;i>=0;i--){
    console.log(neighbours[i]);

}

Answer 10

let i =0 
while (i<neighbours.length){ console.log(neighbours[i])
i++;
}

let j =2
while (j>=0) {
    console.log(neighbours[j]);
    j--
}