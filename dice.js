
//let ramdom = (Math.random() * 10);
//console.log(ramdom)


//function roll () {
    //let ramdom = Math.floor(Math.ramdom());

//}
//console.log(ramdom)  



function rollDice6 () {
    dice6 = Math.floor((Math.random()*6+1));
    dice10 = Math.floor((Math.random()*10+1));
    
    document.getElementById("dicelable").innerHTML = dice6;
    document.getElementById("dicelable").innerHTML = dice10;
}


