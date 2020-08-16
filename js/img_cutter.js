function cutter(){
    let coor_img = document.getElementById('mydiv1').getBoundingClientRect();
    let coor_div1 = document.getElementById('mydiv1').getBoundingClientRect();
    let coor_div2 = document.getElementById('mydiv1').getBoundingClientRect();
    


    xmlhttp.open("POST", "process_cut.php", true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("course_id="+courseCount + "&url="+encodedURL);




}