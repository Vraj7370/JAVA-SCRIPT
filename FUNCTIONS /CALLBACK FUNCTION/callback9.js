const petrol = ()=>
{
    console.log("petrol give lowest milage.");
}

const diesel = ()=>
{
    console.log("diesel give better milage than petrol.");
}

const cng = ()=>
{
    console.log("cng give highest milage.");
}

const fueltype = (cb)=>
{
    cb()
}

var milage = 27

if(milage>20 && milage<25)
{
    fueltype(diesel)
}

if(milage>14 && milage<19)
{
    fueltype(petrol)
}

if(milage>26 && milage<30)
{
    fueltype(cng)
}