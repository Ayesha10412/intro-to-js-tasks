// ### Task-2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// </br>
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// **Output:**
// </br>
// Print the result in 2 decimal places.

// ---

// **Sample Input:**
// </br>
// 75.25, 65, 80, 35.45, 99.50

// **Sample Output:**
// </br>
// 71.04

let marks=[75.25, 65, 80, 35.45, 99.50];
let average= (marks[0]+marks[1]+marks[2]+marks[3]+marks[4])/5 ;
console.log(marks);
console.log('\n');
console.log(average.toFixed(3));