
function greetUser(name){
    
    if(name === "" || name.trim()===""){
        return "Hello Guest"
    }else{
        return ` Hello ${name}`
    }
}







let name = prompt("Enter your Name ")
let res = greetUser(name)
console.log(res)