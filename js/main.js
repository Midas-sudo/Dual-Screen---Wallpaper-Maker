function boxes(){
    var img = document.getElementById('main_img');

    var rwidth = img.naturalWidth;
    var rheight = img.naturalHeight;

    var width = img.width;
    var height = img.height;

    console.log(width);
    console.log(rwidth);
    //Monitor 1 Settings

    var e = document.getElementById("monitor1");
    var monitor1_size = e.options[e.selectedIndex].value;

    var f = document.getElementById("monitor1-direction");
    var monitor1_direction = f.options[f.selectedIndex].value;

    var g = document.getElementById("monitor1-resolution");
    var monitor1_res = g.options[g.selectedIndex].value;
    //Monitor 2 Settings

    e = document.getElementById("monitor2");
    var monitor2_size = e.options[e.selectedIndex].value;

    f = document.getElementById("monitor2-direction");
    var monitor2_direction = f.options[f.selectedIndex].value;

    g = document.getElementById("monitor2-resolution");
    var monitor2_res = g.options[g.selectedIndex].value;

    e = document.getElementById("positions");
    var positions = e.options[e.selectedIndex].value;

    //Screen sizes
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;

    var w1 = 0;     //0-Default (landscape)
    var w2 = 0;     //1-Portrait


    switch (monitor1_res) {
        case "SD":
            x1 = 640;
            y1 = 480;
            break;
        case "HD":
            x1 = 1280;
            y1 = 720;
            break;
        case "FHD":
            x1 = 1920;
            y1 = 1080;
            break;
        case "QHD":
            x1 = 2560;
            y1 = 1440;
            break;
        case "4K":
            x1 = 3840;
            y1 = 2160;
            break;
        default:
            break;
    }

    switch (monitor2_res) {
        case "SD":
            x2 = 640;
            y2 = 480;
            break;
        case "HD":
            x2 = 1280;
            y2 = 720;
            break;
        case "FHD":
            x2 = 1920;
            y2 = 1080;
            break;
        case "QHD":
            x2 = 2560;
            y2 = 1440;
            break;
        case "4K":
            x2 = 3840;
            y2 = 2160;
            break;
        default:
            break;
    }

    if (monitor1_direction == "portrait"){
        var temp;
        temp = x1;
        x1 = y1;
        y1 = x1;
    }

    if (monitor2_direction == "portrait"){
        var temp;
        temp = x2;
        x2 = y2;
        y2 = temp;
    }

var smaller_img = 0;

    if((monitor1_direction == "landscape") && (monitor2_direction == "landscape")){

    }else if((monitor1_direction = "landscape") && (monitor2_direction == "portrait")){
        var total_w = x1 + x2;
        w2 = 1;
        if(total_w > rwidth && positions == "sidebyside"){
            alert("Original image width smaller than total with of both monitors side by side. \n One of the monitors will have a smaller resolution img then what is capable of.")
            smaller_img = 1;
        }


        if (monitor1_size > monitor2_size){
            one_bigger(w1, w2, x1, x2, y1, y2, smaller_img, rwidth, rheight, width, height, monitor1_size, monitor2_size);
        }else if (monitor1_size < monitor2_size){
    
        }else if (monitor1_size = monitor2_size){
    
        }
        
        
    }else if((monitor1_direction == "portrait") && (monitor2_direction =="landscape")){
        
    }else if((monitor1_direction == "portrait") && (monitor2_direction == "portrait")){
        
    }

}









function one_bigger(w1, w2, x1, x2, y1, y2, smaller_img, rwidth, rheight, width, height, monitor1_size, monitor2_size){
    if(smaller_img == 1){}


    var box_size_x2 = (width*x2)/rwidth;
    var box_size_y2 = (height*y2)/rheight;
 
    var dimensions1 = screen_size(monitor1_size);
    var dimensions2 = screen_size(monitor2_size);


    console.log(dimensions1);

    if(x1 == x2 || x1 == y2){
        var box_size_x1 = (dimensions1[0]*box_size_x2)/dimensions2[0];
        var box_size_y1 = (dimensions1[1]*box_size_y2)/dimensions2[1];
    }

    if(w1 != w2){
        var temp = box_size_x1;
        box_size_x1 = box_size_y2;
        box_size_y1 = temp;
    }


    document.getElementById("mydiv1").style.width = box_size_x1+"px"; 
    document.getElementById("mydiv1").style.height = box_size_y1+"px";
    document.getElementById("mydiv2").style.width = box_size_x2+"px"; 
    document.getElementById("mydiv2").style.height = box_size_y2+"px";  

    document.getElementById("mydiv1").style.display = "block";
    document.getElementById("mydiv2").style.display = "block"; 
}



function screen_size(monitor_size){
    var dimensions = [0, 0];
    console.log(monitor_size);
    switch (monitor_size) {
        case '24':
            dimensions[0] = 53.1;
            dimensions[1] = 29.9;
            console.log(dimensions);            
            break;
        case '25':
            dimensions[0] = 53.3;
            dimensions[1] = 31.1;     
            break;
        case '26':
            dimensions[0] = 57.6;
            dimensions[1] = 32.4;     
            break;
        case '27':
            dimensions[0] = 59.8;
            dimensions[1] = 33.6;     
            console.log(dimensions);
            break;
        default:
            break;
    }
    return dimensions;
}