// This one is my first try. Will do another one with filter function

// const removeFromArray = function(numArray, ...numDelete) {
//     const result = [];
//     numDelete = Array.from(numDelete);
//     for (const num of numArray) {
//         let status = 0;
//         for (let i = 0; i < numDelete.length; i++) {
//             if (num !== numDelete[i]) {
//                 status = 1;
//             } else if (num === numDelete[i]) {
//                 status = 0;
//                 break;
//             }
//         }
//         console.log(result)
//         if (status) result.push(num);
//     }
//     return result;
// };

const removeFromArray = function(numArray, ...numDelete) {
 return numArray.filter(num => !numDelete.includes(num)) 
}

// Do not edit below this line
module.exports = removeFromArray;
