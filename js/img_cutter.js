function cutter(){
    let coor_img = document.getElementById('main_img').getBoundingClientRect();
    let coor_div1 = document.getElementById('mydiv1').getBoundingClientRect();
    let coor_div2 = document.getElementById('mydiv2').getBoundingClientRect();
    
    var img = document.getElementById('main_img');
    var rwidth = img.naturalWidth;
    var rheight = img.naturalHeight;

    var width = img.width;
    var height = img.height;

    //Ajustment of coordinates to (0,0) of the imgage
    coor_div1.top = coor_div1.top - coor_img.top;
    coor_div1.left = coor_div1.left - coor_img.left;

    coor_div2.top = coor_div2.top - coor_img.top;
    coor_div2.left = coor_div2.left - coor_img.left;

    //Convertion of coordinates and size of boxes to real picture size

    coor_div1.top = (coor_div1.top*rheight)/height;
    coor_div1.left = (coor_div1.left*rwidth)/width;
    coor_div1.height = (coor_div1.height*rheight)/height;
    coor_div1.width = (coor_div1.width*rwidth)/width;

    coor_div2.top = (coor_div2.top*rheight)/height;
    coor_div2.left = (coor_div2.left*rwidth)/width;
    coor_div2.height = (coor_div2.height*rheight)/height;
    coor_div2.width = (coor_div2.width*rwidth)/width;

    var div1 = [coor_div1.left, coor_div1.top, coor_div1.left + coor_div1.width, coor_div1.top + coor_div1.height];
    var div2 = [coor_div2.left, coor_div2.top, coor_div2.left + coor_div2.width, coor_div2.top + coor_div2.height];
    




    
    window.location.href = "process_cut.php?coords=" + div1[0] +" "+ div1[1] +" "+ div1[2] +" "+ div1[3] +" "+ div2[0] +" "+ div2[1] +" "+ div2[2] +" "+ div2[3];


}