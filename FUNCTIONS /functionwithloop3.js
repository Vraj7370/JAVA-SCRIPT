function getfact(no)
{   
    let fact=1
   
    for(let i=1;i<=no;i++)
    {   
        fact=fact*i;
    }

    return fact;
    
}

var ans1 = getfact(5);
console.log("ans1 = ",ans1);