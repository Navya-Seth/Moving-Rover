canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 
rover_width = 100;
rover_hight = 90;
rover_x = 10;
rover_y = 10;
background_image = "mars.jpg";
rover_image  = "rover.png";

function add(){
    background_imgtag = new Image();
    background_imgtag.onload = upload_backround;
    background_imgtag.src = background_image;

    rower_imgtag = new Image();
    rower_imgtag.onload = upload_rower;
    rower_imgtag.src = rover_image;
}

function upload_backround(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function upload_rower(){
    ctx.drawImage(rower_imgtag,rover_x,rover_y,rover_width,rover_hight);
    
}

function mykeydown(e){
    keypress = e.keyCode;
    console.log(keypress);
}

window.addEventListener("keydown",mykeydown);




