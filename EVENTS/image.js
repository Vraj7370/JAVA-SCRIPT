const imagesArray = ["free fire.jpeg","hc.jpeg","ss.jpeg","coc.jpeg","bgmi.jpeg"]


const getImage = ()=>{
    const randomIndex = Math.floor(Math.random() *imagesArray.length)
    // console.log(randomIndex)
    // console.log(imagesArray[randomIndex])
    const myimage = document.getElementById("myimage")
    //console.log(myimage)
    myimage.src =  imagesArray[randomIndex]
}