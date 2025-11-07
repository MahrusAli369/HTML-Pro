// #1 Example - Two Rectangles
window.onload = function () {
  const canvas1 = document.getElementById("rectCanvas");
  const ctx1 = canvas1.getContext("2d");

  ctx1.fillStyle = "red";
  ctx1.fillRect(0, 0, 100, 100);

  ctx1.fillStyle = "green";
  ctx1.fillRect(25, 25, 50, 50);

  ctx1.fillStyle = "black";
  ctx1.font = "16px Arial";
  ctx1.fillText("Two Rectangles", 90, 180);

  // #2 Example - Circle
  const ctx2 = document.getElementById("circleCanvas").getContext("2d");
  ctx2.beginPath();
  ctx2.arc(150, 100, 60, 0, 2 * Math.PI);
  ctx2.fillStyle = "#2196f3";
  ctx2.fill();
  ctx2.strokeStyle = "#0d47a1";
  ctx2.lineWidth = 4;
  ctx2.stroke();
  ctx2.fillStyle = "#000";
  ctx2.font = "16px Arial";
  ctx2.fillText("Blue Circle", 110, 180);

  // #3 Example - Triangle
  const ctx3 = document.getElementById("triangleCanvas").getContext("2d");
  ctx3.beginPath();
  ctx3.moveTo(150, 20);
  ctx3.lineTo(280, 180);
  ctx3.lineTo(20, 180);
  ctx3.closePath();
  ctx3.fillStyle = "#ff9800";
  ctx3.fill();
  ctx3.strokeStyle = "#e65100";
  ctx3.lineWidth = 3;
  ctx3.stroke();
  ctx3.fillStyle = "#000";
  ctx3.fillText("Triangle Example", 90, 190);

  // #4 Example - Gradient Background
  const ctx4 = document.getElementById("gradientCanvas").getContext("2d");
  const gradient = ctx4.createLinearGradient(0, 0, 300, 200);
  gradient.addColorStop(0, "#00c853");
  gradient.addColorStop(1, "#b2ff59");
  ctx4.fillStyle = gradient;
  ctx4.fillRect(0, 0, 300, 200);

  ctx4.fillStyle = "#000";
  ctx4.font = "16px Arial";
  ctx4.fillText("Gradient Canvas", 90, 180);
};
