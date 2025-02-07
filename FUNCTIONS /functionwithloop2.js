function sumofdata(sp,ep)
{
    let sum = 0
    for(let i=sp;i<=ep;i++)
    {
        sum=sum+i
    }

    return sum;
}

var ans1 = sumofdata(1,10);
console.log("ans1 = ",ans1);

var ans2 = sumofdata(1,1000)
console.log("ans2 = ",ans2);



