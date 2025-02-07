const apple = ()=>
{
    console.log("you can buy iphone 15 pro");
}

const samsung = ()=>
{
    console.log("you can buy s23");
}

const oneplus = ()=>
{
    console.log("you can buy 12r");
}

const buy = (cb)=>
{
    cb()
}

var salary = 150000

if(salary>100000 && salary<180000 )
{
    buy(apple)
}

if(salary>50000 && salary<90000 )
{
    buy(samsung)
}

if(salary>10000 && salary<50000 )
{
    buy(oneplus)
}



