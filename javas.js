// // //functions  
// // //void function - jo kuch return na kre.
// // function myfunc(){
// //     console.log("im void function");
// // }
// // let data = myfunc();
// // console.log(data);


// // //pure function - jo kuch return kre.
// // function myfunc2(){
// //     console.log("im pure function");
// //     return 100;
// // }
// // let data1 = myfunc2();
// // console.log(data1);

// // function arr(array){
// //     let sum = 0;
// //     for (let i of array){
// //         sum+=i;

// //     }
// //     return sum;

// // }
// // console.log(arr([1,2,3,4,5,6]));

// // function factorial(fac){
// //     let n = 5;
// //     let result = 1;
// //     for(let i=1; i<=n; i++){
// //         result *= i;
// //     }
// //     return result;
// // }


// function even(num){
//     let sum = 0;
//     for(let i=0; i<=num; i++){
//         if(i%2===0){
            
//         }
//     }
//     return sum;
// }
// console.log(even(1));

// function isPrime(num) {
//     if (num <= 1) return false; 
//     if (num === 2) return true; 
//     if (num % 2 === 0) return false; 
    

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7));  
// console.log(isPrime(10));  

//22/3/25
console.log("Hello world");
console.log(typeof 1);
console.log('1');
console.log(typeof String(1));
console.log(typeof Number('1'));
console.log(typeof +'1');
console.log(3**3);

//30/3/25
// array is a collection of elements
// length =n;
// index = n-1;

let array = [1,2,3,4,5];

// methods of array
array.push(10);
array.pop();
array.unshift(113);
array.shift();
console.log(array.length);
console.log(array);


// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// for (let i in array){
//     console.log(array[i]);
// }

// for (let i of array){
//     console.log(i);
// }
