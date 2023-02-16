

// function ranDom (diceNum) {

//     dice6 = Math.floor((Math.random()*diceNum+1));
//     return dice6

// }



    
   function rollDice() {
    a = document.getElementById('dropDown');
    value = a.value; 
    console.log(value);
        if (value === "die6") {
              dice6 = Math.floor((Math.random()*6+1));
              document.getElementById("diceNum").innerHTML = dice6;
          
          }
              
          else if (value === "die10") {
          dice10 = Math.floor((Math.random()*10+1)); 
          document.getElementById("diceNum").innerHTML = dice10;
      }
    }
  