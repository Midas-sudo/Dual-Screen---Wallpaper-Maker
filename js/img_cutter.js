function cutter(){
    let coor_div1_height = document.getElementById('mydiv1').getBoundingClientRect().height;
    let coor_div2_height = document.getElementById('mydiv2').getBoundingClientRect().height;
    let coor_div1_width = document.getElementById('mydiv1').getBoundingClientRect().width;
    let coor_div2_width = document.getElementById('mydiv2').getBoundingClientRect().width;

    
    let coor_img = $("#main_img").position();
    let coor_div1 = $('#mydiv1').position();
    let coor_div2 = $('#mydiv2').position();

    var img = document.getElementById('main_img');



    
    var rwidth = img.naturalWidth;
    var rheight = img.naturalHeight;

    var width = img.width;
    var height = img.height;

    console.log(rwidth, width, coor_div1_width, coor_div2_width);

    //Ajustment of coordinates to (0,0) of the imgage
    coor_div1.top = coor_div1.top - coor_img.top;
    coor_div1.left = coor_div1.left - coor_img.left;

    coor_div2.top = coor_div2.top - coor_img.top;
    coor_div2.left = coor_div2.left - coor_img.left;

    //Convertion of coordinates and size of boxes to real picture size

    coor_div1.top = (coor_div1.top*rheight)/height;
    coor_div1.left = (coor_div1.left*rwidth)/width;
    var div1_height = (coor_div1_height*rheight)/height;
    var div1_width = (coor_div1_width*rwidth)/width;

    coor_div2.top = (coor_div2.top*rheight)/height;
    coor_div2.left = (coor_div2.left*rwidth)/width;
    var div2_height = (coor_div2_height*rheight)/height;
    var div2_width = (coor_div2_width*rwidth)/width;




    var div1 = [coor_div1.left, coor_div1.top, coor_div1.left + div1_width, coor_div1.top + div1_height];
    var div2 = [coor_div2.left, coor_div2.top, coor_div2.left + div2_width, coor_div2.top + div2_height];
    




    
    window.location.href = "process_cut.php?coords=" + div1[0] +" "+ div1[1] +" "+ div1[2] +" "+ div1[3] +" "+ div2[0] +" "+ div2[1] +" "+ div2[2] +" "+ div2[3];


}