const odi = ()=>
{
    console.log("best score in odi match");
}

const t20 = ()=>
{
    console.log("best score in t20 match");
}

const test = ()=>
{
    console.log("best score in test match");
}

const format = (cb)=>
{
    cb()
}

var score = 520

if(score>230 && score<270)
{
    format(t20)
}

else if(score>300 && score<350)
{
    format(odi)
}

else if(score>500 && score<600)
{
    format(test)
}

