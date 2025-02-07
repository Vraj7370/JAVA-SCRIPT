var products = [
    {
        id:101,
        name:"iphone 15",
        price:50000,
        color:"black",
        isAvailable:true
    },
    {
        id:102,
        name:"samsung",
        price:40000,
        color:"white",
        isAvailable:true
    },
    {
        id:103,
        name:"nokia",
        price:30000,
        color:"black",
        isAvailable:false
    },
    {
        id:104,
        name:"iphone 12 pro",
        price:60000,
        color:"black",
        isAvailable:true
    }
]

// questions:

//1) finda all products price greater than 40000
//2) find all products color is black
//3)find all unavailable products
//3)find all unavailable products having price greater than or equal 30000

// answer:

// for(let i=0;i<products.length;i++)
// {
//     if(products[i].price>40000)
//     {
//         console.log(products[i]);
//     }
// }

// for(let i=0;i<products.length;i++)
// {
//     if(products[i].color==="black")
//     {
//         console.log(products[i]);
//     }
// }

// for(let i=0;i<products.length;i++)
// {
//     if(products[i].isAvailable === false)
//     {
//         console.log(products[i]);
//     }
// }

for(let i=0;i<products.length;i++)
{
    if(products[i].isAvailable === false && products[i].price >= 30000)
    {
        console.log(products[i]);
    }
}