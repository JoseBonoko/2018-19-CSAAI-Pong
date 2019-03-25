function main()
{
  console.log("Pong: Main: Start!")

  var canvas = document.getElementById('display')
  canvas.width = 600;
  canvas.height = 400;

  var ctx = canvas.getContext("2d");

  //-- Raquetas
  ctx.fillStyle = 'white';
  ctx.fillRect(40,50, 5, 40)
  ctx.fillRect(560, 200, 5, 40)
  ctx.fill()

  //-- Red
  ctx.moveTo(canvas.width/2,0);
  ctx.lineTo(canvas.width/2,canvas.height);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.stroke()

  //-- Bola
  ctx.beginPath()
  ctx.fillStyle = 'white';
  ctx.arc(250, 150, 3, 0, 2 * Math.PI)
  ctx.fill()

  //-- Texto
  ctx.font = "35px Arial";
  ctx.fillText("0",250,40)
  ctx.font = "35px Arial";
  ctx.fillText("0",350,40)
  ctx.fillStyle = 'white';
}
