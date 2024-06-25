// for(i=0;i<7;i++)
//     {
//         document.querySelectorAll("button")[i].addEventListener("click",handleClick);
//     }

//or
var aud=new Audio('./sounds/crash.mp3');
var n=document.querySelectorAll(".drum").length
for(i=0;i<n;i++)
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        console.log(this.classList[0]);
        this.style.color="white";
    });
