// Good Luck! You got this 💪🏾
// Write your code here.
function describeCountry(Country, Population, Capitalcity) {
    return `${Country} has ${Population} people and its  capitalcity is ${Capitalcity}`
  

}
console.log(describeCountry('Somaliland', 3.500000, 'Hargeisa'))

//2
let descJapan = describeCountry('Japan', 125, 'Tokyo');

let descBelguim = describeCountry('Belguim', 12, 'Brussels');
let descFrance = describeCountry('France', 67, 'Paris');
console.log(descJapan, descBelguim, descFrance);



//3&4
function percentageOfWorld3(population) {
    return (population / 7900) * 100;
}
let percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
};
let percEthiopia = percentageOfWorld1(115);
let percChina = percentageOfWorld1(1441);
let percJapan = percentageOfWorld1(125);
console.log(percEthiopia, percChina, percJapan);

//5
let populations = [16, 115, 56, 4];
let neighbours = ['somalia', 'Ethiopia', 'Kenya','somaliland']; 
let populations4 = [16, 115, 56, 12]; console.log(populations.length === 4);

//8
let SONeighbours = ['somali', 'Ethiopia', 'Kenya', 'somaliland'];
for (let i = 0; i <SONeighbours.length; i++){
    console.log(SONeighbours[i])
}

//9 reverse order for loop
for (let i = SONeighbours.length -1 ; i >= 0; i--){
    console.log(listOfNeighbours[i])
}

//10
let SONeighbours1  = ['somali', 'Ethiopia', 'Kenya', 'somaliland'];
let i = 0;
while (i <4) {
    console.log(SONeighbours1[i])
    i++;
}

// reverse order while loop 
let x = 3;
while (x>= 0) {
    console.log(SONeighbours1[x])
    x--
}

