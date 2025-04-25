let circles = []; // 儲存圓的位置和顏色

function setup() { //設定函數, 設定初始值的地方
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); // 設定顏色模式為 HSB
}

function draw() {
  background(220);
  
  let hue = map(mouseX, 0, width, 0, 360); // 根據滑鼠 x 座標計算色相
  let brightness = map(mouseY, 0, height, 0, 100); // 根據滑鼠 y 座標計算亮度
  
  let circle = {
    x: mouseX,
    y: mouseY,
    hue: hue,
    brightness: brightness,
    timestamp: millis() // 記錄圓的時間戳記
  };
  
  circles.push(circle); // 添加新的圓到陣列中
  
  // 移除超過5秒的圓
  circles = circles.filter(c => millis() - c.timestamp <= 5000);
  
  noStroke(); // 移除圓的邊框
  
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].hue, 100, circles[i].brightness); // 設定圓的顏色
    ellipse(circles[i].x, circles[i].y, 300, 300); // 畫圓，寬高為300px
  }
}