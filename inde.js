const button= document.getElementById("button"); 

let body= document.body;

button.addEventListener("click",()=>{
    let red= Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    let blue= Math.floor(Math.random()*256);
    body.style.backgroundColor= `rgb(${red},${green},${blue})`
    document.getElementById("rgbDescription").innerHTML=`rgb(${red},${green},${blue})`
})



