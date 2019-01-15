var context = document.querySelector("canvas").getContext("2d");

// square
context.beginPath();
context.moveTo(25, 25);
context.lineTo(175, 25);
context.lineTo(175, 175);
context.lineTo(25, 175);
context.closePath();
context.strokeStyle = "green";
context.stroke();

// circle
context.beginPath();
context.arc(700, 100, 75, 0, Math.PI*2, true);
context.closePath();
context.strokeStyle = "red";
context.stroke();

// triangle
context.beginPath();
context.moveTo(25, 420);
context.lineTo(150, 575);
context.lineTo(225, 450);
context.closePath();
context.strokeStyle = "blue";
context.stroke();

// rectangle
context.beginPath();
context.moveTo(525, 455);
context.lineTo(775, 455);
context.lineTo(775, 575);
context.lineTo(525, 575);
context.closePath();
context.strokeStyle = "orange";
context.stroke();