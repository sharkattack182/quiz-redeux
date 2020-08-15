var startBtn = document.getElementById("startGame");
var questionsDiv = document.querySelector(".hide");
var homepageEl = document.getElementById("homepage");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("btn4");
var buttonsEl = document.getElementsByClassName(".btn");

var question = 0;
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
    generateQuestion1();
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
        answer: "btn1", //asign this to a value number and match with the buttons value clicked
    },

    {
        q: "how any licks does it take to get to the center of a tootsie pop?",
        c: ["1", "2", "3", "4"],
        answer: "btn3", 
    }
]

function generateQuestion1() {
   question = 0;   // my idea is to set question to zero then once an answer is selected got question++ making the index 1 and so on
    questionEl.textContent = questions[0].q;
   answer1.textContent = questions[0].c[0];
   answer2.textContent = questions[0].c[1];
   answer3.textContent = questions[0].c[2];
   answer4.textContent = questions[0].c[3];
    
 }

 function generateQuestion2() {
   // my idea is to set question to zero then once an answer is selected got question++ making the index 1 and so on
     questionEl.textContent = questions[1].q;
    answer1.textContent = questions[1].c[0];
    answer2.textContent = questions[1].c[1];
    answer3.textContent = questions[1].c[2];
    answer4.textContent = questions[1].c[3];
  }


//check answers function
    //if the answer is correct run nextQuestion
    //if its incorrect -5 sec then run nextQuestion
    document.addEventListener('click', function (event) {

        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches(".btn")) {
            return;
        } 
        if (event.target.id == questions[0].answer) {
            console.log("true")
            questionEl.textContent = questions[1].q;
            answer1.textContent = questions[1].c[0];
            answer2.textContent = questions[1].c[1];
            answer3.textContent = questions[1].c[2];
            answer4.textContent = questions[1].c[3];
        }
        else {
            console.log(event.target.id)
            console.log(questions[0].answer)
            secondsLeft-= 5;        
        }
            
    }, false);

//nextquestion function 
    //questionindex ++

//end game function
    //taks you to highscores page
    //aska for name and logs high score to local storage