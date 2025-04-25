function setup() { //設定函數, 設定初始值的地方
    ///建立依照視窗高度和寬度的畫布
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360 , 100 ,100 ); // 設定顏色模式為 HSB
    background(202,240,248)
}

function draw() {
    background(220);
    //畫圓的顏色為#D2A2CC(淺紫色)
    fill(color(300, 21, 97)); // 使用 HSB 顏色模式

    //移除最上方的連續圓形
    //畫線的顏色為#6C3365(淺紫色)
    stroke(color(300, 53, 40)); // 使用 HSB 顏色模式
    //邊框粗度為3
    strokeWeight(3);
    
    //移除中心的方形
    // rectMode(CENTER); //設定方框的模式為中心
    // rect(width/2, height/2, 200, 200);

    //畫從左排列到右的圓與方形，大小隨滑鼠的 x 座標變化，圓形在上方
    for (let y = 0; y <= height; y += 30 + mouseY / 20) { // 調整步進值以增加圖形數量
        for (let x = 0; x <= width; x += 30 + mouseX / 20) { // 調整步進值以增加圖形數量
            fill(color(120, 100, 100)); // 使用 HSB 顏色模式設定方形的顏色
            rect(x, y, mouseX / 10, mouseX / 10); //畫方形，大小隨滑鼠 x 座標變化
            fill(color(300, 21, 80)); // 使用 HSB 顏色模式設定圓的顏色
            ellipse(x + mouseX / 20, y + mouseY / 20, mouseX / 10, mouseX / 10); //畫圓，大小隨滑鼠 x 座標變化，並保持重疊
        }
    }

    // 新增多行從左到右的圓與方形，直到填滿畫面
    for (let y = 30 + mouseY / 20; y <= height; y += 30 + mouseY / 20) {
        for (let x = 0; x <= width; x += 30 + mouseX / 20) {
            fill(color(120, 100, 100));
            rect(x, y, mouseX / 10, mouseX / 10);
            fill(color(300, 21, 80));
            ellipse(x + mouseX / 20, y + mouseY / 20, mouseX / 10, mouseX / 10);
        }
    }

    // 繼續新增多行從左到右的圓與方形，直到填滿畫面
    for (let y = 60 + mouseY / 20; y <= height; y += 30 + mouseY / 20) {
        for (let x = 0; x <= width; x += 30 + mouseX / 20) {
            fill(color(120, 100, 100));
            rect(x, y, mouseX / 10, mouseX / 10);
            fill(color(300, 21, 80));
            ellipse(x + mouseX / 20, y + mouseY / 20, mouseX / 10, mouseX / 10);
        }
    }
}