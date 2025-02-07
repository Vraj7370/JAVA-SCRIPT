const submitHandler =(event)=>
{
    event.preventDefault(); // Prevents the default action of the form
    console.log("Form Submitted");
    
    const name = document.getElementById("name")//<input type="text" id="name">
    // console.log("name = ",name.value);

    const email = document.getElementById("email")//<input type="email" id="email">
    // console.log("email = ",email.value);

    const country = document.getElementById("country")//<select id="country
    // console.log("country = ",country.value);
    
    const gender = document.getElementsByName("gender")//inputfemale intputmale
    for(let i=0;i<gender.length;i++)
    {

        if(gender[i].checked)
        {
            console.log("gender = ",gender[i].value)
        }
    }

    const color = document.getElementById("color")
    // console.log("color = ",color.value);

    const nameresult = document.getElementById("nameResult")
    nameresult.innerHTML = name.value;
    const emailresult = document.getElementById("emailResult")
    emailresult.innerHTML = email.value;
    const countryresult = document.getElementById("countryResult")
    countryresult.innerHTML = country.value

    const result = document.getElementById("result")//<div>
    result.style.display = "block";//display:block
    //result.style.backgroundColor = "lightgrey";
    result.style.backgroundColor = color.value;
    result.style.padding = "10px";
    result.style.margin = "10px";
    result.style.border = "1px solid black";


    
}