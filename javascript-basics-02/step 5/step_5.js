var images = document.querySelectorAll('#image1, #image2, #image3, #image4, #image5');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover",function () {
        this.src = "images/image" + (i+1) +"_2.jpg";
    }) 
}