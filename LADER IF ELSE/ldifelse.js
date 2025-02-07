var per = 12;

if(per>=90){
    console.log("Eligible for scholarship")
}
else if(per>=80){
    console.log("Eligible for admission + Partial sc ship")
}
else if(per>=70){
    console.log("Eligible for admission")
}
else{
    console.log("Not elgible for admission")
}


var time = 18

if(time >= 5 && time <12)
{
    console.log("GOOD MORNING")
}

else if(time >= 12 && time <18 )
{
    console.log("GOOD AFTERNOON")
}

else if(time >= 18 && time <=24 )
{
    console.log("GOOD EVENING")
}



var rating = 4;

if (rating >= 8 && rating <= 10)
{
    console.log("GOOD RATING");
}

else if (rating >= 5 && rating <= 7)
{
    console.log("AVERAGE RATING");
}

else if (rating >= 1 && rating <= 4)
{
    console.log("BAD RATING");
}



var salary = 40000;

var yearlysalary=salary*12
console.log(yearlysalary);

if(yearlysalary > 1000000)
{
    console.log("he | she elig for home loan")
}

else if(yearlysalary > 800000)
{
    console.log("he | she elig for car loan")
}

else if(yearlysalary > 500000)
{
    console.log("he | she elig for 2 wheeler loan")
}

else if(yearlysalary > 300000)
{
    console.log("he | she elig for credit loan")
}

