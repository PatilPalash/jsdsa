// jitni jaada lines utna bada size file ka 
// 1mb vs 100mb
// 600 lines ka code -> file size jaada -> 
// user ko time lagega load krne mein website -> 
// user experience bad -> brand ka overall performance bad -> 
// business band ho skta hai



//loop
// for while do-while
// for(start; end; change){

// }
// 1-22
// for(i=0; i<22; i++){
//     console.log("loop for 1-22 i - ",i)
// }
// 23-54
// for(i=23; i<54; i++){
//     console.log("loop for 23-54 i - ",i)
// }
// // 200-100
// for(i=200; i>100; i++){
//     console.log("loop for 200-100 i - ",i)
// }
// for(var i=1;i<6001; i++){
//     console.log("hello ",i)
// }

// let i = 1
// for(;i<=10; i++){

// }
// console.log("i - ",i)

// infinite loop
// for (var i=1;i<=10;){
//     console.log(i)
// }
// its valid loop
// for(;;){
//     console.log("first")
// }


// 1) questionn one sum of n natural numbers

// var pr = prompt("kaha tak add karwaaoge ?")
// if(pr===null){
//     console.log("cancle")
// }else{
//     const n = Number(pr);
//     if(isNaN(n)){
//         alert("Invalid input")
//     }else{
//         if(n>0){
//             var sum = 0;
//             for(var i =1; i<=n; i++){
//                 sum = sum + i;
//             }
//             console.log(sum);
//         }else{
//             console.log("should be +ve and more than 0");
//         }
//     }
// }




// 2) questionn one sum of n natural numbers and factorial

// var pr = prompt("kaha tak add karwaaoge ?")
// if(pr===null){
//     console.log("cancle")
// }else{
//     const n = Number(pr);
//     if(isNaN(n)){
//         alert("Invalid input")
//     }else{
//         if(n>0){
//             var fact = 1;
//             for(var i =1; i<=n; i++){
//                 fact = fact * i;
//             }
//             console.log(fact);
//         }else{
//             console.log("should be +ve and more than 0");
//         }
//     }
// }

// optimize version 1
// let n = Number(prompt("enter a number:"));
// if(!n || n<1) console.log("invalid input or should be positive");
// else console.log([...Array(n)].reduce((f,_,i)=>f*(i+1),1))
// optimize version 2
// let n = +prompt("enter a number:");
// if(n<1||isNaN(n)) console.log("invalid input or should be positive");
// else {
//     let fact = 1;
//     while (n>1) fact *= n--;
//     console.log(fact)
// }


//3) question factors of number
// two methods 
// var pr = prompt("kaha tak add karwaaoge ?")
// if(pr===null){
//     console.log("cancle")
// }else{
//     const n = Number(pr);
//     if(isNaN(n)){
//         alert("Invalid input")
//     }else{
//         if(n>0){
//             // method 1
//             // for(var i =1; i<=n; i++){
//             //     if(n%i===0){
//             //         console.log(i)
//             //     }
//             // }
//             // method 2
//             // in this loop we reduce the loop count by half using n/2 so ->
//             for(var i =1; i<=Math.floor(n/2); i++){
//                 if(n%i===0){
//                     console.log(i)
//                 }
//             }
//             console.log(n)
//         }else{
//             console.log("should be +ve and more than 0");
//         }
//     }
// }

//4) question prime of number
// two methods 
// var pr = prompt("kaha tak add karwaaoge ?")
// if (pr === null) {
//     console.log("cancle")
// } else {
//     const n = Number(pr);
//     if (isNaN(n)) {
//         alert("Invalid input")
//     } else {20

//         if (n > 0) {
//             // var primehai = true
//             // for(var i=2; i<=Math.floor(n/2);i++){
//             //     if(n%i===0){
//             //         primehai=false
//             //         break;
//             //     }
//             // }
//             // console.log(primehai)
//             console.log(isPrime(n));
//         } else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// }

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n == 2) return true;
//     if (n % 2 == 0) return false;
//     for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//         if (n % i == 0) return false
//     }
//     return true
// }


// break and continue
// for(var i = 1;i<23;i++){
//     // if(i===11) continue; // its leave 11
//     if(i===11) break; // its stop loop after 11
//     else console.log(i);
// }

// while pattern
// start;
// while(end){
//     //code
//     change;
// }
// var i = 1;
// while(i<23){
//     console.log(i)
//     i++;
// }

// var ans = prompt("kuchh bhi dedo(exit for close)");

// while(ans !== 'exit'){
//     ans = prompt("kuchh bhi dedo(exit for close)")
// }

// var ans = prompt("kuchh bhi dedo(exit for close)");
// if (ans === null) {
//     console.log("cancle")
// } else {
//     var n = Number(ans);
//     if (isNaN(n)) {
//         alert("Invalid input")
//     } else {
//         if (n > 0) {
//             var sum = 0;
//             while (n > 0) {
//                 var rem = n % 10;
//                 sum = sum + rem;
//                 n = Math.floor(n / 10);
//             }
//             console.log((sum))
//         } else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// }


// reverse number
// var ans = prompt("kuchh bhi dedo(exit for close)");
// if (ans === null) {
//     console.log("cancle")
// } else {
//     var n = Number(ans);
//     if (isNaN(n)) {
//         alert("Invalid input")
//     } else {
//         if (n > 0) {
//             var rev = 0;
//             while(n>0){
//                 var rem = n%10;
//                 rev=rev*10+rem;
//                 n=Math.floor(n/10);
//             }
//             console.log(rev)
//         } else {
//             console.log("should be +ve and more than 0");
//         }
//     }
// }



// strong number
var ans = prompt("kuchh bhi dedo(exit for close)");
if (ans === null) {
    console.log("cancle")
} else {
    var n = Number(ans);
    if (isNaN(n)) {
        alert("Invalid input")
    } else {
        if (n > 0) {
            while(n>0){
                var sum=0;
                var rem=n%10;
                var fact=1;
                var copy = n;
                for(var i=1;i<=rem;i++){
                    fact=fact*i;
                }
                sum = sum+fact;
                n=Math.floor(n/10);
            }
            if(copy===sum) {
                console.log("strong")
            }else{
                console.log("not strong")
            }
        } else {
            console.log("should be +ve and more than 0");
        }
    }
}