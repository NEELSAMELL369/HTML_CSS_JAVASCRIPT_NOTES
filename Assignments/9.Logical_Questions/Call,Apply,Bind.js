// const bird = {
//   name: "Sparrow",
// };

// const animal = {
//   name: "Lion",
// };

// function show() {
//   console.log(this.name);
// }

// const objshow = show.bind(bird);
// objshow.call(animal);
//Once we bind variable it wont change further


2
// const person = {name:"neel"}
// function detail(){
//     return this.name
// }
// console.log(detail.call(person))
// console.log(detail.bind(person))

//first will work properly but second one will return fun because bind say call me sepratly bind work is to join two values.

3
// const person = {
//     lang:"Js",
//     show: function (){
//         console.log(`Langauge ${this.lang}`)
//     }
// }

// const fn = person.show
// fn()

//Here we have are calling function in window contex
//now call in correct context to call object is
// p.call(person)

4
// function test(){
//     console.log(typeof this)
// }
// test.call()

//Here we have call call method and if we call any function with call method than it will conver into object

5
// const age = 10;

// var person = {
//   name: "Neel",
//   age: 25,
//   getage: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 25 };
// console.log(person.getage.call(person2));

3
// const handler = {
//   set: (target, property, value) =>
//     console.log("Add new Property", target, property, value),

//   get: (target, property) =>
//     console.log("Access new Property", target, property),
// };

// const person = new Proxy({},handler)

// person.name = "Neel"
// person.name
//Here we create oneobject using proxy method than we add(set) key and values and then we get that key
//Proxy method we used to detect any kind of changed in obj
//In set method we get 3 arguments target, property, value
//In get method we get 2 arguments target, property,

4; //Call Object without using parenthesis
// const obj = {
//     show: function () {
//     console.log("Neel Samel")
//   },
// };

// obj.show``
// new obj.show
//third way---- use getter fun get show(){}

5
// const age = 10;

// var person = {
//   name: "Neel",
//   age: 25,
//   getage: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 25 };
// console.log(person.getage.call(this));

6
// const obj = {};

// const set1 = new Set();
// const set2 = new Set();

// set1.add(obj);
// set1.add(obj);

// set2.add({});
// set2.add({});

// console.log(set1.size);
// console.log(set2.size);

//In set 1 adding in reference object
//In set 2  Adding in different Object