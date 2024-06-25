let x= Math.floor(Math.random() * 6)  +1;       // was not taking floor function
let y= Math.floor(Math.random() * 6)  +1;

document.querySelectorAll("img")[0].setAttribute("src","./diceImg/dice"+x+".png");
document.querySelectorAll("img")[1].setAttribute("src","./diceImg/dice"+y+".png");

if(x>y)
    {
        document.querySelector("h1").innerHTML="winner-> Player 1";
    }
    else if(x<y)
        {
            document.querySelector("h1").innerHTML="winner-> Player 2";
        }
        else{
            document.querySelector("h1").innerHTML="its a draw";
        }