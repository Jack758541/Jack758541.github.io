var c = document.getElementById('test');
var t = c.getContext('2d');
t.imageSmoothingEnabled = false;
c.setAttribute('width', window.innerWidth);
c.setAttribute('height', window.innerHeight);

var width = c.width;
var height = c.height;
var request; //animation
var speed = 0; //設定速度
var start = {'x':100, 'y':900};
var end = {'x':100, 'y':100};
var savePic;
var newX;
var newY;
//canvas 點擊動畫
function animate(){
    t.clearRect(0, 0, width, height);
    //t.putImageData(savePic, 40 ,50);
    request = requestAnimationFrame(animate);

    draw();
}

function draw(){
    if(!speed==0)
        t.putImageData(savePic, newX, newY);
    var chip = new Image();
    chip.src = 'B_01.svg';

    this.x = start.x; //起點的X座標
    this.y = start.y; //起點的Y座標
    
    speed += 0.1;
    
    if(speed > 1) speed = 1;
    
    t.beginPath();
    
    newX = start.x + (end.x - start.x) * speed;
    newY = start.y + (end.y - start.y) * speed;
  
    //t.arc(newX, newY, 15, 0, Math.PI * 2, false);
    chip.onload = function(){
        t.drawImage(chip, newX, newY, 50, 50);
        savePic = t.getImageData(newX, newY, 50, 50);
    }
    //t.stroke();

    if(newX === end.x && newY === end.y){
        cancelAnimationFrame(request);
        request = null;
        speed = 0;
        //t.clearRect(0, 0, width, height);
        t.drawImage(chip, newX, newY, 50, 50);
    }

}

//moving;
c.addEventListener('click',function(event){
    //t.clearRect(0, 0, width, height);
    end.x = event.clientX;
    end.y = event.clientY;
    animate();
})