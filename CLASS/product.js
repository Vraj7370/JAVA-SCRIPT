const changeTheme =()=>{

    const bodyTag = document.getElementsByTagName('body')[0];//<body></body>
    //console.log(bodyTag);
    bodyTag.style.backgroundColor = 'white';

    const productCard = document.getElementsByClassName('product-card');//<div></div>
    // console.log(productCard[0]);
    // console.log(productCard[1]);
    // console.log(productCard[2]);

    // productCard[0].style.backgroundColor = 'black';
    // productCard[1].style.backgroundColor = 'black';
    // productCard[2].style.backgroundColor = 'black';
    
    
    const productCardH3 = document.getElementsByTagName('h3');//<h3></h3>
    //console.log(productCardH3);
    
    const productCardP = document.getElementsByTagName('p');//<p></p>
    //console.log(productCardP);
    
    


    for(let i=0;i<productCard.length;i++){
        productCard[i].style.backgroundColor = 'black';
    }

    for(let i=0;i<productCardH3.length;i++){
        productCardH3[i].style.color = 'white';
    }
    
    for(let i=0;i<productCardP.length;i++){
        productCardP[i].style.color = 'white';
    }


}