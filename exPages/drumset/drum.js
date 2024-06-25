// for(i=0;i<7;i++)
//     {
//         document.querySelectorAll("button")[i].addEventListener("click",handleClick);
//     }

//or
var n=document.querySelectorAll(".drum").length
for(i=0;i<n;i++)
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
function handleClick(){
    alert("i got clicked");
}