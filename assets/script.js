var startBtn = document.getElementById("startGame");
var questionsDiv = document.querySelector(".hide");
var homepageEl = document.getElementById("homepage");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("bt4");


var secondsLeft = 45;

function runGame() {
    //start a timer
    //hide the homepage
    //display hide
    homepageEl.style.display = "none";
    questionsDiv.style.display = "block";
    runTimer();
    //runTimer()
    //generateQuestions()
    console.log(questions);
    generateQuestions();
}

//runtimer function
//set timer to 45 seconds
//if timer is done end game

function runTimer() {
    var timer = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft == 0) {
            clearInterval(timer)
        }
    }, 1000);
}
//generate questions function
    //create a questions array with objects within the array
        //include question, choices(array), and answer value(index)
var questions = [
    {
        q: "how much wood could a wood chuck chuck?",
        c: ["1", "2", "3", "4"],
        aindex: 2,
    }
]

function generateQuestions() {
    question = 0


    questionEl.textContent = questions[0].q;
}
//check answers function
    //if the answer is correct run nextQuestion
    //if its incorrect -5 sec then run nextQuestion

//nextquestion function 
    //questionindex ++

//end game function
    //taks you to highscores page
    //aska for name and logs high score to local storage