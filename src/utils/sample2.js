let sentence = "my heart is beating !!!!"

let arr1 = sentence.split(" ");

//console.log(arr1)
let reversedArr = [];

for(let eachWord of arr1){
   //console.log(eachWord.length)
   let reversedstr = "" ;
    for(let i = eachWord.length-1 ; i >= 0 ; i--){
       reversedstr = reversedstr + eachWord[i]
    }
    reversedArr.push(reversedstr);
   
}

console.log(reversedArr.join(" "))