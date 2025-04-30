//1) Valid Voter // Question1 -----------------------------------------
// let ans = Number(prompt("what is your age ?"))
// console.log(NaN === NaN)//false //to make its true used isNaN()

// if (isNaN(ans)) {
//     console.log("wrong input");
// }else if (ans >= 18) {
//     console.log("you can vote")
// } else {
//     console.log("you can not vote")
// }

//2) Shop discount // Question2 ---------------------------------------
// let amount = Number(prompt("what is the final amount ?"))
// let dis = 0;
// if (isNaN(amount)) {
//     console.log("wrong input")
// } else if (amount > 0 && amount <= 5000) {
//     // console.log("0% discount")
//     // console.log(amount)
//     dis = 0
// } else if (amount > 5001 && amount <= 7000) {
//     // console.log("5% discount")
//     // console.log(amount - Math.floor((5 * amount) / 100))
//     dis = 5
// } else if (amount > 7001 && amount <= 9000) {
//     // console.log("10% discount")
//     // console.log(amount - Math.floor((10 * amount) / 100))
//     dis = 10
// } else if (amount > 9000) {
//     // console.log("20% discount")
//     // console.log(amount - Math.floor((20 * amount) / 100))
//     dis = 20
// }
// let showmedis = Math.floor((dis * amount) / 100)
// console.log("Payable amount -", amount - showmedis, "Discount get -", showmedis)

//3) Bijli Bill // Question3 -------------------------------------------

// let unit = Number(prompt("Enter electricity unit ?"))
// let amount = 0;
// if(unit>400){
//     amount += (unit -400)*13;//3900
//     unit=400
// }

// if(unit>200 && unit<=400){
//     amount += (unit -200)*8;//1600
//     unit=200
// }
// if(unit>100 && unit<=200){
//     amount += (unit -100)*6;//600
//     unit=100
// }
// amount +=unit*4
// console.log(amount)

//4) INR denominator // question4---------------------------------------
// let amount = 4823;
// if(amount>=500){
//     console.log("500 notes : "+Math.floor(amount/500));
//     amount=amount%500;
// }
// if(amount>=200){
//     console.log("200 notes : "+Math.floor(amount/200));
//     amount=amount%200;
// }
// if(amount>=100){
//     console.log("100 notes : "+Math.floor(amount/100));
//     amount=amount%100;
// }
// if(amount>=50){
//     console.log("50 notes : "+Math.floor(amount/50));
//     amount=amount%50;
// }
// if(amount>=20){
//     console.log("20 notes : "+Math.floor(amount/20));
//     amount=amount%20;
// }
// if(amount>=10){
//     console.log("10 notes : "+Math.floor(amount/10));
//     amount=amount%10;
// }
// if(amount>=5){
//     console.log("5 notes : "+Math.floor(amount/5));
//     amount=amount%5;
// }
// if(amount>=2){
//     console.log("2 notes : "+Math.floor(amount/2));
//     amount=amount%2;
// }
// if(amount===1){
//     console.log("1 notes : "+amount);
//     amount=amount%1;
// }

// Ternary operator ? : -----------------------------------------------------
// 112>13 ? console.log("heyhey") : console.log("huuhuu")
// console.log(112>12?"heyhey":"huhu")

// nested ternar operator -------------------------------------------
// let num=10;
// console.log(num>0?"+":num<0?"-":"0")

// let day = 4
// switch(day){
//     case 1:console.log("monday");
//     break

//     case 2:console.log("tuesday");
//     case 3:
//         case 4:console.log("4")
//         break

//     default:console.log("invalid")
// }

// switch(true){
//     case 19>6:
//         console.log("hello");
//         break
//     case 10 < 9:
//         console.log("hey");
//         break
//     default: console.log("invalid")
// }


// let num = 0.1 + 0.2
// console.log(Number(num.toPrecision(1)))
// switch(Number(num.toPrecision(1))){
//     case 0.4:console.log("hello");
//     break
//     case 0.3:console.log("hellowwww");
//     break
//     case 0.5:console.log("hey");
//     break
//     default:console.log("namaste")
// }

// let num = 0.1 + 0.2;

// Define a small tolerance for floating-point comparison
// const tolerance = 0.0000001;

// switch (true) {
//     case Math.abs(num - 0.3) < tolerance:
//         console.log("hellowwww");
//         break;
//     case Math.abs(num - 0.4) < tolerance:
//         console.log("hello");
//         break;
//     case Math.abs(num - 0.5) < tolerance:
//         console.log("hey");
//         break;
//     default:
//         console.log("namaste");
// }

// switch(num){
//     case 0.4:console.log("hello");
//     break
//     case 0.3:console.log("hellowwww");// fail due to precision issues it not return 0.3 its return 0.300004
//     break
//     case 0.5:console.log("hey");
//     break
//     default:console.log("namaste")
// }
