let arr = [24,13,12,18,21];

// (1) even data from array

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     {
//         console.log(arr[i])
//     }
// }

let newdata1 = arr.filter((m)=>
{
    return m%2==0;
})
console.log(newdata1);


// (2) odd data from array

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2!=0)
//     {
//         console.log(arr[i])
//     }
// }

let newdata2 = arr.filter((m)=>
{
    return m%2!=0;
})
console.log(newdata2);


// (3) palindrome number from array

let palin = [121,34,67,66,55,434];





// (4) startwith 'a' and endswith 'i'

let names=["abhi","ali","raj","hetvi"];

let newname = names.filter((v)=>
{
    return v.startsWith("a") && v.endsWith("i");
})
console.log(newname)















