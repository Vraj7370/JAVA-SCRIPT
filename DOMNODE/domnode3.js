const loadImage =()=>{

    var image = ["home.jpeg","mountain.jpeg","river.jpeg"]
    
    for(let i=0;i<image.length;i++)
    {
        const root = document.getElementById('root');
        const imageTag = document.createElement('img');
        imageTag.src ="mountain.jpeg"
        imageTag.src ="river.jpeg"
        imageTag.src ="home.jpeg"
        imageTag.style.width = "300px";
        imageTag.style.height = "300px";

        root.appendChild(imageTag);
    }

}