var startBtn = document.getElementById("startGame");
var questionsEl = document.querySelector(".hide");
var homepageEl = document.getElementById("homepage");
var timerEl = document.getElementById("timer");


function runGame() {
    //start a timer
    //hide the homepage
    //display hide
    homepageEl.style.display = "none";
    questionsEl.style.display = "block";

    //runTimer()
    //generateQuestions()
    
}

//runtimer function
    //set timer to 45 seconds
    //if timer is done end game

//generate questions function
    //create a questions array with objects within the array
        //include question, choices(array), and answer value(index)

//check answers function
    //if the answer is correct run nextQuestion
    //if its incorrect -5 sec then run nextQuestion

//nextquestion function 
    //questionindex ++

//end game function
    //taks you to highscores page
    //aska for name and logs high score to local storage