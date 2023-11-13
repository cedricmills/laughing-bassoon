/**
*   100 Algorithms: Chessboard
*/
// function chessBoard(height, width) {
//   let results = '';
//   for (let row = 0; row < height; row++){
//     for (let col = 0; col < width; col++){
//       if ((row + col) % 2 === 0){
//         results += ' ';
//       } else {
//         results += '#';
//       }
//     }
//     if (row !== height - 1){
//       results += '\n';
//     }
//   }
//   return results;
// }

// console.log(chessBoard(8, 8));
// console.log(chessBoard(3, 3) === " # \n# #\n # ");
// console.log(chessBoard(4, 3) === " # \n# #\n # \n# #");


/**
* 107 Algorithms: Flip Pairs
* code that will flip every pair of characters in a string.
* flipPairs("abc 123") should return "ba c213"
*/
// const flipIt = function (string) {
//   let results = '';
//   for (i = 0; i < string.length; i += 2) {
//     if (i + 1 < string.length){
//       results += string[i + 1] + string[i];
//     } else {
//       results += string[i];
//     }
//   }
//   return results;
// };

// console.log(flipIt('abc 123'));


/**
 * 108 Algorithms: Detect Outlier Number
 * detectOutlierValue(11, 13, 15, 14, 17, 19) should return 14
*/
// const findOutlier = (array) => {
//   let evenCount = 0;
//   let oddCount = 0;
//   let evenIndex;
//   let oddIndex;

//   for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0){
//       evenCount ++;
//       evenIndex = i;
//     } else {
//       oddCount ++;
//       oddIndex = i;
//     }
//   }
//   if (evenCount === 1){
//     return array[evenIndex];
//   }
// };
// console.log(findOutlier([11, 13, 15, 14, 17, 19]))

/**
 * Algorithms: Find Target Pair For Sum
 * This function will be given an array of positive integers, and a number called SUM.
 * find a pair of numbers from the array that adds up to be the SUM.
 * Return the pair of numbers in an array with the smaller number first.
 * input [2, 8, 1, 7, 19, 12, 4], 3 should return [1, 2]
 */


/**
 * In this exercise, you need to implement the code that calculates the average value of a collection of numbers.
 * The collection of numbers is passed to the "average" function as an array.
 * Return the average value of the numbers.average([10, 20, 30, 40, 50]) returns 30
 */


/**
 * 110 Algorithms: Average of Numbers
 */

/**111 Algorithms: Isogram
 * 
 */


/**
 * 112 Algorithms: Is It a Palindrome
 * */

/**
 * 113 Algorithms: Matching Characters
*/

/**
 * 114 Algorithms: Remove Truthy Values
*/

/**
 * 115 Algorithms: Morse Code Decoder
*/

/**
 * 116 Algorithms: Widest Pasture
*/

/**
 * 117 Algorithms: Roman Numerals
*/

/**
 * 118 Algorithms: Sum of Odd Numbers
*/

/**
 * 119 Algorithms: Widest Pasture Position
*/

/**
 * 120 Algorithms: Morse Code Encoder
*/

/**
 * 121 Algorithms: Is it Prime?
*/

/**
 * 122 Algorithms: Greatest Common Divisor
*/

/**
 * 123 Algorithms: Sum of Odd Indices
*/

/**
 * 124 Algorithms: Flattener
*/

/**
 * 125 Algorithms: Additive Persistence
*/

/**
 * 126 Algorithms: Permutations
 */