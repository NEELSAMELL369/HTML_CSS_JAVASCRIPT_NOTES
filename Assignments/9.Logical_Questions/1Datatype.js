//**********************************BOOLEAN******************************************

1; //what will be the output

// let result = false || {} || 20 || null
// console.log(result)

//it will and object bkz when we use || first it will always look for positive value now it take obj bkz obj comes before

2; //what will be the output
// let result = false || null || ""
// console.log(result)
//answer will be "" now "" is negative value but when we dont get any positive value it take last value

3; //what will be the output

// let result = true || [] || {}
// console.log(result)

//answer will be true bkz as we told that it look for positive value as well as he will take any 1st positive value.

4;
// console.log('😋 === 😋')
// answer will be true bkx we are comparing unicode behind emoji

5; //Change boolean value into false
// let data = "true"
// console.log(!data)

6;
// let data = "false"
// console.log(!!data)
// //take two not it will change value in true

7;
// console.log(+true)
// console.log(typeof +true)
//Output will be 1 and type will be number bkz when we put + boolean change into number

8;
// console.log(!"neel")
// console.log(typeof("neel"))
// Output will be false adn string false is because we say not string it means so result is false

9;
// console.log(false == [])
// console.log(false == ![])
// console.log(""==[])

//first one output will be true bkz empty array conver to string(primative) than empty string conver to 0 and 0 is false value hence you have compare false and false

10;
// console.log([] === []);
// console.log({} === {});

// console.log([] == []);
// console.log({} == {});

//This condition will always return 'false' since JavaScript compares objects by reference, not value
//empty array having different location
//empty object having different location

11;
// console.log(!!null)
// console.log(!!1)
// console.log(!!"")

//null value is false you apply not it become true again u apply not again it become false same apply on string and number

12;
// const fname = "neel"
// const age = 23

// console.log(isNaN(fname))
// console.log(isNaN(age))
//first will be true bkz it ask weather fname is not a number so it say true
//second will be false bkz it is number

13;
// console.log(+false)
// console.log(+true)
// console.log(!"Neel")

14;
// console.log(null == 0);
// console.log(null > 0);
// console.log(null >= 0);
//here 3rd output will true bkz >= operator first conver to null into 0 than it will compare with =

15;
// console.log(-1 == 1);
// console.log(-1 === 1);
// console.log(-0 == 0);
// console.log(-0 === 0);
// console.log(Object.is(-0, 0))

//Object.is compares very well -0 and NaN
//== === will not compare properly

16;
//What will be the output
// const fname = "Neel samel"
// console.log(!typeof fname === "object")
// console.log(!typeof fname === "string")
//output will be false as we know in javascript operation works from left to right and he will retun first value which he get when we compare hence instead typeof or === it get not(!) and which is negatice value hence answrer will be false.

17;
// let a = "neeel"
// let b = `neeel`
// console.log(a===b)
//Answer will be true

18;
//console.log(typeof Neel)
// console.log(typeof new String(""))
// console.log(typeof String(""))
// console.log(typeof NaN)
// console.log(typeof typeof 1)

19;
// let str = new String("JS")

// console.log(str==="JS")
// console.log(str=="JS")

//first output will be false bkx str type is obj
//second output will br true because == fist chk data type if it is non premative it will conver into primative than it will compare value and str return JS hence JS == JS both are string

20;
// let str = "Neel";
// console.log(JSON.stringify(str))
// console.log(JSON.stringify(str) === str)
//When we apply JSON.strigify on str it will add some additional code hence when you campare str and Json.stringify it will return false

21
// let a = []
// let b = a
// console.log(a==b)
// console.log(a===b)
//Now here we take one array and we put that array in b so the location of array will be same hence answer will be true.

22;
// let a = [20]
// let b = [20]
// console.log(a[0]==b[0])
// console.log(a[0]===b[0])
//So here we take two array and pass two values and check their values are equal o not but if we had not use element for comparing values than answer would be false


23
// let a = 3
// let b = new Number(3)
// console.log(a==b)
// console.log(a===b)
//Answer will be true bkz here we are comparing number and second will be false bkz here we are comparing type and we assigned value in 3 in object




















//************************************NUMERICAL**************************************

1;
// chk given numbe is odd or even
// let a = 3
// let b = a%2
// console.log(b)

//output will be 0 so it is even number if output will be 1 than it is even

3;
// conole.log(3*3)
// conole.log(3**3)
// conole.log(3***3)
//3 one will give error there so such type any comand

4;
//What will be the output?
// let a = 22
// let A = 23
// console.log(a)

5;
// let a = 23
// let b = 22

// console.log(--a === b)
//Answer will be true because we minus a value by 1 by using decrement and it a value become 22

6;
// let a = 1
// let b = 1
// let c = 2
// console.log(a===b=== --c)
//Answer will be false because first we compare a and b which is in numeric value.when we compare a and b we get true than we compare true and c so basically we compare boollean and numerical so outcome false

7;
// console.log(a)
//Answer will be a is not defined now here we dint declare a variable

8;
// var x;
// var x = 10
// console.log(x)

9; // let x;
// var x = 10
// console.log(x)
//Erro will come it will say that you cannont redeclare in let

10;
// let a = 23
// console.log(b)
//out will be blank

11;
// function sum(a,b){
//     return a+b
// }

// console.log(sum(2,"2"))
//out will 22

12;
// let num = 1
// console.log(num++)
// console.log(++num)
// console.log(num)
//answer wil be  1 3 3 when we print first value was 2 but it dint show bkz we increment after print so it dint show and when we print on 2nd time 2 +1 become 3 and last one as usual

13;
// const sum = eval("10+10*2")
// console.log(sum)
//answer will be 30 because eval conver string into number.


14;
// const num = 2+2+"2"
// console.log(typeof num)
//Here it started addition from right to left so it wgot first valus string

15;
// console.log(typeof 2+2+"2")
//Here it started addition from left to right so and the beginning he got number

16;
// let num = 20
// console.log(num + "20")
// console.log(++num)

17;
// console.log(parseInt(("108")))
// console.log(parseInt(("108*33")))
// console.log(parseInt(("108neel")))
//Here 108 will get bkz parint help to get jzt a number remaing itwill discard

18;
// console.log(4 + "4")
// console.log(4 + +"4")

19;
// console.log(99["toString"].length + 1)
//Here we access tostring but we didnt invoke when we apply length method so it chk number of arguments

20;
// const num1 = Number(3)
// const num2 = Number()
// const num3 = Number(undefined)

// console.log(`num1 = ${num1}`)
// console.log(`num2 = ${num2}`)
// console.log(`num3 = ${num3}`)

//Number function says if argument is not passed assume zero
//In second we passed undefine in argument it will conver to number but it is not a numbe hence we recieved NaN

21;
// console.log(0 == "0")
// console.log(0 == [])
// console.log("0" == [])

//Output :- true bkz when we compare number with string with == than == will covert string into number
//whenwe compare number with array than == will convert non primitive into primative hence it will become string than == again convert empty string into number empty string means 0
//Here == againwill makenonprimitive into primitive [] will become "" and == equaly check only value hence "0" == "" will becomes false

22;
// const num1 = 100000
// const num2 = 10_0_0_00

// console.log(num1===num2)

//Here we will get true bkz both value are same
//In num2 we have use Es6 method known as numeric seprator we can seprate big number by using _

23;
// let age = "22"
// let validage = '22'

// age += 1
// validage++
// console.log(age)
// console.log(validage)

24;
// let num = 2
// let foo = !--num
// let boo = !--num

// console.log(foo)
// console.log(boo)

//In first when we applied negation num become 1 now we compare false and true hence we return false
//In second again we applied negation num become 0 we compare false and false hence we get true

25;
// function chk(){
//     return (()=> 1)()
// }
// console.log(typeof chk())
//answer will be number bkz we create arrow fun in fun and we retun there itself fun

26;
// function chk(){
//     return (()=> 1)
// }
// console.log(typeof chk)
//now type will be function bkz we dint call arrow function

27;
// function add(num) {
//     let n = Number(num)
//     n = n + 1
//     console.log(n)
// }
// add(2)

28// function sum(n1, n2 = n1) {
//   console.log(n1 + n2);
// }

// sum(10)

29;
// function sum(){
//     return 2+2
// }
// function sq(){
//     return 4*4
// }
// let a = (sum(),sq())
// console.log(a)

//In javascript we can evaluate multiple expression by using comma it will start from left to right



