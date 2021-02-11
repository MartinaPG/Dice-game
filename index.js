function diceRoll(){
  let player1=document.querySelector(".p1").value;
  let player2=document.querySelector(".p2").value;
  let randomNum1=Math.floor((Math.random()*6)+1);
  let randomNum2=Math.floor((Math.random()*6)+1);
  if(player1!=="" && player2!==""){
    document.querySelector(".img1").src="images/dice" + randomNum1 + ".png";
    document.querySelector(".img2").src="images/dice" + randomNum2 + ".png";
    document.querySelector(".btn2").style.visibility="visible";
    document.querySelector(".btn1").innerHTML="Again!";
    document.querySelector(".error").innerHTML="";

  }
  else{
      document.querySelector(".error").innerHTML="Insert name for both players";

  }
  if(player1!=="" && player2!==""){
  if(randomNum1>randomNum2){
    document.querySelector(".winner").innerHTML=(player1.slice(0,1)).toUpperCase()+(player1.slice(1,player1.length).toLowerCase()) + " is the winner!";
  }
  else if(randomNum1<randomNum2){
    document.querySelector(".winner").innerHTML=(player2.slice(0,1)).toUpperCase()+(player2.slice(1,player2.length).toLowerCase()) + " is the winner!";
  }
  else{
    document.querySelector(".winner").innerHTML="Draw!";
  }
  }
}
