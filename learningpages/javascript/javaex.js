// function to add one element everytime it is called
var out=[];
var i=0;
function fizzbuz()
{
    i++;
    if(i%3==0)
        {
            if(i%5==0)
                out.push("fizzbuzz");
            else
                out.push("fizz");
        } 
        else
        if(i%5==0)
            out.push("buzz");
        else  
            out.push(i);
    console.log(out);
}