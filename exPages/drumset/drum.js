// for(i=0;i<7;i++)
//     {
//         document.querySelectorAll("button")[i].addEventListener("click",handleClick);
//     }

//or


var n=document.querySelectorAll(".drum").length
for(i=0;i<n;i++)
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var c=this.classList[0];
        keytomusic(c);
    });

document.addEventListener('keypress',function(event)
{
    var c=event.key;
    keytomusic(c);
});

function keytomusic(c){
    switch(c)
        {
            case 'w':
            var aud=new Audio('./sounds/crash.mp3');
            aud.play();
            break;
            case 'a':
            var aud=new Audio('./sounds/kick-bass.mp3');
            aud.play();
            break;case 's':
            var aud=new Audio('./sounds/snare.mp3');
            aud.play();
            break;case 'd':
            var aud=new Audio('./sounds/tom-1.mp3');
            aud.play();
            break;case 'j':
            var aud=new Audio('./sounds/tom-2.mp3');
            aud.play();
            break;case 'k':
            var aud=new Audio('./sounds/tom-3.mp3');
            aud.play();
            break;case 'l':
            var aud=new Audio('./sounds/tom-4.mp3');
            aud.play();
            break;
        }
}