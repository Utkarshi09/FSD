const startbutton=document.getElementById("startButton")
const id1=document.getElementById("search")
const submit=document.getElementById("submit")
const imageContainer = document.getElementById("imageContainer");
const numberinput=document.getElementById("numberInput")

startbutton.addEventListener("click",function(){
    id1.style.display="block";
    startbutton.style.display="none";
})
submit.addEventListener("click",function(){
    const value = numberinput.value;
    console.log(value);
    
    for(i=0;i<value;i++)
        {
            const img=document.createElement('img');
            img.src="offblub.png";
            console.log(img);
            img.style.width = "100px"; 
            img.style.margin = "5px";
            imageContainer.appendChild(img); 
        }
    })