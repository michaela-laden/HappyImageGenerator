

var ranImage = new Array();
ranImage = ["imgs/img_01.jpg","imgs/img_02.jpg", "imgs/img_03.jpg", "imgs/img_04.jpg", "imgs/img_06.jpg", "imgs/img_07.jpg", "imgs/img_08.jpg", "imgs/img_09.jpg",
"imgs/img_10.jpg", "imgs/img_11.jpg", "imgs/img_12.jpg", "imgs/img_13.jpg", "imgs/img_15.jpg", "imgs/img_16.jpg", "imgs/img_17.jpg", "imgs/img_18.jpg", 
"imgs/img_19.jpg", "imgs/img_20.jpg", "imgs/img_21.jpg"];

var ranQuote = new Array();
ranQuote = ['"People say nothing is impossible, but I do nothing every day"', '"If I were two-faced, would I be wearing this one"', '"The best thing about the future is that it comes one day at a time"',
'"The difference between stupidity and genius is that genius has its limits"', '"At every party there are two kinds of people – those who want to go home and those who don’t. The trouble is, they are usually married to each other"',
'"All you need in this life is ignorance and confidence, and then success is sure."','"Luck is what you have left over after you give 100 percent."' ];

var ranMeme = new Array();
ranMeme = ["This is a funny meme"];

function getRandomCuteImage(){
    document.getElementById('textDisplay').innerHTML="";
    var number = Math.floor(Math.random()*ranImage.length);
    document.getElementById('imageDisplay').innerHTML=('<img src="'+ranImage[number]+'"/>');
}

function getRandomQuote(){
    document.getElementById('imageDisplay').innerHTML="";
    var number = Math.floor(Math.random()*ranQuote.length);
    document.getElementById('textDisplay').innerHTML=(ranQuote[number]);

}

function getRandomMeme(){
    document.getElementById('imageDisplay').innerHTML="";
    var number = Math.floor(Math.random()*ranMeme.length);
    document.getElementById('textDisplay').innerHTML=(ranMeme[number]);

}
