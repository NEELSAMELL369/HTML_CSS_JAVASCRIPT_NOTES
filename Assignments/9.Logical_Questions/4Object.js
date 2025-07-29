1;
// function superhero() {
//   this.hero = "Hanuman";

//   return { hero: "Lord" };
// }
// const output = new superhero();
// console.log(output);

//Here we have construction object It will return Lord bkz
//When We invoke any function with new keyword and if we dont give any explicity than it will come this value
//and if we give explicity it will return that value

2;
// const data = {name:"neel"}
// console.log(delete data.name)
// console.log(data)
//output will be True bkz we delete obj property.

3;
// const data = {name:"neel"}
// console.log(delete data)
// console.log(data)
//output will be False bkz we delete obj and you cant delete obj.

4; //What will be the output
// let data = {fname:"neel",age:23}
// let info = {city:"om"}
// data = {data,...info}
// console.log(data)

5; //In two object there is ad key and value of same what will be result

// let data = {fname:"neel",age:23}
// let info = {lname:'samel',age:25}
// data = {...data,...info}
// console.log(data)
//key will take 1st position and value will take second position

6;
// let person = {name : "neel"}
// Object.seal(person)

// person.age = 23
// person.name="neelu"
// console.log(person)
// so here output will be neelu now always remembe when you apply seal on obj after that you cannot add new literals and you can modified only literals which are declare.

7;
//const box = {x:10,y:20}
// Object.freeze(box)

// const Shape = box
// box.x = 30
// Shape.y = 50

// console.log(box)

//Here we have one object with keysand values then we applied freeze method on object and put box object into shape and then we change value of obj and add new key and value
//output will be same bkx after applying freeze value wont be cange nor you can add new key

8;
// let data = "student"

// const person = {
//     student : "neel"
// }

// console.log(person.student)
// console.log(person[data])
// console.log(person["student"])

// console.log(person.data)

// Answer will be neel neel neel undefined we call in this 3 ways but last one is wrong method to call object

9;
// function age(...args) {
//   console.log(typeof args);
// }
// age(22);

//output will be object bkz we are asking type of spread operator

10;
// const person = {
//     name:"neel",
//     age : 23
// }
// for(let items of person){
//     console.log(items)
// }
//output will name and age

11;
// const obje = {1:"a",2:"b",3:"c"}
// console.log(obje.hasOwnProperty("1"))
// console.log(obje.hasOwnProperty(1))

12;
// function car(){
//     this.make = 'audi'
//     return {make:"bmw"}
// }

// const mycar = new car()
// console.log(mycar.make)

13;
// let c = { greeting: "Hey" };
// let d;

// d = c;
// c.greeting = "Hello"
// console.log(d.greeting)

14;
// const income = {
//   skills: 12,
//   monthly() {
//     return this.skills * 2;
//   },
//   yearly: () => this.skills * 2,
// };

// console.log(income.monthly());
// console.log(income.yearly());

//First one will give 24 bkz when we use function in object this refer to its parent scope but when we call arrow function this refer to widowscope

15;
// const A = {};
// const B = { key: "b" };
// const C = { key: "c" };

// A[B] = 123
// A[C] = 456

// console.log(A[B])
//object is trying to convert into string but it will not hence it return [object Object]
//a[object Object] = 123
//a[object Object] = 456
//hence when we trying to assign B as a key in A object same we apply for C but C value will replace B value hence we will get 456

17;
// const func = ((a)=>{
//     delete a
//     return a
// })(5)

// console.log(func)

//here we call iffi and we are passing 5 value to param(a) and it will return 5
//delete keyword wont work bkz a is local variable and delete keyword delete from the object it will not work in inside object

18;
// const user = {
//   name: "sonu",
//   age: 24,
//   fullname() {
//     const nestedarrow = () => console.log(this.name);
//     nestedarrow();
//   },
// };

// user.fullname()
//As we know when we call this using arrow function  than this will refer to globalscope to make it local we create fun in arrow fun and callback it inside itself

19;
// const key = "constructor"
// const obj = {}

// if(obj[key]){
//     console.log("Key Exist")
// }else{
//     console.log("Key not found")
// }

// if(key in obj){
//     console.log("Key Exist")
// }else{
//     console.log("Key not found")
// }

//Here we have one Empty Obj when we are lookin construtor in empty Obj
//We can see Object is Empty still it is showing key is exist bkz as we in Object there is one moreobject known as prototpe and in prototype there is onekey knowas contructor hence it we found key.
//There is onemethod to chk key exist in object that is obj.hasOwnProperty(key)

20;
// const animals = {}
// let dog = {emoji:'🐕‍🦺'}
// let cat = {emoji:'🦊'}

// animals[dog] = {...dog,name:"Bull_dog"}
// animals[cat] = {...cat,name:"Simbha"}

// console.log(animals[dog])

// In Object key are string and if other data types will also convert into string
//When we add dog and cat in object we add with the help of key when we use it covert into string eg. dog will become object Object same gose to cat hence same key cannont exist so he pick 2nd value

21;
// const {fname:Name} = {fname:"Neel"}
// console.log(Name)

//Here we have two object we are destructuring on right hand side we are extracting neel from the object
//on left hand side we have rename fname to Name

22;
// const student = {
//     10:"Purnima"
// }

// student.20 = "krushnai"

// console.log(student)
//Here we have one object and we are trying to put new key and value.
//key is in number we wont able to use key as a number from outside of obj
//inside obj we use number as a key but it convert that number key intostring hence there will be no error
//Correct way to add key and value is student[20] = "krushnai"

23;
// let isPass = false;
// console.log(isPass.randomKey);
// console.log(isPass.constructor);

//Here we are calling variabel of false
//first it will convertin following ways new Boolean(isPass).randomkey now as we know theere in one prototype in object so random key doesnt exist hence it will return undefine and constructor it will return fun

24;
// const obj  = {name:"X"}
// delete obj.name
// obj.name = "Y"
// console.log(obj)

25;
// console.log(`${{Object}}`)
// //Output will be object object

// const obj = {}
// obj.Object = ()=>{}
// console.log(obj.toString())
//First wetake empty Object
//Second we have one key name as Object and we say who values is function
//And than we conve obj tostring

26;
// const user = {name:"neel",age:25}
// const admin = {admin:true,...user}
// console.log(admin)

27;
// console.log(person)
// class person{

// }

28;
// const myfunc = ({x,y,z})=>{
//     console.log(x,y,z)
// }

// myfunc(1,2,3)

29;
// function init (x,y,z) {}

// function end (a,b=3,c) {}

// console.log(init.length)
// console.log(end.length)

//As we know length property look for argument and if we set any arguments than it will return that value which we have set

30;
// const shape = {
//   radius: 10,
//   daimeter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.daimeter());
// console.log(shape.perimeter());

//As we know Arrow function in object refer global scope hence when we call radius it start looking in window instead of localscope and we get NAN

31;
// const obj = {}
// obj[obj["a"] = "B"] = "C"

// console.log(obj)

32;
// let x = (y = {});
// y.name = "Neel";
// console.log(x.name);

33;
// const {a="d",b="d",c="d",d="d",e="d"} = {a:null,b:undefined,c:false,d:0}
// console.log({a,b,c,d,e})

//Here we have destruction the value d stands for default on right handside we have add some values to the key all will run with their keys only undeined will replace with default

34;
// function changeAgeAndReference(person) {
//   person = {
//     name: "neel",
//     age: 25,
//   };
//   return person;
// }

// const person1 = {
//   name: "sonu",
//   age: 24,
// };

// const person2 = changeAgeAndReference(person1);

// console.log(person1);
// console.log(person2);

35;
// const x = {};

// x.__proto__.h1 = 10;

// console.log(x.h1, x);
// Object.prototype.h1 = ++x.h1;

// console.log(x.h1, x);
// console.log(x.h1 + Object.keys(x).length);

36;
// const dataMap = new WeakMap()

// let Person = { Name: "neel" };
// dataMap.set(Person,"Neha")

// console.log(dataMap.get(Person))
// Person = null
// console.log(dataMap.get(Person))

//In we Weakmap we can use Object as a key
//but if we set Obj null than jascript will assume WeakMap as a garbage

37;
// const obj = {}

// Object.defineProperty(obj,"a",{value:"char",enumerable:true})

// console.log(obj.a)
// console.log(Object.keys(obj))

//In javascript when we create key by using defineProperty they are non enumerable
//when we add keys in obj we wont able to see in loop or normal method.
//enumerable it will help to execute object keys

38
// const obj = Object.create(null);
// const keytoCheck = "randomkey";

// if (obj.hasOwnProperty(keytoCheck)) {
//   console.log("KeyFound");
// } else {
//   console.log("Key Not Found");
// }


//First we have create on empty obj and in empty object we wont abltto apply method hasOwnProperty
//Use Object and than apply methodhasOwn
// const obj = Object.create(null);
// const keytoCheck = "randomkey";

// if (Object.hasOwn(keytoCheck)) {
//   console.log("KeyFound");
// } else {
//   console.log("Key Not Found");
// }

39
// const a = { fn: function () {} };
// const b = [function () {}];

// const strA = JSON.stringify(a);
// const strB = JSON.stringify(b);

// console.log(strA);
// console.log(strB);

//output will be {} bkz empty function in object will ignore
//output will be [null] bkz empty function in array convert empty function into null
























56; //Create function to freeze all keys nad then changed nedted key
// const obj = {
//   name: "Neel",
//   surname: {
//     lastname: "Samel",
//   },
// };

// function freeze(val) {
//   Object.keys(val).forEach((key) => {
//     if (typeof val[key] === "object") {
//       freeze(val[key]);
//     }
//   });
// }
// freeze(obj);

// obj.surname.lastname = "Sinha";
// console.log(obj);
//As we know if we apply freeze on object we wont able to change the code but we can change value nested key



