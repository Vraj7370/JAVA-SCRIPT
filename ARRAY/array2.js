var users = ["ram","shyam","hari","sita","gita","rita"];
console.log(users)

//end...
var nlen = users.push("pramod") //it will add element at the end of the array //Appends new elements to the end of an array, and returns the new length of the array.
console.log("after adding 1 elm new len = ",nlen)
console.log(users)

//start...
var nlen2 = users.unshift("krishna")//Inserts new elements at the start of an array, and returns the new length of the array.
console.log("after adding 1 elm new len = ",nlen2)
console.log(users)

//--------------------------- remove...................................

//end...
var removedElm = users.pop()//Removes the last element of an array, and returns that element.
console.log("removed element = ",removedElm)
console.log(users)

//start...
removedElm = users.shift()//Removes the first element of an array, and returns that element.
console.log("removed element = ",removedElm)
console.log(users)