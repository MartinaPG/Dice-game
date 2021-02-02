function diceRoll(){
  let player1=document.querySelector(".play1").value;
  let player2=document.querySelector(".play2").value;
  let randomNum1=Math.floor((Math.random()*6)+1);
  let randomNum2=Math.floor((Math.random()*6)+1);
  if(player1!=="" && player2!==""){
    document.querySelector(".img1").src="images/dice" + randomNum1 + ".png";
    document.querySelector(".img2").src="images/dice" + randomNum2 + ".png";
    document.querySelector(".btn1").innerHTML="";
    document.querySelector(".restart").style.visibility="visible";
    document.querySelector(".btn").innerHTML="Again!";


  }
  else{
      document.querySelector(".btn1").innerHTML="Insert name for both players";

  }
  if(player1!=="" && player2!==""){
  if(randomNum1>randomNum2){
    document.querySelector(".win").innerHTML=(player1.slice(0,1)).toUpperCase()+(player1.slice(1,player1.length).toLowerCase()) + " is the winner!";
  }
  else if(randomNum1<randomNum2){
    document.querySelector(".win").innerHTML=(player2.slice(0,1)).toUpperCase()+(player2.slice(1,player2.length).toLowerCase()) + " is the winner!";
  }
  else{
    document.querySelector(".win").innerHTML="Draw!";
  }
  }
}
