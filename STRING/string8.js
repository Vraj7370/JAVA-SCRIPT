var x = "java"

var s = x.search("a") //1
console.log(s);

var ns = x.substring(0,2) //ja
console.log(ns);

x = x.replace("a","A")
console.log(x); //jAva

var flag = x.includes("jA") //true
console.log(flag);

var flag = x.endsWith("c") //false
console.log(flag);

var flag = x.startsWith("j") //true
console.log(flag);

x = x.valueOf() //jAva
console.log(x);