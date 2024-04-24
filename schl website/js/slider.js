
var arr=['img/slider1.jpeg','img/slider2.jpeg','img/slider3.webp','img/slider4.webp'];
var i=0;
function slider(){
    document.getElementById("myimage").src=arr[i]
    i++
    if(i>2)
    {
        i=0
    }
}
setInterval(slider,2000);