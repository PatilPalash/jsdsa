// // console.log(a)
// // var a; // undefine

// // console.log(a) // is not define

// // console.log(a)
// // let a //is not define

// let a = 12;
// let b="13"
// console.log(typeof(a+b));
// // when we make like number + string its call concatination

// let a1=10;
// let b1=20;
// console.log("sum of 10 and 20 " + a1 + b1) // its concatination
// console.log("sum of 10 and 20 " + (a1 + b1)) // its work now // string
// console.log("sum of 10 and 20 ", a1 + b1) // its work now // number
// console.log(a1 + b1 + "sum of 10 and 20 ") // its work now // string

// // type coercion
// console.log("1"-1);
// console.log("1"*1);
// console.log("1"/1);
// console.log("1"+1); // plus can do two work first is addition(when both side is number) and second is concatination
// //

// // let age=Number(prompt("What is Your age"))
// // console.log(age)

// // convetring from one data type to other is call type castinng
// let a2 = 10;
// let b2=20;

// let c=a;
// a=b 

// let i =11
// i=i++ + ++i;
// console.log(i); // 24

// let a=11, b=22;
// let c=a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a);//13
// console.log("b=" + b);//24
// console.log("c=" + c);//103

// let b = true;
// b++
// console.log(b); // 2

// Javascript Math ------------------------------------
// console.log(Math.PI) // 3.14
// console.log(Math.E) // 2.71
// console.log(Math.LN2) // 0.69
// console.log(Math.LN10) // 2.30
// console.log(Math.LOG2E) // 1.44
// console.log(Math.LOG10E) // 0.43
// console.log(Math.SQRT2) // 1.41
// console.log(Math.SQRT1_2) // 0.70

// The Math.abs() method returns the absolute value of a number.
// The absolute value of a number is its distance from zero on 
// the number line, always represented as a non-negative value
// Key points about absolute value:
// Distance from zero: The absolute value of a number is its distance from zero on the number line. 
// Always non-negative: The absolute value is always a positive number or zero. 
// Symbol: It's represented by the symbol "|" around the number, like this: |x|. 
// NaN if the value is not a number.
// 0 if the value is null.
// console.log(Math.abs(-10)) // 10
// console.log(Math.abs(-7.25)); // 7.25
// console.log(Math.abs(null)); // 0
// console.log(Math.abs("Hello")); // NaN
// console.log(Math.abs(2-3)); // 1
// console.log(Math.abs(NaN)); // NaN
// console.log(Math.abs(-Infinity)); // Infinity
// console.log(Math.abs(Infinity)); // Infinity

// The Math.cbrt() method returns the cubic root of a number.
// console.log(Math.cbrt(27)); // 3
// console.log(Math.cbrt(-27)); // -3

 

// console.log(Math.sign(-10)) // -1
// console.log(Math.sign(0)) // 0
// console.log(Math.sign(10)) // 1
// console.log(Math.round(10.4)) // 10
// console.log(Math.round(10.6)) // 11
// console.log(Math.ceil(10.1)) // 11
// console.log(Math.floor(10.8)) // 10
// console.log(Math.trunc(18.98)) // 18
// console.log(Math.round(10.5)) // 11

// The Math.ceil() method rounds a number rounded UP to the nearest integer.
// console.log(Math.ceil(10.1)) // 11
// console.log(Math.ceil(10.8)) // 11 
// console.log(Math.ceil(10.1)) // 11

// Description
// The Math.E property returns Euler's number.
// The Math.E property returns approximately 2.718.
// Euler's number is the base of natural logarithms, and it is approximately equal to 2.718281828459045.
// What is Euler's Number?
// Euler's number is the base of natural logarithms.
// console.log(Math.E) // 2.718281828459045


// The Math.floor() method rounds a number DOWN to the nearest integer.
// console.log(Math.floor(10.8)) // 10
// console.log(Math.floor(-5.1)); // -6

// The Math.log() method returns the natural logarithm (base E) of a number.
// console.log(Math.log(2)); // 0.6931471805599453
// console.log(Math.log(10)); // 2.302585092994046


// console.log(Math.trunc(18.98)) // 18
// console.log(Math.pow(2,5)) // 2^5 = 32
// console.log(Math.sqrt(25)) // 5
// console.log(Math.abs(15)) // 15
// The Math.max() method returns the number with the highest value.
// console.log(Math.max(78,65,12)) // 78
// The Math.min() method returns the number with the lowest value.
// console.log(Math.min(78,65,12)) // 12

// console.log(Math.random()) // 0 to 1
// console.log(Math.random()*100) // 0 to 100
// console.log(Math.random()*1000) // 0 to 1000
// console.log(Math.random()*10000) // 0 to 10000
// console.log(Math.random()*100000) // 0 to 100000


// console.log(Math.round(10.5)) // 11
// console.log(Math.ceil(10.1)) // 11
// console.log(Math.floor(10.8)) // 10
// console.log(Math.trunc(18.98)) // 18
// console.log(Math.pow(2,5)) // 32
// console.log(Math.sqrt(25)) // 5
// console.log(Math.abs(15)) // 15
// console.log(Math.max(78,65,12)) // 78
// console.log(Math.min(78,65,12)) // 12
// // let a = 25.487845
// // console.log(a.toFixed(2)) // 25.49
// console.log(Math.trunc((Math.random()*9000)+1000)); // 1000 to 9999