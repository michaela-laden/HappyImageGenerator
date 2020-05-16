
var ranImage = new Array();
ranImage = ["imgs/img_01.jpg","imgs/img_02.jpg", "imgs/img_03.jpg", "imgs/img_04.jpg", "imgs/img_05.jpg", "imgs/img_06.jpg", "imgs/img_07.jpg", "imgs/img_08.jpg", "imgs/img_09.jpg",
"imgs/img_10.jpg", "imgs/img_11.jpg", "imgs/img_12.jpg", "imgs/img_13.jpg", "imgs/img_15.jpg", "imgs/img_16.jpg", "imgs/img_17.jpg", "imgs/img_18.jpg", 
"imgs/img_19.jpg", "imgs/img_20.jpg", "imgs/img_21.jpg"];

function getRandomCuteImage(){
    var number = Math.floor(Math.random()*ranImage.length);
    document.getElementById('imageDisplay').innerHTML=('<img src="'+ranImage[number]+'"/>');
}

