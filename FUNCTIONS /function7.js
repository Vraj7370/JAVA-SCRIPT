//age = 21

function checkEligibility(age)
{
    if(age>=18)
    {
        return true
    }

    else
    {
        return false
    }
}

var alg1 = checkEligibility(21)
console.log(alg1)

if(alg1 == true)
{
    console.log("you are eligibile to vote")
}

else
{
    console.log("you are not eligibile to vote")
}


var alg2 = checkEligibility(17)

if(alg2 == true)
{
    console.log("you are eligibile to vote")
}

else
{
    console.log("you are not eligibile to vote")
}

// //if function return type is boolean then we can directly use the function in if condition



if(checkEligibility(55))
{
    console.log("You are eligible to vote")
}

else
{
    console.log("You are not eligible to vote")
}


