let prompt = require('prompt-sync')();

// this single log take entier line and go in -
// next line so if its blank also then also its take entier line
// console.log("hello")
// console.log("world")


// its log out in single line and -
// process.stdout.write() only run in terminal not in console
// process.stdout.write("hello ")
// process.stdout.write("world")

// let a = prompt("Enter a number")
// process.stdout.write(a)

// console.log("*") 
// console.log("*")
// console.log("*")
// console.log("*")
// console.log("*")

// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")


let n = Number(prompt("Enter a number: "))
// make * * * * *
// for(let i=1; i<=n;i++){
//     process.stdout.write(`* `)
// }// * * * * *

// make now like this ex. Base Pattern
// . is cols and , is rows
// . . . . . cols
// * * * * * , rows
// * * * * * ,
// * * * * * ,
// * * * * * ,
// * * * * * ,
//  first noob way to do
// for(let i=1; i<=n;i++){
//     process.stdout.write(`* `)
// }
// console.log()
// for(let i=1; i<=n;i++){
//     process.stdout.write(`* `)
// }
// console.log()
// for(let i=1; i<=n;i++){
//     process.stdout.write(`* `)
// }
// console.log()
// for(let i=1; i<=n;i++){
//     process.stdout.write(`* `)
// }
// console.log()
// for(let i=1; i<=n;i++){
//     process.stdout.write(`* `)
// }
// console.log()

// second way to do Base Pattern
// for(let i=1; i<=n;i++){  // i controls rows
//     for(let j=1;j<=n;j++){ // j controls cols
//         process.stdout.write(`* `)
//     }
//     console.log();
// }

// with out process.stdout.write()
// let n=5
// for(i=1;i<=n;i++){
//     let add="";
//     for(j=1;j<=n;j++){
//         add= add + "* "
//     }
//     console.log(add)
// }


// Q. Right Angle Traingle
// *
// * *
// * * *
// * * * *
// * * * * *
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// with out process.stdout.write()
// let add = "";
// for (j = 1; j <= n; j++) {
//     add = add + "* "
//     console.log(add)
// }

// Q.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j+" ")
//     }
//     console.log()
// }

// with out process.stdout.write()
// for(i=1;i<=n;i++){
//     let add="";
//     for(j=1;j<=i;j++){
//         add= add + j
//     }
//         console.log(add)
// }



// Q.
// A
// A B
// A B C
// A B C D
// A B C D E
// for (let i = 1; i <= n; i++) {
//     let ascii = 65;
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(ascii)+" ")
//         ascii++
//     }
//     console.log()
// }


// Q. Inverted Right Angle Triangle
// * * * * *
// * * * *
// * * *
// * *
// *
// First
// for (let i = n; i >= 1; i--) { // rows we need to start from last to start
//     for (j = 1; j <= i; j++) { // cols
//         process.stdout.write("* ")
//     }
//     console.log()
// }
// Second
// for (let i = 1; i <=n; i++) { // rows we need to start from last to start
//     for (j = 1; j <= n-i+1; j++) { // cols
//         process.stdout.write("* ")
//     }
//     console.log()
// }
// Third
// for (let i = 1; i <=n; i++) { // rows we need to start from last to start
//     for (j = n; j >= i; j--) { // cols
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// with out process.stdout.write()
// for(i=n;i>=0;i--){
//     let add="";
//     for(j=1;j<=i;j++){
//         add= add + "* "
//     }
//     console.log(add)
// }


// Q. Mirrir right angle traingle
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }
    for (let j = 1; j <=i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
