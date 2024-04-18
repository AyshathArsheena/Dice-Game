const random1=Math.floor(((Math.random())*6)+1);
console.log(random1);
const random2=Math.floor(((Math.random())*6)+1);
console.log(random2);
const random1Src= "images/dice"+ random1+".png";
const random2Src="images/dice"+ random2+".png";
console.log(random1Src);
console.log(random2Src);
document.querySelector(".img1").setAttribute("src",random1Src);
document.querySelector(".img2").setAttribute("src",random2Src);

if(random1===random2){
    document.querySelector("h1").innerHTML="Draw"
}
else if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else {
    document.querySelector("h1").innerHTML="Player 2 wins"
}