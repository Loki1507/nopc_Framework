// let sentence = "welcome to the interview";

// let arr1 = sentence.split(" ")

// for(let k = 0 ; k < arr1.length ; k ++){
//     let reversed ;
//     for(let i = arr1[k].length ; i<= 0 ; i--){
//         console.log(arr1[k][i]);
//     }
//     //console.log(reversed)
// }

let sentence = "mera bharat mahan";

let arr1 = sentence.split(" ")

let finalArr = []
for(let eachWord of arr1){
    let revrsedString = eachWord.split("").reverse().join("")
    finalArr.push(revrsedString)
}

finalReversedString = finalArr.join(" ")
console.log(finalReversedString)

