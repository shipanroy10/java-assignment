
function feetToMile(feet){

    
    let mile = feet / 5280;
    let result = mile;
    return result;

}

const output = feetToMile(105)
 console.log(output);




function woodCalculator(chair,table,bed){
let chairCount = chair * 1;
let tableCount = table * 3;
let bedCount = bed * 5;
let totalWood = chairCount + tableCount + bedCount;
return totalWood;

}
const result = woodCalculator(1,2,4);
console.log(result);

function brickCalculator(flor){
    let first = 15000 ;
    let second = 12000 ;
    let third = 10000 
    let brick = first * flor; 
    return brick;
    
    }
    
    
    const result = brickCalculator(10);
    console.log(result)




function tinyFriend(names){
let smallest = names[0];

for(let i =0;i <names.length; i++){
let currentName = names[i];
if(currentName.length<smallest.length){
smallest = currentName;

}

}

return smallest;


}

const output = tinyFriend(['ajij','sabbas','rakib','ajijur','raj']);
  console.log(output);

