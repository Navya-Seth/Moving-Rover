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
    if (keypress == 38){
        up();
        console.log("up");
    }

    if (keypress == 40){
        down();
        console.log("down");
    }

    if (keypress == 37){
        left();
        console.log("left");
    }

    if (keypress == 39){
        right();
        console.log("right");
    }


}

window.addEventListener("keydown",mykeydown);

function up(){
    if (rover_y >= 0){
        rover_y = rover_y-10;
        console.log("When Up Arrow Is Pressed , X = "+ rover_x + "Y = " + rover_y);
        upload_backround();
        upload_rower();
    }
}

function down(){
    if (rover_y <=500){
        rover_y = rover_y+10;
        console.log("When Down Arrow Is Pressed , X = "+ rover_x + "Y = " + rover_y);
        upload_backround();
        upload_rower();
    }
}

function left(){
    if (rover_x >= 0){
        rover_x = rover_x-10;
        console.log("When Left Arrow Is Pressed , X = "+ rover_x + "Y = " + rover_y);
        upload_backround();
        upload_rower();
    }
}

function right(){
    if (rover_x <= 700){
        rover_x = rover_x+10;
        console.log("When Right Arrow Is Pressed , X = "+ rover_x + "Y = " + rover_y);
        upload_backround();
        upload_rower();
    }
}





