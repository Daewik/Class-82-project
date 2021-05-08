var mouseevent= "empty";
var lpx;
var lpy;

var canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color='blue';
var width= 4;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
   var cpx=e.clientX-canvas.offsetLeft;
   var cpy=e.clientY-canvas.offsetTop;

  if(mouseevent=='mousedown')
  {
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width;
      ctx.arc(cpx,cpy,40,0,2*Math.PI);
      ctx.stroke();
  }
  lpx=cpx;
  lpy=cpy;

}