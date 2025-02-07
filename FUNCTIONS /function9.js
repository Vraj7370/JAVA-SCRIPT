// Q(12)get sp and ep from user (10,33) : need to find count of even nos bw sp and ep

let sp,ep;
let count=0;
function evenNumber(sp,ep)
{
    
    for(let i=sp;i<=ep;i++)
    {
        if(i%2==0)
        {
            count++;
            console.log(i);
        }
          
    }
    return count;
}

var  no = evenNumber(1,10);
console.log("count =" ,no);