$(document).ready(function() {

 // Do a math random for the randomly generated computer number
    var computerNumber = Math.floor(Math.random()* 120) + 19;
        console.log("Computer Number:", computerNumber);
     
// Set variables for each crytal and do a math random for each
// Add on click function so that when you click a button the randomly generated number gets generated to the Players Score box in the DOM
    var gems = {}
        gemAmount1 = Math.floor(Math.random()*12+1);
            $("#gem1").attr("value", gemAmount1);
            console.log("Gem1:", gemAmount1);

        gemAmount2 = Math.floor(Math.random()*12+1);
            $("#gem2").attr("value", gemAmount2);
            console.log("Gem2:", gemAmount2);

        gemAmount3 = Math.floor(Math.random()*12+1);
            $("#gem3").attr("value", gemAmount3);
            console.log("Gem3:", gemAmount3);

        gemAmount4 = Math.floor(Math.random()*12+1);
            $("#gem4").attr("value", gemAmount4);
            console.log("Gem4:", gemAmount4);


    var playerWins = 0;
    var playerLosses = 0;
    var playerScore = 0;


 var resetGame = function(){
    computerNumber = Math.floor(Math.random()* 120) + 19;
        $("#computer-NumberGuess").text(computerNumber);
        console.log("Computer Number:", computerNumber);

    gemAmount1 = Math.floor(Math.random()*12+1);
        $("#gem1").attr("value", gemAmount1);
        console.log("Gem1:", gemAmount1);

    gemAmount2 = Math.floor(Math.random()*12+1);
        $("#gem2").attr("value", gemAmount2);
        console.log("Gem2:", gemAmount2);

    gemAmount3 = Math.floor(Math.random()*12+1);
        $("#gem3").attr("value", gemAmount3);
        console.log("Gem3:", gemAmount3);

    gemAmount4 = Math.floor(Math.random()*12+1);
        $("#gem4").attr("value", gemAmount4);
        console.log("Gem4:", gemAmount4);

    playerScore = 0;
    $("#your-score").text(playerScore);

 }


        
    $(".gem").on("click", function(){

        var value = $(this).attr("value");
            value = parseInt(value);

            playerScore += value;
            // Changing playerScore

            $("#your-score").text(playerScore);

        if(playerScore > computerNumber){
            $("#alert").html("Sorry You Lose!!");
            
            playerLosses++;
            $("#losses").html(playerLosses);
            resetGame();


        }else if (playerScore === computerNumber){
            $("#alert").html("Winner Winner Chicken Dinner!!!");
            
            playerWins++;
            $("#wins").html(playerWins);
            resetGame();

        }


    });


// Append the Computer Number to the DOM
    $("#computer-NumberGuess").text(computerNumber);



});


// Make an if else statment that if the number is less than the generated number, the user can keep guessing, everytime you add to the score do a check. call the function on the on-click.  
    // checkWin();???
    // function checkWin(){??
    //     playerScore === computerNumber;??
            
    // };

    // function checkLoss(){
    //     playerScore >= computerNumber;
    //     $("#alert").text("You Lose");
    // }


