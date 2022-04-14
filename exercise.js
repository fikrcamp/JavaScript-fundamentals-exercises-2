// // Good Luck! You got this 💪🏾
// // Write your code here.
function describeCountry(country, population, capitalCity){
    console.log(`${country} has ${population} million people and it's capital city is ${capitalCity}`);
    }
    describeCountry("Somaliland", 3.5, "Hargeisa");
    describeCountry("Ethiopia", 115, "AddisAbaba");
    describeCountry("Somalia", 15, "Mogadishu");
    
    function percentageOfWorld(population){
        return population / 7900 * 100
      } 
    let populationOfMalaysia= percentageOfWorld(32)
    let populationOfSingapore= percentageOfWorld(6)
    let populationOfIndonesia= percentageOfWorld(273)

    console.log(`Malaysia has 32 million people, so it's about ${populationOfMalaysia}% of the world population`);

    console.log(`Singapore has 32 million people, so it's about ${populationOfSingapore}% of the world population`);

    console.log(`Indonesia has 32 million people, so it's about ${populationOfIndonesia}% of the world population`);


   let population= [12,40,30,55];
    for(let i=0 ; i < 4; i++){
        console.log(population[i]);
    }

    let neighbours=["Algeria","Niger","Chad","Mali"]
    console.log(neighbours.length === 4);


    for(let n=0;n<4;n++){
        console.log(neighbours[n])
    }
    for(let n= neighbours.length-1 ;n>0;n-- ){
        console.log(neighbours[n])
    }


    {let n = 0
    while(n<neighbours.length){
        console.log(neighbours[n])
        n++ 
    }}

    {let  n = neighbours.length -1
    while(n>=0){
        console.log(neighbours[n])
        n-- 
    }
    }