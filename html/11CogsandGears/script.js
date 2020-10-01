const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let cog, angle;

img = new Image();

img.src = "images/cog.png";

angle = 0.1;
Yangle = 0.1;

img.addEventListener("load",()=>
{
  setInterval(animate,10);
})


function animate()
{
  context.clearRect(0,0,width,height);

  context.save();
  context.translate(320,150);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
  angle += 0.01;

  context.save();
  context.translate(140,150);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
  Yangle += -0.01;

  context.save();
  context.translate(230,150);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(230,240);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(230,330);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(230,420);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
  
}