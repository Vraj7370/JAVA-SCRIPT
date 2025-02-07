var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:false
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"ajay",
                age:35,
                gender:"male",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"parth",
                age:39,
                gender:"male",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]


// 1. print all department names

var departmentnames = departments.map((depa)=>
{
    return depa.name
})
console.log(departmentnames)



// 2. find female employee from finance department

var financeemp = departments.find((depa)=>{
    return depa.name === "Finance"
}).employees.filter((depa)=>{
    return depa.gender === "female"
})
console.log(financeemp)



// 3. find male and active employee from it department

var financeemp = departments.find((depa)=>{
    return depa.name === "IT"
}).employees.filter((depa)=>{
    return depa.gender === "male" || depa.isActive === true
})
console.log(financeemp)



// 4. find all inactive employee from it department

var financeemp = departments.find((depa)=>{
    return depa.name === "IT"
}).employees.filter((depa)=>{
    return depa.isActive === false
})
console.log(financeemp)




