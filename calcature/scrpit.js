let button=document.querySelectorAll("button");
let display=document.querySelectorAll("input");
let cal=document.querySelectorAll(".cal");



let buttonArray=Array.from(button);

let string="";
buttonArray.forEach(function(e){
    e.addEventListener("click",function(e){
        if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            display[0].value=string;
        }else if(e.target.innerHTML=="AC"){
            string="";
            display[0].value=string;        }
            else if(e.target.innerHTML=="="){
                string=eval(string);
                display[0].value=string;
            }
        
        else{
            string+=e.target.innerHTML;
            display[0].value=string;
        }
    })
})





