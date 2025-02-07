const yokohama = ()=>
{
    console.log("yokohama is italian brand");
}

const apollo = ()=>
{
    console.log("apollo is indian brand");
}

const bridgeston = ()=>
{
    console.log("bridgestone is japanese brand");
}

const brand = (cb)=>
{
    cb()
}

var age = 54000

if(age>50000 && age<60000)
{
    brand(yokohama)
}

if(age>30000 && age<38000)
{
    brand(apollo)
}

if(age>40000 && age<48000)
{
    brand(bridgeston)
}