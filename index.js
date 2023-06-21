// document.querySelector(".drum").setAttribute("background-color",green);

document.querySelectorAll(".drum")[0].addEventListener("click",function ()
{
//  alert("hi");
addAnimation(this.innerHTML);
   var audio=new Audio('./tom-1.mp3');
   audio.play(); 
//    this.
});
document.querySelectorAll(".drum")[1].addEventListener("click",function ()
{

    addAnimation(this.innerHTML);

    var audio=new Audio('./tom-2.mp3');
   audio.play(); 
//  alert("hi");
});
document.querySelectorAll(".drum")[2].addEventListener("click",function ()
{
addAnimation(this.innerHTML);

    var audio=new Audio('./tom-3.mp3');
   audio.play(); 
//  alert("hi");
});
document.querySelectorAll(".drum")[3].addEventListener("click",function ()
{

addAnimation(this.innerHTML);

    var audio=new Audio('./tom-4.mp3');
   audio.play(); 
//  alert("hi");
});
document.querySelectorAll(".drum")[4].addEventListener("click",function ()
{

addAnimation(this.innerHTML);

    var audio=new Audio('./snare.mp3');
   audio.play(); 
//  alert("hi");
});
document.querySelectorAll(".drum")[5].addEventListener("click",function ()
{

addAnimation(this.innerHTML);

    var audio=new Audio('./crash.mp3');
   audio.play(); 
//  alert("hi");
});
document.querySelectorAll(".drum")[6].addEventListener("click",function ()
{

addAnimation(this.innerHTML);

    var audio=new Audio('./kick-bass.mp3');
   audio.play(); 
//  alert("hi");
});


// var x=document.querySelectorAll(".drum").length;
// for(var i=0;i<x;i++)
// {
    document.addEventListener("keypress",function(event)
    {

        addAnimation(event.key);
        switch(event.key)
        {
            case "w":
                var audio=new Audio('./tom-1.mp3');
                audio.play(); 
            break;
            case "a":
                var audio=new Audio('./tom-2.mp3');
                audio.play(); 

            break;
            case "s":
                var audio=new Audio('./tom-3.mp3');
                audio.play(); 

            break;
            case "d":
                var audio=new Audio('./tom-4.mp3');
                audio.play(); 

            break;
            case "j":
                var audio=new Audio('./snare.mp3');
                audio.play(); 


            break;
            case "k":
                var audio=new Audio('./crash.mp3');
                audio.play(); 

            break;
            case "l":
                var audio=new Audio('./kick-bass.mp3');
                audio.play(); 

            break;
        }

    });


    function addAnimation(character)
    {
        document.querySelector("."+character).classList.add("pressed");
        setTimeout(function()
        {
            document.querySelector("."+character).classList.remove("pressed");
        },90);
    }

