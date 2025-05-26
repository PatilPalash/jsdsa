// array is linear DS which stores multiple-
// values in a continuous manner
// ex. of linear DS array, linklist, stack, que
// let arr = []; // dinamic array
// always appends value using index
// to appends value used push
// arr.push(1)
// arr.push("hello")
// arr.push(true)
// arr.push({"name":"Palash"})
// arr.push(454.22)
// console.log(arr)
// // Array index is start from 0
// console.log(arr[0])
// console.log(arr[1])
// // to remove element from array
// console.log(arr.pop(1))
// console.log(arr)

// arr[0] = 100
// arr[1] = 20
// arr[2] = 30

// arr[7] = 150

// console.log(arr)

// let newArry = new Array(3)
// newArry[0] = 10; 
// newArry[1] = 20;
// newArry[2] = 30;
// newArry[3] = 100;// my arr is 3 only then also we can add 
// newArry[10] = 150; // [ 10, 20, 30, 100, <6 empty items>, 150 ]

// console.log(newArry)

// newArry.push(10)
// console.log(newArry)

// tkae numbers of value in in promt
// let prompt = require('prompt-sync')();

// for(i=0;i<=5;i++){
//     const ans = Number(prompt("Enter a Number"))
//     arr[i]=ans
//     // arr.push(ans)
// }
// console.log(arr)

// let New1Arr = [10, 20, 30, 40, 50]
// let sum=0;
// for(let i=0;i<New1Arr.length;i++){
//     sum=sum+New1Arr[i]
// }
// console.log(sum)

// Max Numbers
// let New2Arr = [10,2,78,100,4]
// let max = New2Arr[0]
// for(i=1;i<New2Arr.length;i++){
//     if(max<New2Arr[i]){
//         max=New2Arr[i]
//     }
// }
// console.log(max)
// Min Number
// let New2Arr = [10,2,78,100,4]
// let max = New2Arr[0]
// for(i=1;i<New2Arr.length;i++){
//     if(max>New2Arr[i]){
//         max=New2Arr[i]
//     }
// }
// console.log(max)
// Second Max element from array
// let arrTry = [10,30,56,43,29,64,49,60] // [10,20,30,40,40,40,40]
// let max = Math.max(arrTry[0],arrTry[1])
// let secmax = Math.min(arrTry[0],arrTry[1])

// for(let i=2;i<arrTry.length;i++){
//     if(arrTry[i]>max){
//         secmax=max
//         max=arrTry[i]
//     }else if(arrTry[i]>secmax && max != arrTry[i]){
//         secmax=arrTry[i]
//     }
// }
// console.log(secmax)




// Reverce the array New Space
// let arr = [10,20,30,40,50]
// let temp= new Array(arr.length)
// let j=0
// for(let i=arr.length -1; i>=0;i--){
//     temp[j]=arr[i];
//     j++
// }
// console.log(temp)


// Reverse the array without makeing new  array
// let arr = [10,20,30,40,50]
// let i=0, j=arr.length-1;
// while(i!=j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }
// console.log(arr)


// Two Pointer algo [1,1,0,1,0,1,0,1,0,1,0,1,0,0,0]
let arr = [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0]
let i = 0, j = 0;
while (i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        j++
    }
    i++
}
console.log(arr)