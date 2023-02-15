
//let ramdom = (Math.random() * 10);
//console.log(ramdom)


//function roll () {
    //let ramdom = Math.floor(Math.ramdom());

//}
//console.log(ramdom)  




    
    
   function rollDice() {
    a = document.getElementById('dropDown');
    value = a.value; 
 
        if (value === 6) {
              dice6 = Math.floor((Math.random()*6+1));
              document.getElementById("diceNum").innerHTML = dice6;
          
          }
              
          else if (value === 10) {
          dice10 = Math.floor((Math.random()*10+1)); 
          document.getElementById("diceNum").innerHTML = dice10;
      }
    }
  

    


   