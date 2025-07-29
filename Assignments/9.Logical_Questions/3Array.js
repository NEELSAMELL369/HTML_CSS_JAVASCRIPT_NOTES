1;
// const num = [1,2,3]
// num[5] = 5
// console.log(num)

//we add element in array on 5 position inbetween we dint declare it will remain empty and direct it will print on 5th posion 5

2;
// const arr = [1,2,3,4]
// console.log(arr[5])

//output will be undefined

3;
// let data = ["neel","ashok","samel"]
// delete data[1]
// console.log(data)
//answer will be neel empty samel
// and if you check length it will be 3 because it is empty but you can add value over there

4;
// const array = [{Name:"Neel"},2,3]
// delete array[0]

// console.log(array.length,array)

5;
// const arr = [,,,]
// console.log(arr.length)

6;
// console.log([...[..."..."]].length)

7;
// let newlist = [2,3].push(4)
// console.log(newlist.push(5))

//as we know push method return total elements in array we cannont apply push method on integer newlist datatype is number

8;
// const data1 = ["C","B","A"]
// const data2 = ["Z","Y","X"]

// data1.reverse()
// data2.toReversed()

// console.log(data1)
// console.log(data2)
//toReversed is introduced in 2023 it will reversed the data but wont change the original data

9;
// const data1 = ["C", "B", "A"];
// const data2 = ["Z", "Y", "X"];

// data1.sort();
// data2.toSorted();

// console.log(data1);
// console.log(data2);
//toSorted is introduced in 2023 it will sort the data but wont change the modified orginal data

10;
// const score = [12,43,56,122]

// score.sort()
// console.log(score)
//When we use sort method it is use for string hence first it will convert number into string it will look only for 1st value

11;
// const cnt = ["neel","ashok","samel"]
// cnt.slice(0,1)
// console.log(cnt)

14;
// const set = new Set([1,2,3,4,5])
// console.log(set.has(1))
// console.log(set.has("1"))

15;
// const a = new Set([1,2,3,4,1,2,3,4])
// console.log(a)
//Out put will be 1234 bkz set remove duplicate values


18;
// let num = [1,2,3,]

// console.log(2 in num)
// console.log(3 in num)
//in method help in array tochk whether elemetn existor not

19;
// let a = [].every(()=>true)
// let b = [].every(()=>false)

// console.log(a)
// console.log(b)

23;
// console.log([[[[]]]])
//asnwer will be array 1 inside array 1 there will one more and so on till 3 and in th one there will be 0 element

24;
// let a = [1,2,3,4]
// let b = {name:"neel"}
// console.log(...a)
//So 3 dots is used when we have to use destructure and b is jzt to confuse no use of b variable over here

25;
// const num = [1,2,3]
// num[5] = num
// console.log(num)
//now it will become infine array

26;
// let user = {name:"Neel samel"}
// const userList = [user]
// user = null
// console.log(userList)
// console.log(user)

//Output will be ---- array in object bkz as we know aaray stores user value and then it comes null and second one will be null

27;
// function getItems(list,...args,moreitem){
//     console.log([...list,...args,moreitem])
// }

// getItems(["berry","apple"],"pear","kiwi")
//We can use rest operator at the last parameter

28;
//const [x, ...y] = [1, 2, 3, 4, 5];
//console.log({ x, y });
//here we put x = 1 and remaining we put in y by using rest operator

29;
// let num = [1,2]
// num.reduce((acc,next)=>{
//     console.log(acc)
//     console.log(next)
// })

//If we dint mention from where it will reduce than itwill start from left to righthence it start from 1


31;
// let r = [1,2,3,4,5][1,2]
// console.log(r)
//here we have expression which contain two array as we know it will reduce from left to right hence we will 5 and in next array it mention which element should be show it say 2 so on 2 there is value of 3 hence 3 is the output

32
// let num = 1
// const list = ["a","b","c"]
// console.log(list[num+=1])




