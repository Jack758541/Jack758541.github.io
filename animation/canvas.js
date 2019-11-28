var c = document.getElementById('test');
var t = c.getContext('2d');
t.imageSmoothingEnabled = false;
c.setAttribute('width', window.innerWidth * window.devicePixelRatio);
c.setAttribute('height', window.innerHeight * window.devicePixelRatio);

var width = c.width;
var height = c.height;
var request; //animation
var speed = 0; //設定速度
var end = {'x':100, 'y':100};
var savePic;
var newX;
var newY;
var chip = new Image();
chip.src = 'B_01.svg';

//canvas 點擊動畫
function animate(){

    request = requestAnimationFrame(animate);
    draw();
}

function draw(){
    t.clearRect(0, 0, width, height);

    let x = width * 0.1; //起點的X座標
    let y = height * 0.85; //起點的Y座標
    
    speed += 0.1;
    
    if(speed > 1) speed = 1;
    
    t.beginPath();
    
    newX = x + (end.x - x) * speed;
    newY = y + (end.y - y) * speed;

    t.drawImage(chip, newX, newY, 50, 50);
    
    if(newX === end.x && newY === end.y){
        cancelAnimationFrame(request);
        request = null;
        speed = 0;
    }

}

//moving;
c.addEventListener('click',function(event){

    end.x = event.offsetX * window.devicePixelRatio;
    end.y = event.offsetY * window.devicePixelRatio;
    animate();
})