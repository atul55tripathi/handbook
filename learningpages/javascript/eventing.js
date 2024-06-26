const clicker=document.getElementById("clickhoga");
clicker.addEventListener("click",clickHandler);
function clickHandler(){
    clicker.style.color="red";
}
function doggy(name,age,owner)
{
    this.name=name;
    this.age=age;
    this.owner=owner;
    this.bark=function(){
        alert("bow bow");
    }
}

var orry=new doggy("kalu",2,"peelu");
document.addEventListener('keypress',function(event){
    console.log(event.key);
})