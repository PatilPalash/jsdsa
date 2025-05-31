let prompt = require('prompt-sync')();

// Q1.left and rigth rotation by 1 element
// Q2.left and right rotation by k element
// Q3.Remove duplicates from the sorted array
// Q4.Merge sorted array
// Q5.Best time to busy and sell stocks
// Q6.sort the color
// Q7.Maximum subarray / Kadane's algorithm
// Q8.Majority Element/ Moore's voting also
// Q9.Trapping Rain water

// Looping
// for(i=1;i<=3;i++){
//         console.log("Hello 😎")
//     }
// Nested Loops
// for(j=1;j<=4;j++){
//     console.log(j + " excoution")
//     for(i=1;i<=3;i++){
//         console.log("Hello 😎")
//     }
// }

// Q1. left rotation by 1 element
// let arr = [1,2,3,4,5]
// let copy = arr[0]
// for(i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length -1]=copy
// console.log(arr)

// right rotation by 1 element
// let arr = [1,2,3,4,5]
// let copy = arr[arr.length-1]
// for(i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1]
// }
// arr[0]=copy
// console.log(arr)


// Q2.left rotation by k element ///////////////////////
// bute force method
// let arr = [1, 2, 3, 4, 5]
// let k = Number(prompt("Enter K Number"))
// k = k % arr.length
// let count = 0
// for (j = 0; j < k; j++) {
//     count++
//     let copy = arr[0]
//     for (i = 0; i <= arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(arr)
// console.log(count)

// Optimize way1
// let arr = [1, 2, 3, 4, 5]
// let temp = new Array(arr.length)
// let k = Number(prompt("Enter K Number"))
// k = k % arr.length
// for (i = 0; i <= arr.length; i++) {
//     temp[i] = arr[(i+k)%arr.length]
// }
// console.log(temp)

// Optimize way2 
// Block Swap Reverse Algorithm is a technique 
// used for rotating an array by a given number of positions.
//  It works by dividing the array into two blocks and repeatedly 
// swapping them until the desired rotation is achieved
// Here's a breakdown of the algorithm:
// 1. Initialization:
// Divide the array into two blocks, A (first 'r' elements) and B (remaining 'n-r' elements). 
// 2. Comparison and Swap:
// If the sizes of A and B are not equal, perform a block swap. The block size is determined by the smaller of the two blocks. 
// 3. Iteration:
// Repeat step 2 until the sizes of A and B are equal. 
// 4. Final Swap:
// Once the block sizes are equal, perform the final block swap between A and B. 
// 5. Reversal:
// Use three in-place reversals (rotate A, rotate B, rotate AB) to complete the rotation. 
let arr = [1, 2, 3, 4, 5]
let k = Number(prompt("Enter K Number"))
k = k % arr.length
reverse(0, k - 1)
reverse(k, arr.length - 1)
reverse(0, arr.length - 1)
console.log(arr)
function reverse(i, j) {
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}


// chatgpt
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter K Number"));
// k = k % arr.length; // Handle k > n

// function reverse(subArr, start, end) {
//     while (start < end) {
//         [subArr[start], subArr[end]] = [subArr[end], subArr[start]];
//         start++;
//         end--;
//     }
// }

// // Left rotation by k positions
// reverse(arr, 0, k - 1);           // Reverse first k elements
// reverse(arr, k, arr.length - 1);  // Reverse remaining elements
// reverse(arr, 0, arr.length - 1);  // Reverse entire array

// console.log(arr);



// Q2. Right rotation by k element ///////////////////////
