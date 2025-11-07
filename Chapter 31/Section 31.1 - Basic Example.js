// Canvas 1 - Red background with text
const ctx1 = document.getElementById("myCanvas").getContext("2d");
ctx1.fillStyle = "#f00";
ctx1.fillRect(0, 0, ctx1.canvas.width, ctx1.canvas.height);
ctx1.fillStyle = "#fff";
ctx1.font = "16px Arial";
ctx1.fillText("My red canvas with white text", 30, 70);

// Canvas 2 - Circle
const ctx2 = document.getElementById("circleCanvas").getContext("2d");
ctx2.beginPath();
ctx2.arc(150, 75, 50, 0, 2 * Math.PI);
ctx2.fillStyle = "#00bcd4";
ctx2.fill();
ctx2.strokeStyle = "#00796b";
ctx2.lineWidth = 3;
ctx2.stroke();
ctx2.fillStyle = "#000";
ctx2.fillText("Circle Example", 90, 140);

// Canvas 3 - Gradient
const ctx3 = document.getElementById("gradientCanvas").getContext("2d");
const gradient = ctx3.createLinearGradient(0, 0, 300, 0);
gradient.addColorStop(0, "#ff7e5f");
gradient.addColorStop(1, "#feb47b");
ctx3.fillStyle = gradient;
ctx3.fillRect(0, 0, 300, 150);
ctx3.fillStyle = "#000";
ctx3.font = "16px Arial";
ctx3.fillText("Gradient Background", 70, 80);

// Canvas 4 - Pattern (Rectangles)
const ctx4 = document.getElementById("patternCanvas").getContext("2d");
for (let x = 0; x < 300; x += 40) {
  for (let y = 0; y < 150; y += 40) {
    ctx4.fillStyle = (x + y) % 80 === 0 ? "#ff5722" : "#4caf50";
    ctx4.fillRect(x, y, 40, 40);
  }
}
ctx4.fillStyle = "#fff";
ctx4.font = "16px Arial";
ctx4.fillText("Pattern Grid Example", 60, 140);
