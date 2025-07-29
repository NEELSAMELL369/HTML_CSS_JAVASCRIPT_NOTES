//********************************FUNCTION*******************************************
1;
// let name = "neel"
// function chK(){
//     console.log(name)
// }
// chK()
//Output will be neel bkx let is block scope but above let is outside of block scope that;s the reason it declare. let can be come from ouside to inside but from block it cannnot go out

2;
// function sum(x,y,z){
//     return x+y+z
// }
// console.log(sum(1,2,3))

3;
// function fruits(){
//     console.log("neel")
// }

// fruits.name = "orange"
// fruits()
//output will neel

4;
// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

//output will be 1 because in javascript first prefrence is for local variable
//and second output will be undefined because we have not declared y
//and third out put will be 2

5;
// function getmessage() {
//   throw "Hello world";
// }

// function sayhello() {
//   try {
//     const data = getmessage();
//     console.log(`Welcome to ${data}`);
//   } catch (error){
//     console.log(`Error ${error}`);
//   }
// }
// sayhello()

//Output will be error hello world becaus we throw key word which is used for error purpose it self

6;
// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

// x is undefine and y will be number

7;
// function chk(a, b) {
//   if (a > b) console.log("A is greater");
//   else console.log("B is greater");
//   return;
//   a + b;
// }

// console.log(chk(2,3))

8;
// if (function fn() {}) {
//     console.log(fn);
//   }

//When we write any expression or value inside if after evaluate it becomes garbage

9;
// var magic = 900
// function magic(){
//     console.log("Neel")
// }

// console.log(magic)

10;
// againtest();
// test();
// const test = function () {
//   console.log("Hii Devin");
// };

// function againtest() {
//   console.log("Hii neel");
// }
//Here we have call two different function first function is known as function expression second one function declration or statement
//In function expression we wont be able to access before intialization
//In function declaretion we can access from anywhere

11; //Make this function in expression
//function(){
//     console.log("Hii neel")
// }()

// !function(){
//     console.log("Hii neel")
// }()

//By using not we are making fun expression and if we will not use ! than we will get syntax error

12; //Stope this setinterval function
// let num = 0
// function show (){
//     setInterval(function(){
//         console.log("Number")
//         console.log(num++)
//     },1000)
// }
// show()

// let num = 0;
// function show() {
//   setInterval(function () {
//     console.log("Number");
//     console.log(num++);

//     if (num > 5) {
//       clearInterval(id);
//     }
//   }, 1000);
// }
// show();

13; //Call this function By by using Window
// function show(){
//     console.log("Neel")
// }
// console.log(window.show)

// const FunName = "show"
// window[FunName]()

//Here we have one function and we have store in FunName
//As we know when we call function  gloablly it will store in window

14; //Chk innerchild function from where it invoke
// function grandparent() {
//   console.log("grandParent");
//   parent();
// }

// function parent() {
//   console.log("grandParent");
//   child();
// }

// function child() {
//   console.log("grandParent");
//   innerchild();
// }

// function innerchild() {
//   console.trace();
// }

// grandparent()

15;
// function test() {
//   try {
//     return 1;
//   } finally {
//     return 2;
//   }
// }

// const res = test()
// console.log(res)
//output will be 2 when you used try finally and if you return in block youget valueof finally but in try catch it wont

16;
// const show = (b,b)=>{
// }

// function test (a,a){
// }

//We wll get syntax error bkx we cannont use same argument in arrow function

17;
// function test (a,a){
//     console.log(a)
// }

// test(5)
//You will get undefined bkz you passed two arument but 1 when you invokeyou passed one parameter
//Even if you passed two paramete you wll get one value

18;
// function JS(){
//     console.log("Hii")
// }

// console.log(JS.name)

//output will be JS with the help of name we can get function name

19; //Call show fun without using moon

// function show(){
//     console.log("Hii neel")
// }

// new show

20;
// function a() {
//   var var1 = 2,
//     var2 = 3;
// }

// function b(){
//     var var1 = var2 =1
// }

// a()
// console.log(var1,var2)
// b()
// console.log(var2)
//we will get reference error
// in b function var2 is undefined function so it will store in global scope hence it return 1

21; // Fixed a bug of Absent
// function showMessage(marks){
//     const message = marks || "Absent"
//     console.log(`marks ${message}`)
// }

// showMessage(44)
// showMessage(0)
// showMessage(60)
// replace || with ?? it means null coellcing it will chk if left hand side it is null or undefine than only it will run Absent

// function showMessage(marks){
//     const message = marks ?? "Absent"
//     console.log(`marks ${message}`)
// }

// showMessage(44)
// showMessage(0)
// showMessage(60)

22;
// const add = (x) => (y) => (z) => {
//   console.log(x, y, z);
//   console.log(x + y + z);
// };

// function add(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// add(10)(10)(10);

23;
// let bool1 = false
// let bool2 = new Boolean(false)

// if(bool1){
//     console.log("Fisrt Block")
// }

// if(bool2){
//     console.log("Second Block")
// }
//bool 2 data type is object and object in javascript having true value and in if argument if he false value it willnot return

24;
// we passed false argument in local storage still we getting You passed fix this bug
// localStorage.setItem("pass", false);

// let ispass = localStorage.getItem("pass");

// if(ispass){
//     console.log("You passed")
// }else{
//     console.log("You will passed")
// }

// so you have to metion in your if statment that it should not equal to false
// localStorage.setItem("pass", false);

// let ispass = localStorage.getItem("pass");
// console.log(ispass);

// if (ispass !== "false") {
//   console.log("You passed");
// } else {
//   console.log("You will passed");
// }

25;
// let randomkey = {name:"neel"}
// randomkey = 23

// if(!randomkey === String){
//     console.log("It is not a string")
// }else{
//     console.log("It is a string")
// }

//random key type is number but when we put not now we are comoareing false === string

26;
// const list = [1,2]

// if(list.indexOf(1)){
//     console.log("We have 1")
// }else{
//     console.log("Error")
// }

//Error will occur bkz in argument we are getting 0 hence 0 is false value

27;
// const data = new Array(100)

// for(let i=0;i<data.length;i++){
//     console.log(i)
// }

//here we have array and we are running for loop and we are chking on each iteration array length to make it right
//put data.length in variable and use it eg. const len = data.length

28; //Find a bug
// function sum(num) {
//   var result = 0;
//   for (var i = 0; i <= num.length; i++) {
//     result = result + num[i]
//   }
//   return result
// }

// var numbers = [1,2,3,4]
// console.log(sum(numbers))
//Here as we know when we count array length it start from 0 and we use for loop in that we say i value must be equal or lesser but our i value is 4 and our argument is value 3  hence we haveto put -1
// function sum(num) {
//     var result = 0;
//     for (var i = 0; i <= num.length -1; i++) {
//       result = result + num[i]
//     }
//     return result
//   }

//   var numbers = [1,2,3,4]
//   console.log(sum(numbers))

29;
// function sum(x,y,z){
//     return x+y+z
// }
// console.log(sum(...[1,2,3]))

30;
// const arr = [{id:1,name:"Neel"},{id:2,name:"Ashok"},{id:3,name:"Samel"}]

// const res = arr.find(chk) || {}

// function chk(data){
//     return data.id === 2
// }

// console.log(res)

//When wever you use find function pass one default value {}

31;
// let data = [1,2,3].map(num=>{
//     if(typeof num === 'number') return
//     return num *2
// })
// console.log(data)
//answer will be undefined

32;
// [1,2,3].map(num=>{
//     if(num > 0) return

//     return num * 2
// })

// answer will be undefiner because we jzt return we didnt define what shouldbe return

33;
// let count = 0
// let num = [0,1,2,3]

// num.forEach(num=>{
//   if(num){
//     count = count + 1
//   }
// })
// console.log(count)

34;
// (function(x){
//     return(function(y){
//         console.log(x)
//     })(2)
// })(1)

35;
// function task () {
//     return new Promise((res)=>{
//         res("data")
//     })
// }

// const result = task().then()
// console.log(result)

36;
// console.log(1);

// new Promise((res)=> {
//   console.log(2);
// });

// console.log(3);

//we have created one promise and passed some arguments
//we havent invoke the promise still it return bkz when we callback func inside promise
//Promise constructor call  argument call internally byhimself

37;
// const anomynous = function test () {
//     console.log("Hii neel")
// }

// test()
//This function is knowas anomynous function here we have call function iside the variable and we will able call this function inside block and than intialize with ariable name

38;
// async function getData() {
//     return await Promise.resolve("Solved")
// }

// const data = getData()
// console.log(data)

//output will be Promise pending because when we use asynch and promise than it is mandatory to apply then and return that value

// data.then(res=>console.log(res))

39;
// console.log("A");
// (async function () {
//   let x = await 5;
//   console.log("C");
// })();
// console.log("B");
//When ever we write code after await It goes to MicroTask Queue And it get Executed when Main Stack will remain Empty hence C will print at last
//If we remove wait C will print on 2nd element

40
// setTimeout(() => {
//   console.log("1");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("2");
// });

// queueMicrotask(() => {
//   console.log("3");
// });

// console.log("4")
//here as we know settimeout run after all the code executed hence setimeout will store in MicroTask Queue
//Promise will also store in MicroTask Queue as well as queueMicrotask

41
// setTimeout(() => {
//   console.log("Neel samel");
// }, Infinity);

// setTimeout(() => {
//   console.log("Neel samel");
// }, 2147483647);

// console.log(Math.pow(2, 32) / 2 - 1);
//By using 2 power 32 and divide by 2 and put -1 you will get the number put in the place of infinity your messafe wont print

42
// let x = [typeof x,typeof y]
// console.log(x)
//You will get the error Cannot access 'x' before initialization
//bkx here it will compare from right to left
//and we have declare variable by using let and by using let we wont be able to hoist
//But if we use var instead of let it will work f9 but still it will say undefine

43
// console.log(a)
// var a;
//Answer will undefined because we dint gave any value to variable and even if we put value in variable still answer will undefined because we print after declaring variable.

44
// const a = ()=> console.log("neel")
// const b = ()=> setTimeout(()=>{console.log("last")})
// const c = ()=> console.log("neha")
// a()
// b()
// c()
//out will be neel neha last last print on last becaus we use settimeout

45
// function getage() {
//     'use strict';
//     age:23
//     console.log(age)
// }
// getage()
//output will be age is not define because we use use strict method

46
//Print 3 3times using for loop
// for(var x=0; x < 3 ; x++){
//     setTimeout(()=> console.log(x))
// }

47
// let a = "Neel"
// setTimeout(()=>{
//     console.warn(a)
// },0)
//  a ="neha"
//output will be neha bkz whenever we run settimeout it takes all values than gives output overhere it takes first neek than neha and it return final value that is neha

48
// function fruits(){
//     console.log(a)
//     console.log(b)

//     var a = "apple"
//     let b = "orange"
// }
// fruits()
//It will undefine and error bkz var dont have any proble wether you declare before print or after but let says first declare than print

49
// let name = "neel"

// function chK(){
//     console.log(name)
//     let name = "neha"
// }
// chK()

//here there will be an error  Cannot access 'name' before initialization bkz let and const cannot be declare before variable.