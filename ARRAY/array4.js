var data = ["java","hindi","python","english","cpp"]

//var isAvail= data.includes("hindi");
//var isAvail= data.includes("cpp",2);
//console.log("isAvail",isAvail)

var flag= false;
var index = -1;
for(let i=0;i<data.length;i++)
{

    if(data[i].toLowerCase()=="HinDi".toLowerCase())
    {
        //console.log("hindi is available in array")
        flag=true;
        index=i;//1
        break;
    }

}

console.log("flag",flag)
console.log("index",index)