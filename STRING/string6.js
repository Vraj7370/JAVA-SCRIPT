// var user = "AMIT"

// user = user.toLowerCase()
// console.log(user)

// var user = "amit"

// user = user.toUpperCase()
// console.log(user)

var fname = "deep"
var upperName = "";

for (let i=0;i<fname.length;i++)
{
    if(fname.charCodeAt(i) >= 97 && fname.charCodeAt(i) <= 122) 
    {
        upperName = upperName + String. fromCharCode (fname.charCodeAt(i)-32);
    }
        
    else
    {
        upperName = upperName + fname[i];
    }
        
}       
console. log(upperName); 


var xname = "DEEP"
var LowerName = "";

for (let i=0;i<xname.length;i++)
{
    if(xname.charCodeAt (i) >= 65 && xname.charCodeAt(i) <=90)
    {
        LowerName = LowerName + String. fromCharCode (xname.charCodeAt(i)+32);
    }   
    else
    {
        LowerName = LowerName + xname[i];
    }

}
console. log(LowerName);

