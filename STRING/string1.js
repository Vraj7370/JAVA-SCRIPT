var user = "amit" //string declaration
//string stores data in array:
//a=0,m=1,i=2,t=3
console.log(user) // amit
console.log(user[0]) //a
console.log(user[1]) //m
console.log(user[2]) //i
console.log(user[3]) //t

//mutablity and immutablity

//js string is immutable

user[0]="A"
console.log(user) //amit

//concatenation
user = user + " is a good"
//user+=" is a good"
console.log(user) // // amit is a good


var len = user.length
console.log(len) //14


user = user.toUpperCase()
console.log(user) // AMIT IS A GOOD

user = user.toLowerCase()
console.log(user) // amit is a good

// ------------------------------------------

var x = user.charAt(5)
console.log(x) //i

var ind = user.indexOf("i")
console.log(ind) //2

var ind1 = user.lastIndexOf("i")
console.log(ind1) //5

var ind2= user.indexOf("i",4)
console.log(ind2) //5   