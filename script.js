//Canvas example step 1
const canvas=document.getElementById('myCanvas');
const ctx=canvas.getContext('2d');

//Canvas example step 2
//draw a rectangle
ctx.fillStyle='red';
ctx.fillRect(50,50,100,100);

//Draw a circle

ctx.beginPath();
ctx.arc(200,200,50,0,2*Math.PI);
ctx.fillStyle='blue';
ctx.fill();

//Canvas example step 3
let x=0;
function draw()
{
    //clear the Canvas

    ctx.clearRect(0,0,canvas.width,canvas.height);

    //draw the rectangle
    ctx.fillStyle='green';
    ctx.fillRect(x,300,50,50);

    //move the rectangle
    x+=1;
    if(x>canvas.width)
    {
        x=-50;
    }
    //request the next frame
    requestAnimationFrame(draw);

}
draw();
