$(document).ready(function(){
   
    let crystalOne;
    let crystalTwo;
    let crystalThree;
    let crystalFour;
    let total = 0;
    let target = 0;
    let wins = 0;
    let losses = 0;


    function setTarget() {
      let upperLimitScore = 120;
      let lowerLimitScore = 19;
      target = Math.floor(Math.random() * (upperLimitScore-lowerLimitScore)) + lowerLimitScore;
      $("#target").html("Target: " + target);
      // console.log(target);
    }

    function updateTotal () {
       $(".btn").on("click",function(event){
         console.log(event);
        // console.log("you just clicked " + );
        // console.log(this.getAttribute("data-id"));
        // console.log($(this).attr("data-id"));
      });
    }
    
    
    
    function crystalRandom() {
      let crystalCeiling = 12;
      let crystalFloor = 2;
      let crystalValue = Math.floor(Math.random() * (crystalCeiling-crystalFloor)) + crystalFloor;
      return randomValue;
    } 

    
   

    function initializeReset (){
      crystalOne = crystalRandom();
      crystalTwo = crystalRandom();
      crystalThree = crystalRandom();
      crystalFour = crystalRandom();
      setTarget();
      $("#total").html("Total: " + total);
      $("#wins").html("Wins: " + wins);
      $("#losses").html("Losses: " + losses);
    }

  function winLose() {
    
  }

    initializeReset(); 
    


})
