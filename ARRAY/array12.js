var marks = [67,89,78,66,45]

var newmarks=[]

// for(let i=0;i<marks.length;i++){

//     if(marks[i]>=70){
//         newmarks.push(marks[i])
//     }
// }

// var newmarks = marks.filter((m)=>
// {
//     return m>=70;
// })

var newmarks = marks.filter((m)=>m>=70)
console.log(newmarks);



var data = ["ram","shyam","hari","kishan"]
var newData1 = data.filter((d)=>
{
    return d.length>4
})
console.log(newData1);



var data1 = ["naman", "madam", "racecar", "level"];
function reverseString(str) 
{  
  var revstr = "";
  for (let i = str.length - 1; i >= 0; i--)
  {   
    revstr = revstr + str[i];     
  }


  if (str == revstr) 
  {  
    return true;
  } 
  else 
  {  
    return false;
  }
}

var palindromeName = data1.filter((d)=>
{
    return reverseString(d)
})
console.log(palindromeName);




