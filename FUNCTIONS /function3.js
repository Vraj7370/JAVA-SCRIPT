//with arguments without return type

function checkAge(age){

    if(age<=18){
        console.log("You are a minor")
    }
    else{
        console.log("You are a major")
    }
}
checkAge(100)

function findMax(a,b,c){

    if(a>b && a>c){
        console.log("a is max ",a)
    }
    else if(b>a && b>c){
        console.log("b is max ",b)
    }
    else{
        console.log("c is max ",c)
    }
}
findMax(10,100,70)

function findmin(a,b,c){

    if(a<b && a<c){
        console.log("a is min ",a)
    }
    else if(b<a && b<c){
        console.log("b is min ",b)
    }
    else{
        console.log("c is min ",c)
    }
}
findmin(110,100,140)

