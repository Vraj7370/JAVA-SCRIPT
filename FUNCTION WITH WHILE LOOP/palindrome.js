function ispalindromeno(no)
{   
    let temp = 0;
    let rev  = 0;
    let rem = no;

    while(no>0)
    {
        temp = no % 10;
        rev = (rev*10) + temp;
        no = Math.floor(no/10);
    }

    console.log("rev = ",rev)

    if(rem == rev)
    {
       // console.log("palindrome no")
       return true
    }
    else
    {
        //console.log("Not palindrome no")
        return false
    }
}

if(ispalindromeno(121))
{
    console.log("palindrome no")
}
else
{
    console.log("Not palindrome no")
}

if(ispalindromeno(184))
{
    console.log("palindrome no")
}
else
{
    console.log("Not palindrome no")
}


